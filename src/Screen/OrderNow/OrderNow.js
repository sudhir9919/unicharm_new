import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { distributorsData, locationsData, subLocationsData, materialData } from '../../Data/Data';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constant/Colors';
import InputBox from '../../reusable_component/InputBox';
import Icon from 'react-native-vector-icons/Feather'
import CustomModal from '../CustomModal/CustomModal';
import CustomButton from '../../reusable_component/Button';
const OrderNow = ({ width }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedDistributor, setSelectedDistributor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistributor2, setSelectedDistributor2] = useState('');
  const navigation = useNavigation();

  const scrollViewRef = useRef(); // Ref for the ScrollView
  const materialScrollViewRef = useRef(); // Ref for the Material ScrollView

  const handleAddQuantity = (material) => {
    setQuantities((prev) => ({
      ...prev,
      [material]: (prev[material] || 0) + 1,
    }));
  };

  const handleSubtractQuantity = (material) => {
    setQuantities((prev) => ({
      ...prev,
      [material]: Math.max((prev[material] || 0) - 1, 0),
    }));
  };

  const handleFocus = () => {
    // Scroll to top when search input is focused
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        ref={scrollViewRef}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Punch Order</Text>
          <TouchableOpacity style={styles.copyButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.copyButtonText}>Copy Order</Text>
            <Icon name="shopping-bag" size={24}/>
          </TouchableOpacity>
          <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>

        <View style={styles.form}>
          <InputBox label={'Customer/Distributor Code'} />
        </View>

        {/* Distributor Section with Two Dropdowns */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.label}>Select Distributors:</Text>
          <Text style={styles.label}>Active/Inactive:</Text>
        </View>

        <View style={styles.rowContainer}>
          {/* First Distributor Dropdown */}
          <View style={styles.gradientDistributor1}>
            <Picker
              selectedValue={selectedDistributor}
              onValueChange={(itemValue) => {
                setSelectedDistributor(itemValue);
                setSelectedLocation('');
                setSelectedStorage('');
              }}
              style={styles.picker}
            >
              <Picker.Item label="Select a Distributor" value="" />
              {distributorsData.filter(distributor => {
                if (selectedDistributor2 === "inactive") {
                  return distributor.name.includes('-01'); // Show only inactive distributors
                }
                return !distributor.name.includes('-01'); // Show only active distributors
              }).map((distributor) => (
                <Picker.Item key={distributor.id} label={distributor.name} value={distributor.id} />
              ))}
            </Picker>
          </View>

          {/* Second Distributor Dropdown */}
          <View style={styles.gradientDistributor2}>
            <Picker
              selectedValue={selectedDistributor2}
              onValueChange={(itemValue) => {
                setSelectedDistributor2(itemValue);
                setSelectedDistributor('');
              }}
              style={styles.picker}
            >
              <Picker.Item label="Status" value="" />
              <Picker.Item label="Active" value="active" />
              <Picker.Item label="Inactive" value="inactive" />
            </Picker>
          </View>
        </View>

        {/* Location Section */}
        <Text style={styles.label}>Select Location:</Text>
        <View style={styles.gradient}>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue) => {
              setSelectedLocation(itemValue);
              setSelectedStorage('');
            }}
            style={styles.picker}
            enabled={selectedDistributor !== ''}
          >
            <Picker.Item label="Select a Location" value="" />
            {selectedDistributor
              ? locationsData[selectedDistributor].map((location, index) => (
                  <Picker.Item key={index} label={location} value={location} />
                ))
              : null}
          </Picker>
        </View>

        {/* Storage Section */}
        <Text style={styles.label}>Select Storage Location:</Text>
        <View style={styles.gradient}>
          <Picker
            selectedValue={selectedStorage}
            onValueChange={(itemValue) => setSelectedStorage(itemValue)}
            style={styles.picker}
            enabled={selectedLocation !== ''}
          >
            <Picker.Item label="Select a Storage Location" value="" />
            {selectedLocation && selectedDistributor ? (
              subLocationsData[selectedDistributor] &&
              subLocationsData[selectedDistributor][selectedLocation]
                ? subLocationsData[selectedDistributor][selectedLocation].map((subLocation, index) => (
                    <Picker.Item key={index} label={subLocation} value={subLocation} />
                  ))
                : null
            ) : null}
          </Picker>
        </View>

        {/* Materials Section */}
        <Text style={styles.label}>Materials:</Text>
        <View style={styles.materialContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search materials..."
            placeholderTextColor='#000'
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={handleFocus} // Call the handleFocus function
          />
          <ScrollView
            style={styles.materialList}
            ref={materialScrollViewRef} // Ref for materials scroll
            nestedScrollEnabled={true} // Enable nested scrolling
          >
            {selectedStorage && selectedDistributor ? (
              materialData[selectedDistributor] && materialData[selectedDistributor][selectedStorage]
                ? materialData[selectedDistributor][selectedStorage]
                    .filter(material => material.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((material, index) => (
                      <View key={index} style={styles.materialRow}>
                        <Text style={styles.materialText}>{material}</Text>
                        <View style={styles.quantityContainer}>
                          <TouchableOpacity onPress={() => handleSubtractQuantity(material)} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>-</Text>
                          </TouchableOpacity>
                          <TextInput
                            style={styles.customQuantityInput}
                            value={`${quantities[material] || 0}`}
                            keyboardType="numeric"
                            onChangeText={(text) => {
                              const quantity = parseInt(text) || 0;
                              setQuantities((prev) => ({
                                ...prev,
                                [material]: quantity,
                              }));
                            }}
                          />
                          <TouchableOpacity onPress={() => handleAddQuantity(material)} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))
                : <Text style={styles.noMaterialsText}>No materials available for this storage location.</Text>
            ) : (
              <Text style={styles.noMaterialsText}>Select a storage location to see materials.</Text>
            )}
          </ScrollView>
        </View>
        <CustomButton style={styles.button} title='Place Order' />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_color,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Button_color,
    padding: 7,
    borderRadius: 7,
    gap:7
  },
  copyButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
  },
  gradient: {
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: Colors.Button_color,
  },
  gradientDistributor1: {
    borderRadius: 8,
    marginBottom: 15,
    elevation: 5,
    width: '60%',
    backgroundColor: Colors.Button_color,
  },
  gradientDistributor2: {
    borderRadius: 8,
    marginBottom: 15,
    elevation: 5,
    width: '35%',
    backgroundColor: Colors.Button_color,
  },
  materialContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    maxHeight: 250,
  },
  searchInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  materialList: {
    flexGrow: 1,
  },
  materialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  materialText: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: Colors.Button_color,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    width: 30,
    height: 20,
  },
  customQuantityInput: {
    height: 36,
    width: 65,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  noMaterialsText: {
    textAlign: 'center',
    color: '#888',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  form: {
    marginBottom: 30,
  },
  button:{
    marginLeft:'8%',
    marginStart:'10%'
  }
});

export default OrderNow