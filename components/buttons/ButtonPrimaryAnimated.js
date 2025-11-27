import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { COLORS, PLACEHOLDERS } from "../colors/Colors";
import { styles } from "../styles/LoginStyles"; 

export default function ButtonPrimaryAnimated({
  onPress,
  loading = false,
  title = PLACEHOLDERS.LOGIN_BUTTON,
  style = {}, 
}) {
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let animation;
    if (loading) {
      animation = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 0.9,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
        ])
      );
      animation.start();
    } else {
      animatedValue.stopAnimation();
      animatedValue.setValue(1);
    }

    return () => animation && animation.stop();
  }, [loading, animatedValue]);

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale: animatedValue }],
          opacity: loading ? 0.8 : 1,
          width: "100%",
        },
        style,
      ]}
    >
      <TouchableOpacity
        style={[styles.loginBtn, { backgroundColor: COLORS.PRIMARY_BUTTON }]}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.BUTTON_TEXT} />
        ) : (
          <Text style={[styles.loginText, { color: COLORS.BUTTON_TEXT }]}>{title}</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}
