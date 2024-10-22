import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MyOrder from './MyOrder'; // Import the MyOrder component
import Colors from '../../constant/Colors';
const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);

  // Sample order data
  const sampleOrders = [
    {
      id: 1,
      image:'https://www.bigbasket.com/media/uploads/p/l/40023127_8-mamypoko-diaper-pants-extra-absorb-xxl.jpg',
      quantity: 2,
      name:'mammy-poko-pant',
      price: 29.99,
      gst: 2.40, // Example GST amount
    },
    {
      id: 2,
      name:'Wipes',
      image: 'https://5.imimg.com/data5/LG/RF/XN/SELLER-3404037/mamypoko-cleaning-wipes-500x500.jpg',
      quantity: 1,
      price: 19.99,
      gst: 1.60,
    },
    {
      id: 3,
      name:'Life Free',
      image: 'https://m.media-amazon.com/images/I/81ECqhSrHlL._AC_UF1000,1000_QL80_.jpg',
      quantity: 5,
      price: 49.99,
      gst: 4.00,
    },
  ];

  // Simulating data fetching
  useEffect(() => {
    // Replace with API call in the future
    setOrders(sampleOrders);
  }, []);

  const renderItem = ({ item }) => <MyOrder order={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    padding: 15,
    
    borderRadius: 10,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.Text_color,
  },
});

export default OrdersScreen;
