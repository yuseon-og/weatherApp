import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState, useEffect, useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Alert,
  ScrollView,
  RefreshControl,
} from "react-native";
import HomeController from "./Controller/HomeController";
import ForecastHourController from "./Controller/ForecastHourController";
import * as Location from "expo-location";
import axios from "axios";
import UserContextProvider from "./context";
import weatherOption, { findImage } from "./Controller/WeatherDesign";

import HomeController1 from "./Screen/Home";
import ForecastHourController1 from "./Screen/View/WeatherView";
import Loading from "./Screen/Loading";

const Tab = createMaterialTopTabNavigator();

const ADDRESS = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";
const API = "onecall";

let weatherD = null;
let yesterdayD = null;
let dayBeforeD = null;

// 여기서 다 먹고 여기서 컨텍스트에 뿌려주기
// 여기서 리프레쉬

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function App() {
  // refreshControll 위한 state
  const [refreshing, setRefreshing] = React.useState(false);

  // refreshControll 위한 내용
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getLocation();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [weatherData, setData] = useState(null);
  const [yesterdayData, setYesterday] = useState(null);
  const [dayBeforeData, setdayBeforeData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getWeather = async (lat, long) => {
    const { data } = await axios.get(
      `${ADDRESS}${API}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

    // console.log("여기?");
    // console.log(data);
    setData(data);

    let time = new Date(data.current.dt * 1000);
    let now = time.getHours();

    if (now < 9) {
      const yesterday1 = data.current.dt - 86400;
      const yesterday2 = data.current.dt;
      const yesterdayData1 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${lat}&lon=${long}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
      );
      const yesterdayData2 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${lat}&lon=${long}&dt=${yesterday2}&appid=${API_KEY}&units=metric`
      );

      setYesterday(yesterdayData1.data);
      setdayBeforeData(yesterdayData2.data.hourly);
    } else {
      const yesterday1 = data.current.dt - 86400;
      const yesterdayData1 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${lat}&lon=${long}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
      );
      // console.log(yesterdayData1);

      setYesterday(yesterdayData1.data);
      setdayBeforeData([]);
    }
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

  weatherD = weatherData;
  yesterdayD = yesterdayData;
  dayBeforeD = dayBeforeData;

  let image = null;
  if (weatherD === null) {
    image = require("./assets/1_sun.jpg");
  } else {
    const imageSet = findImage(weatherD.current);
    image = require(`./assets/${imageSet.a}_${imageSet.b}.jpg`);
  }

  return weatherD === null ? (
    <Loading />
  ) : (
    <UserContextProvider>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <NavigationContainer>
          <ImageBackground source={image} style={styles.image}>
            <Tab.Navigator
              sceneContainerStyle={{ backgroundColor: "transparent" }}
              // tabBarOptions={{
              //   showLabel: "false",
              // }}
              // tabBarPosition="bottom"
            >
              <Tab.Screen name="Home" component={HomeController1} />
              <Tab.Screen
                name="ForecastHour"
                component={ForecastHourController1}
              />
            </Tab.Navigator>
          </ImageBackground>
        </NavigationContainer>
      </ScrollView>
    </UserContextProvider>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
});

export { weatherD, yesterdayD, dayBeforeD };
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
