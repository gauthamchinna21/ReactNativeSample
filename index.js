import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Route from "./src/route/route"

// import Login from './src/components/Login/Login';
// import SignUpForm from './src/components/SignUp/SignUpForm';
// import Home from './src/components/Home/HomeForm';

// export default class DemoLogin extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }

AppRegistry.registerComponent('UserModule', () => Route);
