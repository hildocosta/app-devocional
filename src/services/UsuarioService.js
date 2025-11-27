import axios, { isAxiosError } from 'axios';
import { BACKEND_BASE_URL } from '../config/config';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// =============================
// URLs da API
// =============================
const API_USUARIOS = `${BACKEND_BASE_URL}/api/usuarios`;
const API_LOGIN = `${API_USUARIOS}/login`;

// =============================
// 1. LOGIN
// =============================
export async function loginUser(email, senha) {
  console.log("Tentando login com:", { email, senha });

  try {
    const response = await axios.post(API_LOGIN, { email, senha });
    console.log("Login response data:", response.data);

    if (response.data.token) {
      await AsyncStorage.setItem('userToken', response.data.token);
      console.log("Token salvo no AsyncStorage");
    }

    return response.data;
  } catch (error) {
    console.log("Erro Axios:", error);
    if (isAxiosError(error)) {
      console.log("Erro response:", error.response?.data);
      console.log("Status code:", error.response?.status);
      console.log("Headers:", error.response?.headers);
    }

    let message = 'Falha ao fazer login. Credenciais inválidas.';
    if (isAxiosError(error) && error.response?.data?.mensagem) {
      message = error.response.data.mensagem;
    }

    Alert.alert('Erro de Login', message);
    throw error;
  }
}

// =============================
// 2. REGISTRO
// =============================
export async function registerUser(nomeCompleto, email, senha) {
  console.log("Tentando registrar usuário com:", { nomeCompleto, email });

  try {
    const response = await axios.post(`${API_USUARIOS}/register`, {
      nomeCompleto,
      email,
      senha,
    });
    console.log("Registro response data:", response.data);

    return response.data;
  } catch (error) {
    console.log("Erro Axios no registro:", error);
    if (isAxiosError(error)) {
      console.log("Erro response:", error.response?.data);
      console.log("Status code:", error.response?.status);
      console.log("Headers:", error.response?.headers);
    }

    let message = 'Falha ao cadastrar usuário. Verifique os dados.';
    if (isAxiosError(error) && error.response?.data?.mensagem) {
      message = error.response.data.mensagem;
    }

    Alert.alert('Erro de Cadastro', message);
    throw error;
  }
}

// =============================
// 3. BUSCAR PERFIL
// =============================
export async function getProfile() {
  const userToken = await AsyncStorage.getItem('userToken');
  if (!userToken) throw new Error("Token de autenticação não encontrado. Usuário deslogado.");

  try {
    const config = { headers: { 'Authorization': `Bearer ${userToken}` } };
    const response = await axios.get(`${API_USUARIOS}/me`, config);
    console.log("Perfil carregado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar perfil:", isAxiosError(error) ? error.response?.data || error.message : error);
    let message = 'Falha ao carregar o perfil. Suas credenciais podem ter expirado.';
    Alert.alert('Erro de Perfil', message);
    throw error;
  }
}

// =============================
// 4. ATUALIZAR PERFIL
// =============================
export async function updateProfile(userId, updateData) {
  const userToken = await AsyncStorage.getItem('userToken');
  if (!userToken) {
    Alert.alert('Erro de Autenticação', 'Sessão expirada. Por favor, faça login.');
    throw new Error("Token de autenticação não encontrado.");
  }

  try {
    const config = { 
      headers: { 
        'Authorization': `Bearer ${userToken}`, 
        'Content-Type': 'application/json' 
      } 
    };
    const response = await axios.put(`${API_USUARIOS}/${userId}`, updateData, config);
    console.log("Perfil atualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro na atualização do perfil:", isAxiosError(error) ? error.response?.data || error.message : error);

    let message = 'Falha ao atualizar o perfil. Verifique os dados.';
    if (isAxiosError(error) && error.response) {
      if ([401, 403].includes(error.response.status)) message = 'Não autorizado. Suas credenciais podem ter expirado.';
      else if (error.response.data?.mensagem) message = error.response.data.mensagem;
    }

    Alert.alert('Erro de Atualização', message);
    throw error;
  }
}

// =============================
// 5. LOGOUT
// =============================
export async function logoutUser() {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log("Logout realizado. Token removido do AsyncStorage");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    throw error;
  }
}
