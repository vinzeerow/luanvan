
// react-native link react-native-vector-icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color='red' />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color='red' />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color='red' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
