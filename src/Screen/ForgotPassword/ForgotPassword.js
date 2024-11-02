import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constant/Colors";
import Icons from 'react-native-vector-icons/AntDesign'
import InputBox from "../../reusable_component/InputBox";
import CustomButton from "../../reusable_component/Button";
import { useTheme } from '../../Context/ThemeContext';

const ForgotPassword = ({navigation}) => {
  const { isDarkMode } = useTheme();
  const Forgot_bg = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';
  return (
   <SafeAreaView style={[styles.container,{backgroundColor:Forgot_bg}]}>
    <View style={styles.Icon}>
      <TouchableOpacity>
      <Icons name='left' size ={30} color={'#7a7777'} onPress={() => navigation.goBack()}/>
      </TouchableOpacity> 
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={[styles.text,{textColor}]}>Forgot Password</Text>
      <InputBox label={"Email Address"}  labelBackgroundColor={isDarkMode ? Colors.Text_color:Colors.white} labelColor={isDarkMode?Colors.white:Colors.Text_color }/>
      <CustomButton title="Submit" style={styles.Submit} onPress={() => {
                    navigation.navigate('UpdatePassword'); // Now this works correctly
                }}/>
    </View>
   </SafeAreaView>
   
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    
  },
  Icon:{
    marginTop:20,
    marginLeft:16
  },
Submit:{
  
  marginTop:30
},
IconColor:{
   color:'black',
},
});
