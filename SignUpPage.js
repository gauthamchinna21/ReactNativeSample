import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TextInput
} from 'react-native';


export default class App extends Component<> {
    constructor(props) {
        super(props);
        this.state = {
            title: "UserName",

        };
    };
};

render() {

    onSignUpBtnPressed = () =>  {
        Alert.alert("Signup clicked");

    };
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                onChangeText={(text) => console.log(text)}
                placeholder={"Enter your email"}/>
            <TextInput style={styles.textInput}
                       onChangeText={(text) => console.log(text)}
                       placeholder={"Reenter your email " }
            />
            <TextInput style={styles.textInput}
                       onChangeText={(text) => console.log(text)}
                       placeholder={"Enter your name " }

            />
            <TextInput style={styles.textInput}
                       onChangeText={(text) => console.log(text)}
                       placeholder={"Enter your password " }
                       secureTextEntry={true}
            />
            <TextInput style={styles.textInput}
                       onChangeText={(text) => console.log(text)}
                       placeholder={"Reenter your password " }
                       secureTextEntry={true}
            />
            <Button style={styles.buttonStyle} title="Signup" onPress={onLoginBtnPressed}/>
            <Text style={styles.instructions}>
                Or
            </Text>
            <Button style={styles.buttonStyle} title="Back" onPress={onSignUpBtnPressed}/>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container :{

        justifyContent: 'center',
        flex:1,
        margin: 10
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonStyle:{
        textAlign:"center",
        color:'#333333',
        marginBottom:5,
        backgroundColor:'#1e2dff',
        fontSize: 30,
    },

    textInput: {
        textAlign:"left",
        height: 40,
        //borderColor: "#FFFFFF",
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        fontSize: 20,
        borderColor: '#d50000',
        borderWidth:1,
        // Set border Radius.
        borderRadius: 6 ,
    },

});