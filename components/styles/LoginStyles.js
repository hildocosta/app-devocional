import { StyleSheet } from "react-native";
import { COLORS } from "../colors/Colors";

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: COLORS.BACKGROUND,
  },

  // Logo
  logoImage: {
    width: 280,
    height: 180,
    marginBottom: 50,
  },

  // ===== Inputs =====
  input: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.INPUT_BACKGROUND,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: 16,
    color: COLORS.PRIMARY_TEXT,
  },

  // Password Input container
  passwordInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginVertical: 8,
    backgroundColor: COLORS.INPUT_BACKGROUND,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.PRIMARY_TEXT,
  },

  toggleSecureButton: {
    marginLeft: 10,
  },

  // Botão Entrar
  loginBtn: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY_BUTTON,
    marginTop: 10,
  },

  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.BUTTON_TEXT,
  },

  // Esqueceu a senha
  forgotBtn: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 5,
    marginBottom: 30,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },

  // Divider OU
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.DEFAULT_BORDER,
    opacity: 0.5,
  },
  dividerText: {
    marginHorizontal: 12,
    color: COLORS.SECONDARY_TEXT,
    fontWeight: "600",
    fontSize: 14,
  },

  // Footer / Link para cadastro
  footerText: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 20,
  },
  signUpText: {
    fontWeight: "bold",
    color: COLORS.PRIMARY,
  },

  // Estilo para Animated Button (ButtonPrimaryAnimated)
  animatedButtonContainer: {
    width: "100%",
  },

  // Loader e texto do botão
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.BUTTON_TEXT,
  },
});
