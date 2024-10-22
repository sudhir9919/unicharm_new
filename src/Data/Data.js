// src/data/data.js

export const distributorsData = [
  { id: '1', name: 'John',Credit_Limit: '100000'},
  { id: '2', name: 'David-01',Credit_Limit: '70000' }, // Inactive
  { id: '3', name: 'Cameron',Credit_Limit: '60000' },
  { id: '4', name: 'Stark-01',Credit_Limit: '50000' }, // Inactive
  { id: '5', name: 'Miller',Credit_Limit: '30000' },
  { id: '6', name: 'Sophia',Credit_Limit: '55000'},
  { id: '7', name: 'Oliver-01',Credit_Limit: '45000' }, // Inactive
  { id: '8', name: 'Charlotte',Credit_Limit: '35000'},
  { id: '9', name: 'Lucas',Credit_Limit: '25000'},
  { id: '10', name: 'Isabella-01',Credit_Limit: '40000' }, // Inactive
];
// Function to separate active and inactive distributors
export const getDistributorsByStatus = () => {
  const activeDistributors = distributorsData.filter(distributor => !distributor.name.includes('-01'));
  const inactiveDistributors = distributorsData.filter(distributor => distributor.name.includes('-01'));

  return { activeDistributors, inactiveDistributors };
};

// Example usage
const { activeDistributors, inactiveDistributors } = getDistributorsByStatus();

  export const locationsData = {
    '1': ['Delhi', 'Noida', 'Ghaziabad'],
    '2': ['Varanasi', 'Lucknow'],
    '3': ['Kanpur', 'Kanauuj', 'Itawa'],
    '4': ['Chandigarh', 'Mohali'],
    '5': ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer'],
    '6': ['Patna'],
    '7': ['Bangalore', 'tamilnadu'],
    '8': ['Hyderabad', 'Sikandarabad', 'Gannaur'],
    '9': ['Mumbai', 'Pune'],
    '10': ['Ahmedabad', 'Surat'],
  };
  
  export const subLocationsData = {
    '1': {
      'Delhi': ['Cannaught_Place', 'Dwarka'],
      'Noida': ['Sector62', 'Golf_Course'],
      'Ghaziabad': ['Govindpuram', 'Sahibabad', 'LalKuva'],
    },
    '2': {
      'Varanasi': ['Durgakund', 'Lanka'],
      'Lucknow': ['Charbagh', 'Marine_Drive'],
    },
    '3': {
      'Kanpur': ['Kalyanpur', 'Kidwai_Nagar'],
      'Kanauuj': ['SwaroopNagar', 'Panki'],
      'Itawa': ['Shiva_Colony', 'Punjabi_Colony', 'Friends_Colony'],
    },
    '4': {
      'Chandigarh': ['IT_PARK', 'Rock Garden'],
      'Mohali': ['Sector 74', 'Sector 75'],
    },
    '5': {
      'Jaipur': ['Sindi_Camp', 'Churu'],
      'Jodhpur': ['Jaswant', 'Thada', 'Ghanta_Ghar'],
      'Udaipur': ['Moti Magri', 'Ahar', 'Haldighati'],
      'Ajmer': ['Ajmeri Gate', 'Bassi'],
    },
    '6': {
      'Patna': ['Chandpur', 'Gopal_Bagh'],
    },
    '7': {
      'Bangalore': ['Koramangala', 'Jayanagar'],
      'tamilnadu': ['Chennai', 'Madurai'],
    },
    '8': {
      'Hyderabad': ['Secunderabad', 'Rajendra Nagar'],
      'Sikandarabad': ['Sikandarabad', 'Ghatkesar'],
    },
    '9': {
      'Mumbai': ['Andheri', 'Bandra'],
      'Pune': ['Pune', 'Nashik'],
    },
    '10': {
      'Ahmedabad': ['Gandhinagar', 'Vadodara'],
      'Surat': ['Surat', 'Baroda'],
    },
  };
  

  export const materialData = {
    '1': {
      'Cannaught_Place': ['A15', 'B16', 'C17', 'G52','D18','H20','E19','A82', 'B83','F44','H66','G111','C84','D85','E86','L32', 'Vn_36','C39','F5', 'D52','S61','B90','E11','F14'],
      'Dwarka': ['L46', 'c98'],
      'Sector62': ['L46', 'c98'],
      'Golf_Course': ['A55', 'B67', 'C78'],
      'Govindpuram': ['E45', 'k67', 'Z40'],
      'Sahibabad': ['M49', 'N67', 'P78'],
      'LalKuva': ['A32', 'B36', 'C52'],
    },
    '2': {
      'Durgakund': ['L32', 'Vn_36', 'D52'],
      'Lanka': ['L46', 'c98'],
      'Charbagh': ['F44', 'g98', 'S64'],
      'Marine_Drive': ['L46', 'c98', 'I32'],
    },
    '3': {
      'Kalyanpur': ['A10', 'F28', 'G54'],
      'Kidwai_Nagar': ['A40', 'O28', 'Z54'],
      'SwaroopNagar': ['H10', 'T22', 'X54'],
      'Panki': ['W10', 'V28', 'M54'],
    }
  };
  