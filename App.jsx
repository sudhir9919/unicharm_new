import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StatusBar } from 'react-native';
import SplashScreen from './src/Screen/SplashScreen/SplashScreen';
import LoginScreen from './src/Screen/LoginScreen/LoginScreen';
import DashboardScreen from './src/Screen/Dashboard/DashboardScreen';
import InventoryScreen from './src/Screen/Inventory/Inventory';
import OrdersScreen from './src/Screen/My order/OrderScreen';
import MyProfile from './src/Screen/My Profile/MyProfile';
import Colors from './src/constant/Colors';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons';
import UpdatePassword from './src/Screen/UpdatePassword/UpdatePassword';
import ForgotPassword from './src/Screen/ForgotPassword/ForgotPassword';
import NotificationScreen from './src/Screen/NotificationScreen/NotificationScreen';
import SettingsScreen from './src/Screen/SettingScreen/SettingScreen';
import CustomTabBar from './src/Screen/CustomTabIcon/CustomTabIcon'; // Import CustomTabBar
import OrderNow from './src/Screen/OrderNow/OrderNow';
import MyOrder from './src/Screen/My order/MyOrder';
import CompletedScreen from './src/Screen/CompletedOrder/CompletedScreen';
import { ThemeProvider} from './src/Context/ThemeContext';
import { useTheme } from './src/Context/ThemeContext';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigation
const AppTabs = () => {
  const { isDarkMode } = useTheme();
  const { backgroundColor, textColor,NotificationsCard_bg,Forgot_bg } = useTheme(); 
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />} // Use CustomTabBar here
      screenOptions={{
        tabBarActiveTintColor: '#3C459A', // Active tab icon color
        tabBarInactiveTintColor: '#999',   // Inactive tab icon color
        headerShown: false,
        tabBarStyle: {
          backgroundColor:NotificationsCard_bg // Set background color based on theme
          
        },
      }}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarLabel: () => <Text>Home</Text>,
          tabBarIcon: ({ color }) => <Icons name='home' size={25} color={color} />, // Use color prop
        }}
      />
      <Tab.Screen
        name="InventoryScreen"
        component={InventoryScreen}
        options={{
          tabBarLabel: () => <Text>Inventory</Text>,
          tabBarIcon: ({ color }) => <Icon name='tasks' size={25} color={color} />, // Use color prop
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarLabel: () => <Text>Order</Text>,
          tabBarIcon: ({ color }) => <Icons name='shopping-bag' size={25} color={color} />, // Use color prop
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: () => <Text>Profile</Text>,
          tabBarIcon: ({ color }) => <Icons1 name='person-circle' size={25} color={color} />, // Use color prop
        }}
      />
    </Tab.Navigator>
  );
};

// Stack Navigation including Login flow and Tabs
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="OrderNow" component={OrderNow} />
      <Stack.Screen name="CompletedScreen" component={CompletedScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={"#fff"} />
      <AppStack />
    </NavigationContainer>
  </ThemeProvider>
  );
};

export default App;
