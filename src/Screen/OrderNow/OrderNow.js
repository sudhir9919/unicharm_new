import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { distributorsData, locationsData, subLocationsData, materialData } from '../../Data/Data';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constant/Colors';
import CustomModal from '../CustomModal/CustomModal';
import CustomButton from '../../reusable_component/Button';
import { useTheme } from '../../Context/ThemeContext';
import ThanksPopup from '../../Screen/ThanksPopup/ThanksPopup'; // Import ThanksPopup
const OrderNow = () => {
  const { isDarkMode } = useTheme();
  const Forgot_bg = isDarkMode ? '#000' : '#fff';
  const Card_bg = isDarkMode ? '#333' : '#fff';
  const Text_bg = isDarkMode ? '#fff': '#000'
  
  const [modalVisible, setModalVisible] = useState(false);
  const [thanksVisible, setThanksVisible] = useState(false); // State for ThanksPopup visibility
  const [selectedDistributor, setSelectedDistributor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [quantities, setQuantities] = useState({});
  const [distributorSearchQuery, setDistributorSearchQuery] = useState('');
  const [materialSearchQuery, setMaterialSearchQuery] = useState('');
  const [filteredDistributors, setFilteredDistributors] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  
  const navigation = useNavigation();
  const scrollViewRef = useRef();

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

  const handleDistributorSearch = (query) => {
    setDistributorSearchQuery(query);
    const filtered = distributorsData.filter(distributor => 
      distributor.name.toLowerCase().startsWith(query.toLowerCase()) || 
      distributor.distributorCode.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredDistributors(filtered);
  };

  const handleDistributorSelect = (distributor) => {
    setSelectedDistributor(distributor.id);
    setDistributorSearchQuery(distributor.name);
    setFilteredDistributors([]);
  };

  const updateMaterials = (storage) => {
    if (selectedDistributor && storage) {
      const materials = materialData[selectedDistributor][storage] || [];
      setFilteredMaterials(materials);
    } else {
      setFilteredMaterials([]);
    }
  };

  const handleStorageChange = (itemValue) => {
    setSelectedStorage(itemValue);
    updateMaterials(itemValue);
  };

  const handleSubmitOrder = () => {
    const orderDetails = {
      distributor: selectedDistributor,
      materials: Object.entries(quantities).map(([material, quantity]) => ({
        name: material,
        quantity,
      })),
    };
    // Show ThanksPopup instead of navigating directly
    setThanksVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container,{backgroundColor:Forgot_bg}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        ref={scrollViewRef}
      >
        <View style={styles.header}>
          <Text style={[styles.headerTitle,{color:Text_bg}]}>Add Punch Order</Text>
          <TouchableOpacity style={styles.copyButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.copyButtonText}>Copy Order</Text>
          </TouchableOpacity>
          <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
  
        <View style={styles.form}>
          <TextInput
            style={[styles.input,{color:Text_bg}]}
            placeholder={'Customer/Distributor Code'}
            placeholderTextColor={Text_bg}
            value={distributorSearchQuery}
            onChangeText={handleDistributorSearch}
          />
          {distributorSearchQuery.length > 0 && filteredDistributors.length > 0 && (
            <ScrollView style={styles.suggestionList}>
              {filteredDistributors.map(distributor => (
                <TouchableOpacity
                  key={distributor.id}
                  onPress={() => handleDistributorSelect(distributor)}
                  style={styles.suggestionItem}
                >
                  <Text style={{ color: Text_bg }}>{distributor.name} ({distributor.distributorCode})</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <Text style={[styles.label, { color: Text_bg }]}>Select Plant:</Text>
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
            <Picker.Item label="Select a Plant" value="" />
            {selectedDistributor
              ? locationsData[selectedDistributor].map((location, index) => (
                  <Picker.Item key={index} label={location} value={location} />
                ))
              : null}
          </Picker>
        </View>

        <Text style={[styles.label, { color: Text_bg }]}>Select Storage Location:</Text>
        <View style={styles.gradient}>
          <Picker
            selectedValue={selectedStorage}
            onValueChange={handleStorageChange}
            style={styles.picker}
            enabled={selectedLocation !== ''}
          >
            <Picker.Item label="Select a Storage Location" value="" />
            {selectedLocation && selectedDistributor ? (
              subLocationsData[selectedDistributor][selectedLocation]?.map((subLocation, index) => (
                <Picker.Item key={index} label={subLocation} value={subLocation} />
              ))
            ) : null}
          </Picker>
        </View>

        <Text style={[styles.label, { color: Text_bg }]}>Materials:</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search materials..."
          placeholderTextColor={Text_bg}
          value={materialSearchQuery}
          onChangeText={(query) => {
            setMaterialSearchQuery(query);
            if (query) {
              const filtered = filteredMaterials.filter(material =>
                material.toLowerCase().startsWith(query.toLowerCase())
              );
              setFilteredMaterials(filtered);
            } else {
              updateMaterials(selectedStorage);
            }
          }}
        />
        <ScrollView
          style={styles.materialList}
          nestedScrollEnabled={true}
        >
          {filteredMaterials.map((material, index) => (
            <View key={index} style={styles.materialRow}>
              <Text style={[styles.materialText, { color: Text_bg }]}>{material}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleSubtractQuantity(material)} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.customInput}
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
          ))}
        </ScrollView>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <CustomButton
            title="Submit Order"
            onPress={handleSubmitOrder}
          />
        </View>
      </ScrollView>

      <ThanksPopup visible={thanksVisible} onClose={() => setThanksVisible(false)} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 120,
    backgroundColor: Colors.Button_color,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  copyButtonText: {
    marginRight: 5,
    color: Colors.white,
  },
  form: {
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  suggestionList: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    maxHeight: 150,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    backgroundColor: Colors.Button_color,
  },
  gradient: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  materialList: {
    maxHeight: 200,
  },
  materialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  materialText: {
    fontSize: 16,
    flex: 1,
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: Colors.Button_color,
    borderRadius: 5,
    padding: 10,
  },
  quantityButtonText: {
    color: 'white',
  },
  customInput: {
    width: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    color: Colors.Text_color,
  },
});

export default OrderNow;
