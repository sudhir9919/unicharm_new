import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBox2 from '../../reusable_component/InputBox2';
import { useTheme } from '../../Context/ThemeContext';
const { width } = Dimensions.get('window');

const MyProfile = ({navigation}) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 234 567 8901');
  const [editing, setEditing] = useState(false);
  const { isDarkMode } = useTheme();
  const { backgroundColor, textColor,NotificationsCard_bg,text_MyOrder, Forgot_bg } = useTheme(); 
  return (
    <View style={[styles.container,{backgroundColor:Forgot_bg}]}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={24} color="#000" onPress={() => navigation.goBack()}/>
        </TouchableOpacity>
        <Text style={[styles.headerTitle,{color:text_MyOrder}]}>Profile</Text>
        <TouchableOpacity onPress={() => setEditing(!editing)}>
          <Text style={[styles.editText,{color:text_MyOrder}]}>{editing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Dummy image
          style={styles.profilePicture}
        />
        <TouchableOpacity style={styles.editButton}>
          <Icon name="camera-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <InputBox2 style={styles.inputBox} placeholder="User Id" value={name}  />
        <InputBox2 placeholder="Employee Code" style={styles.inputBox} />
        <InputBox2 placeholder="Name" value={name}  style={styles.inputBox}/>
        <InputBox2 placeholder="Email" value={email} style={styles.inputBox} />
        <InputBox2 placeholder="State" style={styles.inputBox} />
        <InputBox2 placeholder="City" style={styles.inputBox} />
        <InputBox2 placeholder="Location" style={styles.inputBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: 'black',
  },
  editText: {
    color: '#3C459A',
    fontSize: 16,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profilePicture: {
    width: width * 0.25, // 25% of the screen width
    height: width * 0.25, // Same height for a square aspect ratio
    borderRadius: (width * 0.25) / 2, // Half the width for a circle
    borderWidth: 2,
    borderColor: '#3C459A',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3C459A',
    borderRadius: 20,
    padding: 5,
    marginBottom: 15, // Adjust this value to position the icon properly
    marginRight: 118, // Adjust this value to position the icon properly
    zIndex: 1, // 
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%', // Full width of the container
  },
  inputBox: {
    height:48,
  }
});

export default MyProfile;
