import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, Alert, ScrollView, RefreshControl } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "../Screen/Loading";
import Home from "../Screen/Home";

const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";

// refreshControll 위한 함수
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

let a = {};
let b = {};

export default function Data() {
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
  }, []);

  // console.log(weatherData);

  a = weatherData;
  b = yesterdayData;

  return yesterdayData === null ? (
    <Loading />
  ) : (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Home today={weatherData} yesterday={yesterdayData} />
      {/* <ForecastHourController /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export { a, b };
// return yesterdayData === null ? (
//   <Loading />
// ) : (
//   <ScrollView
//     contentContainerStyle={styles.scrollView}
//     refreshControl={
//       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//     }
//   >
//     <Home today={weatherData} yesterday={yesterdayData} />
//     {/* <ForecastHourController /> */}
//   </ScrollView>
// );
