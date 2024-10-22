import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constant/Colors'; // Ensure you have defined your color constants

const notifications = [
    { id: '1', title: 'Order Shipped', message: 'Your order #12345 has been shipped.', date: '2023-10-21' },
    { id: '2', title: 'Order Delivered', message: 'Your order #12344 has been delivered.', date: '2023-10-20' },
    { id: '3', title: 'Order Cancelled', message: 'Your order #12343 has been cancelled.', date: '2023-10-19' },
];

const NotificationScreen = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Order Notifications</Text>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC', // Light gray background for better contrast
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3C459A', // Dark blue color for the header
        marginBottom: 20,
    },
    notificationCard: {
        backgroundColor: '#FFFFFF', // White background for cards
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333', // Darker text color for visibility
    },
    notificationMessage: {
        fontSize: 14,
        color: '#555', // Slightly lighter for the message
        marginVertical: 5,
    },
    notificationDate: {
        fontSize: 12,
        color: '#888', // Gray color for the date
        textAlign: 'right',
    },
});
