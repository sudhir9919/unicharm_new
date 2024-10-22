import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../constant/Colors';
import InputBox from '../../reusable_component/InputBox';
import CustomButton from '../../reusable_component/Button';
import InputBox2 from '../../reusable_component/InputBox2';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation(); // Move this inside the component

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Images/unicharm-logo.png')}
                style={styles.banner}
                resizeMode="contain"
            />
            <View style={styles.formContainer}>
                <Text style={styles.loginText}>Login</Text>
                <InputBox style={styles.inputBoxStyle} label="User Id/Employee" placeholder="Enter Email" />
                <InputBox2 label="Password" placeholder="Enter Password" style={{ marginBottom: 10 }} />
                <View style={styles.forgotPasswordText}>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.Text_color }} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.Text_color }} onPress={() => {
                    navigation.navigate('ForgotPassword'); // Now this works correctly
                }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <CustomButton title="Login" onPress={() => {
                    navigation.navigate('AppTabs'); // Now this works correctly
                }} />
            </View>
            <Text style={styles.termsText}>By continuing, you agree to our Terms & Conditions and Privacy Policy</Text>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    banner: {
        width: '60%',
        height: 70,
        marginTop: 50,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.Text_color,
        marginBottom: 20,
        alignItems: 'center',
    },
    inputBoxStyle: {
        marginTop: 10,
        width: '100%',
        marginLeft:50
    },
    forgotPasswordText: {
        color: 'black',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 135,
        width: '100%',
    },
    termsText: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        paddingBottom: 20,
    }
});
