import React, { useEffect } from "react";
import { TextInput, View } from "react-native";
import { COLORS, PLACEHOLDERS } from "../colors/Colors";
import { styles } from "../styles/LoginStyles";

export default function EmailInput({
  value,
  onChangeText,
  inputRef,
  onSubmitEditing,
  onFocus,
  onBlur,
  isFocused,
  onValidationChange, 
}) {
  // Função para validar email
  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmedEmail);
  };

  useEffect(() => {
    if (onValidationChange) onValidationChange(validateEmail(value));
  }, [value, onValidationChange]);

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        ref={inputRef}
        style={[styles.input, { borderColor: isFocused ? COLORS.ACTIVE_BORDER : COLORS.DEFAULT_BORDER }]}
        placeholder={PLACEHOLDERS.EMAIL}
        placeholderTextColor={COLORS.PLACEHOLDER}
        keyboardType="email-address"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        returnKeyType="next"
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}
