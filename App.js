import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import HomeController from "./Controller/HomeController";
// import WeatherController from "./Controller/WeatherController";
import DustController from "./Controller/DustController";
import ForecastController from "./Controller/ForecastController";
import DustController1 from "./Screen/Dust";
import ForecastController1 from "./Screen/Forecast";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "cloud" : "cloud-outline";
            } else if (route.name === "Dust") {
              iconName = focused ? "apps" : "apps-outline";
            } else if (route.name === "Forecast") {
              iconName = focused ? "analytics" : "analytics-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#0083B0",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeController} />
        <Tab.Screen name="Dust" component={DustController} />
        <Tab.Screen name="Forecast" component={ForecastController1} />
      </Tab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeController} />
        <Stack.Screen name="Weather" component={WeatherController} />
        <Stack.Screen name="Dust" component={DustController} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
