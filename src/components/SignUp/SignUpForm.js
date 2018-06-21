//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';



// create a component
class SignUpForm extends Component {
    onLoginButtonPress = () => {
   
        this.props.navigation.goBack()
   };
   
   onSignUpButtonPress = () => {
       Alert.alert('Signup button has been pressed!');
   };
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo.png')} />

                </View>
                <View style={styles.loginContainer}>
                    <StatusBar barStyle="light-content" />
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder='Name'
                        placeholderTextColor='rgba(225,225,225,0.7)' />
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
                    <TextInput style={styles.input}
                        returnKeyType="go" ref={(input) => this.passwordInput = input}
                        placeholder='Repeat Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry />
                    {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onSignUpButtonPress}>
                        <Text style={styles.buttonText}>Creat Account</Text>
                    </TouchableOpacity>

                    <View style={styles.signupSectionContainer}>
                        <TouchableOpacity onPress={this.onLoginButtonPress}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    logoContainer: {
        marginTop: 50,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 450,
        height: 150
    },
    loginContainer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flexGrow: 1
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
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});

//make this component available to the app
export default SignUpForm;

