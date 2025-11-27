import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/components/colors/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#333" },
  background: {
    width,
    height,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 60,
    paddingHorizontal: 25,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    width: "100%",
    marginTop: height * 0.18,
    justifyContent: "flex-start",
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.TEXT_COLOR,
    fontWeight: "300",
    letterSpacing: 3,
    marginBottom: 5,
  },
  lineContainer: { paddingVertical: 10 },
  line: { width: 60, height: 3, backgroundColor: COLORS.HIGHLIGHT_COLOR },
  mainTitle: {
    fontSize: 36,
    color: COLORS.TEXT_COLOR,
    fontWeight: "800",
    lineHeight: 45,
    marginTop: 20,
  },
  highlightText: { color: COLORS.HIGHLIGHT_COLOR },
  description: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 24,
    marginTop: 35,
    textAlign: "justify",
  },
  button: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: COLORS.HIGHLIGHT_COLOR,
    paddingVertical: 18,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#3E2723",
    fontWeight: "700",
  },
});
