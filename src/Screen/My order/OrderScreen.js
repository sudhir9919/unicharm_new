import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
const OrderScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const Order_bg = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';
  // State to track active tab
  const [activeTab, setActiveTab] = useState('processing');

  // Sample data for the orders
  const processingOrders = [
    { id: '1', date: '18/10/2024', name: 'Distributor Name', idInfo: 'Distributor ID', phone: 'xxxxxxxxxx', email: 'xxxxx@yahoo.com' },
    { id: '2', date: '17/10/2024', name: 'Distributor Name', idInfo: 'Distributor ID', phone: 'xxxxxxxxxx', email: 'xxxxx@yahoo.com' },
    { id: '3', date: '16/10/2024', name: 'Distributor Name', idInfo: 'Distributor ID', phone: 'xxxxxxxxxx', email: 'xxxxx@yahoo.com' },
  ];

  const completedOrders = [
    { id: '4', date: '15/10/2024', name: 'Distributor Name', idInfo: 'Distributor ID', phone: '+9176xxxx47', email: 'torxxto@yahoo.com' },
    { id: '5', date: '14/10/2024', name: 'Distributor Name', idInfo: 'Distributor ID', phone: '+9178xxxxx91', email: 'raixx@yahoo.com' },
  ];

  // Render each order item
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={[styles.orderDate,{color:textColor}]}>{item.date}</Text>
      <View style={styles.orderInfo}>
        <View style={styles.orderDetails}>
          <Text style={[styles.orderText,{color:textColor}]}>{item.name} | {item.idInfo}</Text>
          <Text style={[styles.orderText,{color:textColor}]}>📞 {item.phone}  ✉️ {item.email}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.viewDetailButton}>
        <Text style={styles.viewDetailText}>View Detail</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container,{backgroundColor:Order_bg}]}>
      {/* Header */}
      <View style={[styles.header,{backgroundColor:Order_bg}]}>
        <Text style={[styles.headerText,{color:textColor}]}>My Orders</Text>
      </View>

      {/* Tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={activeTab === 'processing' ? styles.tabButtonActive : styles.tabButtonInactive}
          onPress={() => setActiveTab('processing')}
        >
          <Text style={styles.tabButtonText}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 'completed' ? styles.tabButtonActive : styles.tabButtonInactive}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={styles.tabButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Order List */}
      <FlatList
        data={activeTab === 'processing' ? processingOrders : completedOrders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        style={styles.orderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButtonActive: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
  },
  tabButtonInactive: {
    flex: 1,
    padding: 16,
    backgroundColor: '#55585c',
    alignItems: 'center',
  },
  tabButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orderList: {
    flex: 1,
  },
  orderCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  orderDate: {
    fontSize: 14,
    color: '#999',
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  orderDetails: {
    flex: 1,
  },
  orderText: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFC107',
    borderRadius: 5,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewDetailButton: {
    marginTop: 8,
  },
  viewDetailText: {
    color: '#3F51B5',
    fontWeight: 'bold',
  },
});

export default OrderScreen;
