import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const DashboardScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // State to manage focus

  const onChange = (event, selectedDate,) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  // Functions to handle icon presses
  const handleNotificationPress = () => {
    Alert.alert("Notifications clicked");
  };

  const handleSettingsPress = () => {
    Alert.alert("Settings clicked");
  };

  const handleLogoutPress = () => {
    Alert.alert("Logout clicked");
  };

  // Function to handle Orders div press
  const handleOrdersPress = () => {
    // Alert.alert("500 Orders clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/Images/unicharm-logo.png')} // Replace with your logo URL
          style={styles.logo}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Icon name="notifications-outline" size={24} color="#000" onPress={() => {
                    navigation.navigate('NotificationScreen'); // Now this works correctly
                }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSettingsPress} style={styles.icon}>
            <Icon name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutPress} style={styles.icon}>
            <Icon name="log-out-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.squareDiv}>
          <Text style={styles.squareText}>All</Text>
        </View>
        <View style={[styles.dateInputContainer, isFocused && styles.focusedInput]}>
          <TextInput
            style={styles.dateInput}
            placeholder="Choose Date"
            placeholderTextColor="#999"
            value={date.toLocaleDateString()} // Format the date as needed
            editable={false} // Make the input non-editable
            onFocus={() => {
              setShow(true);
              setIsFocused(true); // Set focus state to true
            }}
            onBlur={() => setIsFocused(false)} // Reset focus state on blur
          />
          <TouchableOpacity onPress={() => {
            setShow(true);
            setIsFocused(true); // Keep the focus state true when clicking the icon
          }}>
            <Icon name="calendar-outline" size={24} color="#999" style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Touchable Orders Div */}
      <TouchableOpacity onPress={handleOrdersPress} style={styles.ordersDiv}>
        <Image 
          source={require('../../assets/Images/punch-order-icon.png')} // Replace with your small image URL
          style={styles.smallIcon}
        />
        <Text style={styles.ordersText}>500 Orders</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.content}>Welcome to the Dashboard!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  squareDiv: {
    width: '15%',
    height: 50,
    backgroundColor: '#3C459A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  squareText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginLeft: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  focusedInput: {
    borderColor: 'blue', // Change border color to blue when focused
  },
  dateInput: {
    flex: 1,
    height: 40,
    color: '#000', // Set text color to black
  },
  calendarIcon: {
    marginLeft: 10,
  },
  // Styles for the new Orders div
  ordersDiv: {
    width: '30%', // Double the width of the "All" div
    height: 75,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 4, // Add shadow effect
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    marginVertical: 15, // Add margin for spacing
    marginLeft: 20,
    position: 'relative', // Set position relative to contain the absolute positioned icon
  },
  smallIcon: {
    position: 'absolute',
    top: -10, // Adjust as needed
    left: 10, // Adjust as needed
    width: 30, // Set width for the small icon
    height: 30, // Set height for the small icon
    zIndex: 1, // Bring to front
  },
  ordersText: {
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    fontSize: 18,
  },
});

export default DashboardScreen;
