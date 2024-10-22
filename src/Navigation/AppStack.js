import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screen/SplashScreen/SplashScreen';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
        headerStyle: {
          backgrouColor: '#fff',
        }
      }}>
        <Stack.Screen 
        name="SplashScreen"
        component={SplashScreen} 
        options={{
          title:'welcome Home'
        }}
        />
        <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen} 
        options={{
          title:'login Screen'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
