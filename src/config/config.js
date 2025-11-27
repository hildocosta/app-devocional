// frontend-app/src/config/config.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

// Altere o IP local conforme sua máquina (verificado no PowerShell)
export const BACKEND_BASE_URL =
  Constants.expoConfig?.extra?.BACKEND_URL ?? 'http://192.168.0.3:8000';

// Cria uma instância do Axios
export const api = axios.create({
  baseURL: `${BACKEND_BASE_URL}/api`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Adiciona token automaticamente nas requisições autenticadas
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('userToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
