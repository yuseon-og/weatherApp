import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import LoadingBetween from "../Screen/LoadingBetween";
import ForecastHour from "../Screen/ForecastHour";

const ADDRESS = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";
const API = "onecall";
const EXCLUDE = "daily";

// refreshControll 위한 함수
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function HourlyCompare() {
  // refreshControll 위한 state
  const [refreshing, setRefreshing] = React.useState(false);

  // refreshControll 위한 내용
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getLocation();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // const [isLoading, setIsLoading] = useState(true);
  const [hourForecast, sethourForecast] = useState(null);
  const [hourHistorical, sethourHistorical] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `${ADDRESS}${API}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    sethourForecast(data);
    const yesterday = data.current.dt - 84200;
    const yesterdayData = await axios.get(
      `${ADDRESS}${API}/timemachine?lat=${latitude}&lon=${longitude}&dt=${yesterday}&appid=${API_KEY}&units=metric`
    );
    sethourHistorical(yesterdayData.data);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Donno where you are, Can't find you....");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return hourHistorical === null ? (
    <LoadingBetween />
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <ForecastHour today={hourForecast} yesterday={hourHistorical} />
    </ScrollView>
  );
}
