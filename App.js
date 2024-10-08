import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingScreen from './components/SettingScreen';
import Test from './components/Test';
import Icon from 'react-native-vector-icons/Ionicons'; // Import your desired icon set
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Define icon name based on the route
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        }

        // Return the icon component
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple', // Active icon color
      tabBarInactiveTintColor: 'purple', 
      tabBarStyle: {
        backgroundColor: '#ffefff', // Change background color
        height: 60, // Change height of the tab bar
        paddingBottom: 10, // Add padding at the bottom
      },
    })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Notifications" component={Test} />
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide the header for LoginScreen
        />
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }} // Optional: hide the header for the TabNavigator
        />
      </Stack.Navigator>
    </NavigationContainer>

    </PaperProvider>

  );
};

export default App;
