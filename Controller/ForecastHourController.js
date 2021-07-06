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
const HISTORY = "https://history.openweathermap.org/data/2.5/history/city?";
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
  const [hourArray, setHourArray] = useState(null);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `${ADDRESS}${API}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    sethourForecast(data);

    // 현재의 UTC 타임을 받아서 현재 시간이 몇시인지 확인

    let time = new Date(data.current.dt * 1000);
    let now = time.getHours();

    // UTC시간 9시 기준으로
    // 9시 이전 - 86400 = 전날 9시 이전 = 결과치 : 전전날 09시부터 전날 08시까지
    // 9시 이후 - 86400 = 전날 9시 이후 = 결과치 : 전날 09시부터 당일 08시까지
    // 비교데이터는 오늘! 오늘 이시간 이후와 전날의 이시간 데이터
    // 따라서 9시 이전이라면 전전날09시~전날08시 + 전날 09시~당일 08시까지 모두 필요
    // -> 두개의 api를 모두 받아와서 넘겨주고 넘겨준곳에서 합치기
    // 9시 이후라면 전날 09시부터 당일 08시까지만 필요
    // if로 구분하여 동작

    if (now < 9) {
      const yesterday1 = data.current.dt - 86400;
      const yesterday2 = data.current.dt;
      const yesterdayData1 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${latitude}&lon=${longitude}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
      );
      const yesterdayData2 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${latitude}&lon=${longitude}&dt=${yesterday2}&appid=${API_KEY}&units=metric`
      );

      sethourHistorical(yesterdayData1.data);
      setHourArray(yesterdayData2.data.hourly);
    } else {
      const yesterday1 = data.current.dt - 86400;
      const yesterdayData1 = await axios.get(
        `${ADDRESS}${API}/timemachine?lat=${latitude}&lon=${longitude}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
      );

      sethourHistorical(yesterdayData1.data);
      setHourArray([]);
    }
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Don't know where you are, Can't find you....");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // console.log(hourForecast);

  return hourHistorical === null ? (
    <LoadingBetween />
  ) : (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <ForecastHour
        today={hourForecast}
        yesterday={hourHistorical}
        yesterday2={hourArray}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
