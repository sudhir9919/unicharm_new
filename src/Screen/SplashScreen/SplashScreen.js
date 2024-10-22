import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Ensure this path is correct

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0.7)).current; 
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1.4, // Scale to 1.4
      duration: 1500, // Animation duration
      useNativeDriver: true, // Use native driver for performance
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // Navigate to LoginScreen
    }, 1000); // Navigate after 1000 milliseconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [scaleAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Image source={require('../../assets/Images/unicharm-logo.png')} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
