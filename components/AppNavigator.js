import Login from './LoginScreen';
import Home from './BottomNavigator';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      // navigationOptions: () => ({
      //   header: null,
      // }),
    },
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(AppNavigator);