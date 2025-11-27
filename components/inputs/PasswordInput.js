import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS, PLACEHOLDERS } from "../colors/Colors";
import { styles } from "../styles/LoginStyles";

export default function PasswordInput({
  value,
  onChangeText,
  inputRef,
  onSubmitEditing,
  onFocus,
  onBlur,
  isFocused,
  onValidationChange,
}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Validação avançada de senha
  const validatePassword = (password) => {
    const trimmed = password.trim();
    if (!trimmed) return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(trimmed);
  };

  useEffect(() => {
    if (onValidationChange) onValidationChange(validatePassword(value));
  }, [value, onValidationChange]);

  return (
    <View style={{ width: "100%" }}>
      <View
        style={[
          styles.passwordInputContainer,
          { borderColor: isFocused ? COLORS.ACTIVE_BORDER : COLORS.DEFAULT_BORDER },
        ]}
      >
        <TextInput
          ref={inputRef}
          style={styles.passwordInput}
          placeholder={PLACEHOLDERS.PASSWORD}
          placeholderTextColor={COLORS.PLACEHOLDER}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyType="done"
          onSubmitEditing={onSubmitEditing}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          autoComplete="off"
          contextMenuHidden={true}
          editable={true}
          selectTextOnFocus={false}
        />
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={styles.toggleSecureButton}
        >
          <Feather
            name={secureTextEntry ? "eye-off" : "eye"}
            size={20}
            color={COLORS.PLACEHOLDER}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
