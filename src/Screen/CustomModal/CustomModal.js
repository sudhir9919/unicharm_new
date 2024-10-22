import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Native Picker for dropdown
import Colors from '../../constant/Colors';

const CustomModal = ({ visible, onClose }) => {
  const [selectedOrder, setSelectedOrder] = React.useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Previous Orders</Text>

              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={selectedOrder}
                  onValueChange={(itemValue) => setSelectedOrder(itemValue)}
                  style={styles.picker}
                  dropdownIconColor={Colors.Text_color} // Change the color here
                >
                  <Picker.Item label="Select Previous Order" value="" />
                  <Picker.Item label="Order #1" value="order1" />
                  <Picker.Item label="Order #2" value="order2" />
                  {/* Add more orders as needed */}
                </Picker>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onClose(); // Close modal
                  console.log(`Order copied: ${selectedOrder}`);
                }}
              >
                <Text style={styles.buttonText}>COPY ORDER</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.Text_color,
  },
  pickerWrapper: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: Colors.Text_color,
  },
  button: {
    backgroundColor: '#4B4BB9',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomModal;
