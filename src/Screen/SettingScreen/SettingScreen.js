import React from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../constant/Colors';
import { useTheme } from '../../Context/ThemeContext' // Import the hook

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Get dark mode state and toggle function
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [dataSharingEnabled, setDataSharingEnabled] = React.useState(false);

  const toggleSwitch = (setter) => () => setter(prev => !prev);

  // Conditional styles based on dark mode
  const containerStyle = isDarkMode ? styles.containerDark : styles.containerLight;
  const textColor = isDarkMode ? '#fff' : '#333';
  const sectionBackgroundColor = isDarkMode ? '#333' : '#fff';

  return (
    <ScrollView style={containerStyle}>
      <Text style={[styles.title, { color: textColor }]}>Settings</Text>

      <View style={[styles.section, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: textColor }]}>Manage Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: textColor }]}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Notifications</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: textColor }]}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleSwitch(setNotificationsEnabled)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Appearance</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: textColor }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme} // Toggle theme using context
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: sectionBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Privacy</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: textColor }]}>Data Sharing</Text>
          <Switch
            value={dataSharingEnabled}
            onValueChange={toggleSwitch(setDataSharingEnabled)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={dataSharingEnabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 20,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: Colors.Button_color,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
