import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../../Context/ThemeContext';

const CompletedScreen = ({ route }) => {
  const { orderDetails } = route.params;
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? 'black' : 'white';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Order Summary</Text>
      <Text style={[styles.subtitle, { color: textColor }]}>
        Distributor: {orderDetails.distributor}
      </Text>
      <FlatList
        data={orderDetails.materials}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.materialRow}>
            <Text style={[styles.materialText, { color: textColor }]}>{item.name}</Text>
            <Text style={[styles.materialQuantity, { color: textColor }]}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  materialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  materialText: {
    fontSize: 16,
  },
  materialQuantity: {
    fontSize: 16,
  },
});

export default CompletedScreen;
