import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import Colors from "../../constant/Colors";
import Icons from 'react-native-vector-icons/AntDesign'
import InputBox from "../../reusable_component/InputBox";
import CustomButton from "../../reusable_component/Button";

const UpdatePassword = () => {
  return (
   <SafeAreaView>
    <View style={styles.Icon}>
      <TouchableOpacity>
      <Icons name='left' size ={30} color={Colors.Text_color}/>
      </TouchableOpacity>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.text}>Update Password</Text>
      <InputBox label={"New Password"} secureTextEntry={true}/>
      <InputBox label={"Confirm Password"} secureTextEntry={true}/>
      <CustomButton title="Submit" style={styles.Submit} />
    </View>
   </SafeAreaView>
   
  );
}

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Text_color, 
  },
  text: {
    color: Colors.Text_color,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    marginLeft: 30,
  },
  Icon:{
    marginTop:20,
    marginLeft:16
  },
Submit:{
  
  marginTop:30
}
});
