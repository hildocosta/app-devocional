import { StyleSheet } from "react-native";
import { COLORS } from "@/components/colors/Colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 70,
    paddingBottom: 50,
    backgroundColor: COLORS.BACKGROUND,
  },
  logoImage: {
    width: 240,
    height: 140,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: COLORS.SECONDARY_TEXT,
    marginBottom: 30,
    fontSize: 15,
    width: "90%",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: COLORS.PRIMARY_TEXT,
  },
  terms: {
    color: COLORS.SECONDARY_TEXT,
    fontSize: 13,
    textAlign: "center",
    width: "90%",
    marginTop: 25,
  },
  footer: {
    marginTop: 35,
  },
  footerText: {
    color: COLORS.SECONDARY_TEXT,
    fontSize: 14,
  },
  loginLink: {
    color: COLORS.TERCEARY_TEXT,
    fontWeight: "bold",
  },
});
