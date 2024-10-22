import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const CustomButton = ({
  title = "Click Me", 
  onPress,
  backgroundColor = "#3C459A", 
  textColor = "#fff", 
  disabled = false,
  loading = false,
  fontSize = 16, 
  borderRadius = 8, 
  paddingVertical = 10, 
  paddingHorizontal = 20,
  style,
  
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading} 
      style={[
        styles.button,
        {
          backgroundColor: disabled ? '#aaa' : backgroundColor, // Grey if disabled
          borderRadius,
          paddingVertical,
          paddingHorizontal,
          width: width * 0.76, // Set button width as 80% of the screen width
          
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.buttonText, { color: textColor, fontSize }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default CustomButton;
