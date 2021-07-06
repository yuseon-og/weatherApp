import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import LoadingBetween from "../../Screen/LoadingBetween";
import Dust from "../../Screen/Dust";

const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";

export default function Air_pollution() {
  // const [isLoading, setIsLoading] = useState(true);
  const [airData, setAirData] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const {
      data: { list },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(list[0]);
    // console.log(list[0].components.co);

    setAirData(list[0]);
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

  return airData === null ? <LoadingBetween /> : <Dust air={airData} />;
}

//   return Data === null ? (
//     <Loading />
//   ) : (
//     <Home today={weatherData} yesterday={yesterdayData} />
