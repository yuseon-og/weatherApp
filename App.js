import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React, {useState, useEffect} from "react";
import {
  ImageBackground,
  StyleSheet,
  Alert,
  ScrollView,
  RefreshControl,
} from "react-native";

import * as Location from "expo-location";
import axios from "axios";
import UserContextProvider from "./context";
import {findImage} from "./Screen/View/WeatherDesign";

import HomeController from "./Screen/Home";
import DayController from "./Screen/ForecastDay";
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

  const getWeather = async (lat, long) => {
    const {data} = await axios.get(
      `${ADDRESS}${API}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

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

      getWeather(lat, long);
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
    if (imageSet.a === "1") {
      switch (imageSet.b) {
        case "sun":
          image = require("./assets/1_sun.jpg");
          break;
        case "cloud":
          image = require("./assets/1_cloud.jpg");
          break;
        case "rain":
          image = require("./assets/1_rain.jpg");
          break;
        case "snow":
          image = require("./assets/1_snow.jpg");
          break;
        default:
          image = require("./assets/1_sun.jpg");
      }
    } else {
      switch (imageSet.b) {
        case "sun":
          image = require("./assets/2_sun.jpg");
          break;
        case "cloud":
          image = require("./assets/2_cloud.jpg");
          break;
        case "rain":
          image = require("./assets/2_rain.jpg");
          break;
        case "snow":
          image = require("./assets/2_snow.jpg");
          break;
        default:
          image = require("./assets/2_sun.jpg");
      }
    }
  }

  return dayBeforeD === null ? (
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
              sceneContainerStyle={{backgroundColor: "transparent"}}
              tabBarOptions={{
                activeTintColor: "rgba(14, 76, 114,1.0)",
                inactiveTintColor: "gray",
                showLabel: true,
                showIcon: true,
                labelStyle: styles.labelStyle,
                tabStyle: styles.tabStyle,
              }}
              tabBarPosition={"bottom"}
            >
              <Tab.Screen
                name="Home"
                component={HomeController}
                options={{tabBarLabel: "오늘의 날씨"}}
              />
              <Tab.Screen
                name="ForecastDay"
                component={DayController}
                options={{tabBarLabel: "이번주 날씨"}}
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
  tabStyle: {
    // backgroundColor: "#rgba(1, 1, 1,0.7)",
    // display: "none",
  },
  labelStyle: {
    fontSize: 15,
  },
});

export {weatherD, yesterdayD, dayBeforeD};
