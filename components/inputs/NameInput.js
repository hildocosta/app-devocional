import React, { useEffect } from "react";
import { TextInput, View } from "react-native";
import { COLORS, PLACEHOLDERS } from "../colors/Colors";
import { styles } from "../styles/LoginStyles";

export default function NameInput({
  value,
  onChangeText,
  inputRef,
  onSubmitEditing,
  onFocus,
  onBlur,
  isFocused,
  onValidationChange,
}) {
  // Função para validar nome completo
  const validateName = (name) => {
    const trimmedName = name.trim();
    // Nome válido se tiver pelo menos 2 caracteres
    return trimmedName.length >= 2;
  };

  useEffect(() => {
    if (onValidationChange) onValidationChange(validateName(value));
  }, [value, onValidationChange]);

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        ref={inputRef}
        style={[styles.input, { borderColor: isFocused ? COLORS.ACTIVE_BORDER : COLORS.DEFAULT_BORDER }]}
        placeholder={PLACEHOLDERS.NAME}
        placeholderTextColor={COLORS.PLACEHOLDER}
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
