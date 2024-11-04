import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingScreen from "./components/SettingScreen";
import NotificationScreen from "./components/NotificationScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Import your desired icon set
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [notificationCount, setNotificationCount] = useState(16); // Example notification count
  const clearBadge = () => {
    setNotificationCount(0);
    console.log("Cleared count");
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "purple",
        tabBarStyle: {
          backgroundColor: "#ffefff",
          height: 60,
          paddingBottom: 10,
        },
        tabBarBadge:
          route.name === "Notifications"
            ? notificationCount > 0
              ? notificationCount
              : null
            : null, // Show badge only for Notifications tab
        tabBarBadgeStyle: {
          backgroundColor: "#B57EDD",
          color: "white",
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        initialParams={{ clearBadge }}
        options={{ headerShown: false }}
        name="Notifications"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="purple" barStyle="light-content" />
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
