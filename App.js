/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    onLoginBtnPressed = () => {
      Alert.alert("Login clicked");
  
  
    };
    onSignUpBtnPressed = () => {
      Alert.alert("Signup clicked");
   //   this.props.navigation.navigate('SignUpPage')
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={"Enter your username"} />
      <TextInput style={styles.textInput}
        onChangeText={(text) => console.log(text)}
        placeholder={"Enter your password"}
        secureTextEntry={true}
      />
      <Button style={styles.buttonStyle} title="Login" onPress={onLoginBtnPressed} />
      <Text style={styles.instructions}>
        Or
          </Text>
      <Button style={styles.buttonStyle} title="SignUp" onPress={onSignUpBtnPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    textAlign: "center",
    color: '#333333',
    marginBottom: 5,
    backgroundColor: '#1e2dff',
    fontSize: 30,

  },

  textInput: {
    textAlign: "left",
    // justifyContent: "center",
    // alignItems: "stretch",
    //borderRightWidth: 10,
    //borderLeftWidth: 10,
    height: 40,
    //borderColor: "#FFFFFF",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 20,
    borderColor: '#d50000',
    borderWidth: 1,
    // Set border Radius.
    borderRadius: 6,
  }
});

// export default createStackNavigator({
//   SignUpPage: {
//     screen: SignUpPage,
//     navigationOptions: {
//       title: 'Create Account',
//     }
//   }
// });