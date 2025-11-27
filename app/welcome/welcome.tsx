import React from "react";
import { View, ImageBackground, Text, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { PLACEHOLDERS } from "@/components/colors/Colors";
import { styles } from "@/components/styles/WelcomeStyles";
import ButtonPrimaryAnimated from "@/components/buttons/ButtonPrimaryAnimated";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleStart = () => {
    // router.replace("/profile/profile");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../../assets/images/background-biblia.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.subtitle}>{PLACEHOLDERS.WELCOME_SUBTITLE}</Text>

          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>

          <Text style={styles.mainTitle}>
            {PLACEHOLDERS.WELCOME_TITLE_PART1}
            <Text style={styles.highlightText}>
              {PLACEHOLDERS.WELCOME_TITLE_HIGHLIGHT}
            </Text>
            {PLACEHOLDERS.WELCOME_TITLE_PART2}
          </Text>

          <Text style={styles.description}>
            {PLACEHOLDERS.WELCOME_DESCRIPTION}
          </Text>
        </View>

        {/* Botão animado reutilizável */}
        <ButtonPrimaryAnimated
          onPress={handleStart}
          title={PLACEHOLDERS.WELCOME_BUTTON}
        />
      </ImageBackground>
    </View>
  );
}
