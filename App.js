import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Alert } from "react-native";
import HomeController from "./Controller/HomeController";
import ForecastHourController from "./Controller/ForecastHourController";
import * as Location from "expo-location";
import axios from "axios";
import UserContextProvider from "./context";

const Tab = createMaterialTopTabNavigator();
const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";
const image = require("./assets/1_sun.jpg");
// const image = require(`./assets/${backgroundImage.a}_${backgroundImage.b}.jpg`);
// console.log(backgroundImage);
// console.log(dayOrNight);
// console.log(weatherNow);
// console.log(image2);

let a = {};
let b = {};

export default function App() {
  const [weatherData, setData] = useState(null);
  const [yesterdayData, setYesterday] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getWeather = async (lat, long) => {
    const date = { today: null, yesterday: null };
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

    console.log("여기?");
    setData(data);
    date.today = Math.round(new Date().getTime() / 1000.0);
    date.yesterday = date.today - 86400;
    const {
      data: { current },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${date.yesterday}&appid=${API_KEY}&units=metric`
    );
    // console.log(current);
    setYesterday(current);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      const lat = location.coords.latitude;
      const long = location.coords.longitude;

      setLatitude(lat);
      setLongitude(long);

      getWeather(lat, long);
      // setIsLoading(true);
    } catch (error) {
      Alert.alert("Donno where you are, Can't find you....");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  a = weatherData;
  b = yesterdayData;
  // console.log(weatherData);
  // console.log(yesterdayData);
  // console.log(latitude);
  // console.log(longitude);

  return (
    <UserContextProvider>
      <NavigationContainer>
        <ImageBackground source={image} style={styles.image}>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "transparent" }}
            // tabBarOptions={{
            //   showLabel: "false",
            // }}
            // tabBarPosition="bottom"
          >
            <Tab.Screen name="Home" component={HomeController} />
            <Tab.Screen
              name="ForecastHour"
              component={ForecastHourController}
            />
          </Tab.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </UserContextProvider>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export { a, b };
{
  /* <NavigationContainer>
  <ImageBackground source={image} style={styles.image}>
    <Tab.Navigator sceneContainerStyle={{ backgroundColor: "transparent" }}>
      <Tab.Screen name="Home" component={HomeController} />
      <Tab.Screen name="ForecastHour" component={ForecastHourController} />
    </Tab.Navigator>
  </ImageBackground>
</NavigationContainer>; */
}

// 네비게이터에 디자인 줄때

// <Tab.Navigator
// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === "Home") {
//       iconName = focused ? "cloud" : "cloud-outline";
//     }

//     else if (route.name === "ForecastHour") {
//       iconName = focused ? "analytics" : "analytics-outline";
//     }

//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
// })}
// tabBarOptions={{
//   activeTintColor: "#0083B0",
//   inactiveTintColor: "gray",
//   showLabel: false,
// }}
// >
