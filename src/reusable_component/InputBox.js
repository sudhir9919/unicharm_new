import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputBox = ({ 
  label, 
  style, 
  placeholder, 
  secureTextEntry, 
  labelBackgroundColor ,// New prop for label background color
  labelColor
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textColor, setTextColor] = useState('#B0B0B0'); // Default placeholder color
  const [inputValue, setInputValue] = useState(''); // State for the input value

  const handleFocus = () => {
    setIsFocused(true);
    setTextColor('#000'); // Change color to black on focus
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (inputValue.length === 0) {
      setTextColor('#B0B0B0'); // Change back to placeholder color if no text
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
        <View style={[styles.labelContainer, { backgroundColor: labelBackgroundColor || '#fff' }]}>
          <Text style={[styles.label,{color:labelColor} ,isFocused && styles.focusedLabel]}>{label}</Text>
        </View>
        <TextInput
          style={[styles.input, { color: textColor }]} // Set text color dynamically
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder || "Enter your text"} // Use placeholder prop
          placeholderTextColor="#B0B0B0"
          value={inputValue} // Bind the input value to state
          onChangeText={(text) => setInputValue(text)} // Update state on text change
          secureTextEntry={secureTextEntry} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 8,
    position: 'relative',
    paddingHorizontal: 10,
    paddingTop: 10,
    width: 300 // Default width
  },
  focusedInput: {
    borderColor: '#3C459A',
  },
  labelContainer: {
    position: 'absolute',
    top: -10,
    left: 20,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  label: {
    color: '#666',
    fontSize: 14,
  },
  focusedLabel: {
    color: '#3C459A',
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});

export default InputBox;
