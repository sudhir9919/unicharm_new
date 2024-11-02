import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
const NotificationScreen = () => {
    const { isDarkMode } = useTheme();
  const Forgot_bg = isDarkMode ? '#000' : '#fff';
  const Card_bg = isDarkMode ? '#333' : '#fff';
  const Text_bg = isDarkMode ? '#fff': '#000'
  // Sample data for notifications
  const notifications = [
    { id: '1', title: 'New Order Received', message: 'You have received a new order from Distributor Name.', date: '18/10/2024' },
    { id: '2', title: 'Order Shipped', message: 'Your order has been shipped and is on its way!', date: '17/10/2024' },
    { id: '3', title: 'Payment Received', message: 'Your payment has been successfully processed.', date: '16/10/2024' },
    { id: '4', title: 'Reminder', message: 'Don’t forget to complete your profile.', date: '15/10/2024' },
  ];

  // Render each notification item
  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity style={[styles.card,{backgroundColor:Card_bg}]}>
      <Text style={[styles.cardTitle,{color:Text_bg}]}>{item.title}</Text>
      <Text style={[styles.cardMessage,{color:Text_bg}]}>{item.message}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container,{backgroundColor:Forgot_bg}]}>
      <Text style={[styles.headerText,{color:Text_bg}]}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'black'
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardMessage: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

export default NotificationScreen;
