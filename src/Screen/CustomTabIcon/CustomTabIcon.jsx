import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const CustomTabBar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BottomTabBar {...props} />
      <TouchableOpacity style={styles.addButton} onPress={() => {
                    navigation.navigate('OrderNow'); // Now this works correctly
                }}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 25, // Adjust to center vertically
    left: '50%', // Center horizontally
    marginLeft: -25, // Half of button width to perfectly center
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#F77217',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Add shadow effect
  },
});

export default CustomTabBar;
