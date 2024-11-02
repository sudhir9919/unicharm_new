import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../Context/ThemeContext';

const ThanksPopup = ({ visible, onClose }) => {
    const { isDarkMode } = useTheme();
    const Forgot_bg = isDarkMode ? '#333' : '#fff';
    
    const Text_bg = isDarkMode ? '#fff': '#000'
    
    const navigation = useNavigation();
   const handleOnPress = () => {
    navigation.navigate('OrdersScreen');
    onClose();
   }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView,{backgroundColor:Forgot_bg}]}>
          
          <Image 
            source={require('../../assets/Images/thanks-icon.png')} 
            style={styles.icon}
          />

          <Text style={styles.thankYouText}>Thank You</Text>
          <Text style={[styles.orderStatusText,{color:Text_bg}]}>Order successfully punched</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleOnPress}
          >
            <Text style={styles.buttonText}>My Orders</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  icon: {
    width: 160, // Adjust the width as necessary
    height: 100, // Adjust the height as necessary
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B4BB9', // Change to your desired color
  },
  orderStatusText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333', // Change to your desired color
  },
  button: {
    backgroundColor: '#4B4BB9', // Change to match your theme
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThanksPopup;
