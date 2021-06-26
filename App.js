import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./Screen/Loading";
import Weather from "./Screen/Weather";

const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setData] = useState(null);
  const [yesterdayData, setYesterday] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const date = { today: null, yesterday: null };
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    setData(data);
    date.today = Math.round(new Date().getTime() / 1000.0);
    date.yesterday = date.today - 86400;
    const {
      data: { current },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${date.yesterday}&appid=${API_KEY}&units=metric`
    );
    // console.log(current);
    setYesterday(current);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      // console.log(latitude);
      // console.log(longitude)

      getWeather(latitude, longitude);
      // setIsLoading(true);
    } catch (error) {
      Alert.alert("Donno where you are, Can't find you....");
    }
  };

  useEffect(() => {
    getLocation();
    // setInterval(() => {
    //   getLocation();
    //   console.log("refreshed!!");
    // }, 1000);
  }, []);

  // return isLoading ? <Loading /> : <Weather temp={weatherData?Math.round(weatherData.main.temp):setIsLoading(true)}/>
  // return yesterdayData === null ? <Loading /> : <Weather tempToday={Math.round(weatherData.main.temp)} tempYester={Math.round(yesterdayData.temp)} feelLikeToday={Math.round(weatherData.main.feels_like)} feelLikeYester={Math.round(yesterdayData.feels_like)} condition={weatherData.weather[0].main} humidity={weatherData.main.humidity}/>
  return (
    <NavigationContainer>
      yesterdayData === null ? (
      <Loading />
      ) : (
      <Weather today={weatherData} yesterday={yesterdayData} />
      );
    </NavigationContainer>
  );
  // return <View>

  //    <Text>{console.log(isLoading)}</Text>
  //   <Text>{console.log(weatherData)}</Text>
  //   {/* <Text>{weatherData.main.temp }</Text> */}
  //   <Text>{weatherData ?weatherData.main.temp : "nope"}</Text>
  //  </View>

  // isLoading ? <Loading /> : null

  // < Weather />

  // <View>
  //   <Text>{latitude},{longitude}</Text>
  // </View>
}
