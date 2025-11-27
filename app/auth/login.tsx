import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../../components/styles/LoginStyles";
import { COLORS, PLACEHOLDERS } from "@/components/colors/Colors";
import ButtonPrimaryAnimated from "../../components/buttons/ButtonPrimaryAnimated";
import EmailInput from "../../components/inputs/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput";

// Serviço de login
import { loginUser } from "../../src/services/UsuarioService";

export default function Login() {
  const router = useRouter();

  const emailRef = useRef<TextInput>(null);
  const senhaRef = useRef<TextInput>(null);

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [focusEmail, setFocusEmail] = useState<boolean>(false);
  const [focusPassword, setFocusPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [senhaValid, setSenhaValid] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      emailRef.current?.focus();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert(PLACEHOLDERS.ALERT_TITLE, PLACEHOLDERS.ALERT_MESSAGE);
      return;
    }

    if (!emailValid) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return;
    }

    if (!senhaValid) {
      Alert.alert(
        "Senha inválida",
        "A senha deve ter no mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais."
      );
      return;
    }

    setLoading(true);
    try {
      await loginUser(email, senha);
      router.replace("/welcome/welcome");
    } catch (error) {
      Alert.alert(PLACEHOLDERS.ERROR_TITLE, PLACEHOLDERS.ERROR_MESSAGE);
      console.error("Erro no login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          {/* Logo */}
          <Image
            source={require("../../assets/images/splash-biblia.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />

          {/* Email */}
          <EmailInput
            value={email}
            onChangeText={setEmail}
            inputRef={emailRef}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            isFocused={focusEmail}
            onSubmitEditing={() => senhaRef.current?.focus()}
            onValidationChange={(isValid: boolean) => setEmailValid(isValid)}
          />

          {/* Senha */}
          <PasswordInput
            value={senha}
            onChangeText={setSenha}
            inputRef={senhaRef}
            isFocused={focusPassword}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => setFocusPassword(false)}
            onSubmitEditing={handleLogin}
            onValidationChange={(isValid: boolean) => setSenhaValid(isValid)}
          />

          {/* Esqueceu a senha? */}
          <View style={styles.forgotBtn}>
            <Text
              style={[styles.forgotText, { color: COLORS.TERCEARY_TEXT }]}
              onPress={() => Alert.alert(PLACEHOLDERS.FEEDBACK_TITLE)}
            >
              {PLACEHOLDERS.FORGOT_PASSWORD}
            </Text>
          </View>

          {/* Botão Entrar */}
          <ButtonPrimaryAnimated
            onPress={handleLogin}
            loading={loading}
            style={{ marginBottom: 25 }}
          />

          {/* Divider OU */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Link para Cadastro */}
          <Text style={[styles.footerText, { color: COLORS.SECONDARY_TEXT }]}>
            {PLACEHOLDERS.NO_ACCOUNT}{" "}
            <Text
              style={[styles.signUpText, { color: COLORS.TERCEARY_TEXT }]}
              onPress={() => router.push("/auth/register")}
            >
              {PLACEHOLDERS.SIGN_UP}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
