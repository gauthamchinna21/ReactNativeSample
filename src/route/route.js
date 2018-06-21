import { createStackNavigator } from 'react-navigation';
import login from '../components/Login/Login';
import Signup from '../components/SignUp/SignUpForm';
import Home from '../components/Home/HomeForm';

export default createStackNavigator({
    login: {screen: login},
    Signup:{screen: Signup},
    Home:{screen:Home}
});