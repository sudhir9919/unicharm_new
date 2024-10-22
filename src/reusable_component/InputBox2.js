import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputBox2 = ({ placeholder,value,editable, style }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textColor, setTextColor] = useState('#B0B0B0'); // Default placeholder color

  const handleFocus = () => {
    setIsFocused(true);
    setTextColor('#000'); // Change color to black on focus
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.container, style, isFocused && styles.focusedInput]}>
      <TextInput
        style={[styles.input, { color: textColor }]} // Set text color dynamically
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0" // Adjust placeholder text color here
        onChangeText={(text) => {
          if (text.length === 0) {
            setTextColor('#B0B0B0'); // Change back to placeholder color if empty
          } else {
            setTextColor('#000'); // Keep text color black while typing
          }
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 8,
    width: 300,
    paddingTop: 10,
  },
  focusedInput: {
    borderColor: '#3C459A',
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
});

export default InputBox2;
