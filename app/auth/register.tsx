import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Alert,
  TextInput as RNTextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { registerUser } from "../../src/services/UsuarioService";
import ButtonPrimaryAnimated from "@/components/buttons/ButtonPrimaryAnimated";
import PasswordInput from "../../../frontend/components/inputs/PasswordInput";
import EmailInput from "@/components/inputs/EmailInput";
import NameInput from "@/components/inputs/NameInput";
import { styles } from "@/components/styles/RegisterStyles";
import { PLACEHOLDERS } from "@/components/colors/Colors";

export default function Register() {
  const router = useRouter();

  const nameRef = useRef<RNTextInput | null>(null);
  const emailRef = useRef<RNTextInput | null>(null);
  const senhaRef = useRef<RNTextInput | null>(null);

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaValid, setSenhaValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Focar o primeiro input ao montar o componente
  useEffect(() => {
    const timer = setTimeout(() => {
      nameRef.current?.focus();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = async () => {
    if (!nomeCompleto || !email || !senha) {
      Alert.alert(PLACEHOLDERS.ALERT_TITLE, "Preencha todos os campos para continuar.");
      return;
    }

    if (!emailValid) {
      Alert.alert(PLACEHOLDERS.ALERT_TITLE, "Digite um email válido.");
      return;
    }

    if (!senhaValid) {
      Alert.alert(PLACEHOLDERS.ALERT_TITLE, "A senha não atende aos critérios de segurança.");
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser(nomeCompleto, email, senha);
      console.log("Cadastro realizado:", data);

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
        {
          text: "OK",
          onPress: () => router.replace("/auth/login"),
        },
      ]);
    } catch (error) {
      console.log("Erro no cadastro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} 
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/splash-biblia.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>{PLACEHOLDERS.SUBTITLE}</Text>

        <View style={styles.inputGroup}>
          {/* Nome */}
          <NameInput
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
            inputRef={nameRef}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            isFocused={focusName}
            onSubmitEditing={() => emailRef.current?.focus()}
            onValidationChange={(isValid: boolean) => console.log("Nome válido?", isValid)}
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
            onSubmitEditing={handleRegister}
            onValidationChange={setSenhaValid}
          />
        </View>

        {/* Botão Cadastrar */}
        <View style={{ width: "100%", marginTop: 10 }}>
          <ButtonPrimaryAnimated
            onPress={handleRegister}
            loading={loading}
            title={PLACEHOLDERS.REGISTER_BUTTON}
          />
        </View>

        <Text style={styles.terms}>{PLACEHOLDERS.TERMS_TEXT}</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {PLACEHOLDERS.ALREADY_HAVE_ACCOUNT}{" "}
            <Text
              style={styles.loginLink}
              onPress={() => router.push("/auth/login")}
            >
              {PLACEHOLDERS.LOGIN_BUTTON}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
