//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//import SignUp from '../SignUp/SignUpForm';


// create a component
class LoginForm extends Component {
    onLoginButtonPress = () => {
        //Alert.alert('Login button has been pressed!');
       
        this.props.navigation.navigate('Home');
    };

    onSignUpButtonPress = () => {
        // Alert.alert('Signup button has been pressed!');
         this.props.navigation.navigate('Signup');
     };
     
     onForgotButtonPress = () => {
         Alert.alert('Forgot Password button has been pressed!');
     };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginButtonPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupSectionContainer}>
                    <TouchableOpacity onPress={this.onSignUpButtonPress}>
                        <Text style={styles.text}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onForgotButtonPress}>
                        <Text style={styles.text}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    },
    signupSectionContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        paddingVertical: 15,
        // width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    //   signupSectionContainer: {
    //     flex: 1,
    //     top: 65,
    //     width: DEVICE_WIDTH,
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //   },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },

});

//make this component available to the app
export default LoginForm;
