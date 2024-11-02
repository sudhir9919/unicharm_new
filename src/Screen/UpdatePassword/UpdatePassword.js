import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constant/Colors";
import Icons from 'react-native-vector-icons/AntDesign';
import InputBox from "../../reusable_component/InputBox";
import CustomButton from "../../reusable_component/Button";
import { useTheme } from '../../Context/ThemeContext';

const UpdatePassword = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  
  // Set background and text colors based on theme
  const backgroundColor = isDarkMode ? '#1c1c1c' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#333'; // Adjust text color for visibility

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name='left' size={30} color={textColor} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.text, { color: textColor }]}>Update Password</Text>
        <InputBox 
          label={"New Password"} 
          secureTextEntry={true} 
          labelBackgroundColor={isDarkMode ? '#333' : Colors.white} 
          labelColor={textColor} 
        />
        <InputBox 
          label={"Confirm Password"} 
          secureTextEntry={true} 
          labelBackgroundColor={isDarkMode ? '#333' : Colors.white} 
          labelColor={textColor} 
        />
        <CustomButton title="Submit" style={styles.submit} />
      </View>
    </SafeAreaView>
  );
}

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    marginLeft: 30,
  },
  icon: {
    marginTop: 20,
    marginLeft: 16,
  },
  submit: {
    marginTop: 30,
  },
});
