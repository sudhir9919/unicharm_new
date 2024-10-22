import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constant/Colors';
const MyOrder = ({ order }) => {
  const { id, image, quantity, price, gst,name } = order;

  // Calculate total price including GST
  const totalPrice = price + gst;

  return (
    <>

    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.orderImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.orderId}>Order ID: {id}</Text>
        <Text style={styles.name}>Name: {name}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
        <Text style={styles.gst}>GST: ${gst.toFixed(2)}</Text>
        <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  orderImage: {
    width: 125,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    marginTop:20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:Colors.Text_color
  },
  quantity: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  gst: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderTitle:{
    color:Colors.Text_color,
    fontSize:26,
  },
  name:{
    color:Colors.Text_color,
  }
});

export default MyOrder;
