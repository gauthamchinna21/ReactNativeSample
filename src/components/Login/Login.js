//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';


// create a component
class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo.png')} />

                </View>
                <View style={styles.loginContainer}>
                    <LoginForm />
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
    title: {
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;
