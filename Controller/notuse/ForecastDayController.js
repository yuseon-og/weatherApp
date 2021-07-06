import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import LoadingBetween from "../../Screen/LoadingBetween";
import ForecastDay from "../../Screen/ForecastDay";

const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";

export default function Daily() {
  // const [isLoading, setIsLoading] = useState(true);
  const [dailyData, setDailyData] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const {
      data: { daily },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(daily);
    // console.log(daily[0]);
    // console.log(daily[0].dt);
    // console.log(list[0].components.co);

    setDailyData(daily);
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
  }, []);

  return dailyData === null ? (
    <LoadingBetween />
  ) : (
    <ForecastDay day={dailyData} />
  );
}

//   return Data === null ? (
//     <Loading />
//   ) : (
//     <Home today={weatherData} yesterday={yesterdayData} />
