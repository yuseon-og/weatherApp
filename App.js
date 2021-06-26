import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import HomeController from "./Controller/HomeController";
// import WeatherController from "./Controller/WeatherController";
import DustController from "./Controller/DustController";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeController} />
        {/* <Stack.Screen name="Weather" component={WeatherController} /> */}
        <Stack.Screen name="Dust" component={DustController} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
