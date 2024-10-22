import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const InventoryScreen = () => {
  // Sample inventory data
  const [inventoryItems, setInventoryItems] = useState([
    { id: '1', name: 'Item 1', quantity: 10 },
    { id: '2', name: 'Item 2', quantity: 5 },
    { id: '3', name: 'Item 3', quantity: 20 },
    { id: '4', name: 'Item 4', quantity: 8 },
  ]);

  // Function to handle item press
  const handleItemPress = (item) => {
    Alert.alert(`Selected: ${item.name}`, `Quantity: ${item.quantity}`);
  };

  // Render each inventory item
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item)}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <FlatList
        data={inventoryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
});

export default InventoryScreen;
