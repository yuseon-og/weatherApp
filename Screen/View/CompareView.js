import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

import {MaterialCommunityIcons, FontAwesome5} from "@expo/vector-icons";
import {unmountComponentAtNode} from "react-dom";

const weatherOption = {
  Thunderstorm: {
    icon: "weather-lightning-rainy",
    color: ["#141517", "#fffc00"],
  },
  Drizzle: {icon: "weather-rainy", color: ["#3a7bd5", "#00d2ff"]},
  Rain: {icon: "weather-pouring", color: ["#000046", "#1cb5e0"]},
  Snow: {icon: "weather-snowy-heavy", color: ["#00416a", "#e4e5e6"]},
  Mist: {icon: "weather-hail", color: ["#8e9eab", "#eef2f3"]},
  Smoke: {icon: "weather-fog", color: ["#304352", "#d7d2cc"]},
  Haze: {icon: "weather-hazy", color: ["#8e9eab", "#eef2f3"]},
  Dust: {icon: "weather-fog", color: ["#16222a", "#3a6073"]},
  Fog: {icon: "weather-fog", color: ["#8e9eab", "#eef2f3"]},
  Sand: {icon: "weather-fog", color: ["#4da0b0", "#d39d38"]},
  Dust: {icon: "weather-fog", color: ["#4da0b0", "#d39d38"]},
  Ash: {icon: "weather-fog", color: ["#304352", "#d7d2cc"]},
  Squall: {icon: "weather-windy", color: ["#16222a", "#3a6073"]},
  Tornado: {icon: "weather-tornado", color: ["#16222a", "#3a6073"]},
  Clear: {icon: "weather-sunny", color: ["#89F7FE", "#66A6FF"]},
  Clouds: {icon: "weather-cloudy", color: ["#8e9eab", "#eef2f3"]},
};

export default function Forecast({time, weather, todayTemp, yesterDayTemp}) {
  //   console.log(time);
  //   console.log(weather);
  //   console.log(todayTemp);
  //   console.log(yesterDayTemp);

  let date = new Date(time * 1000);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let mins = date.getMinutes();
  //   console.log(month);
  //   console.log(day);
  //   console.log(hours);
  //   console.log(mins);

  let compareTemp = Math.round(parseInt(todayTemp) - parseInt(yesterDayTemp));

  //   console.log(compareTemp);

  return (
    <>
      <View
        style={
          compareTemp === 0
            ? styles.box_container_same
            : compareTemp < 0
            ? styles.box_container_cold
            : styles.box_container_warm
        }
      >
        <View style={styles.weatherBox}>
          <View style={styles.weatherBoxInner}>
            <View style={styles.textBox}>
              <Text style={styles.textMain}>
                {month} / {day}
                {hours >= 12
                  ? `  오후 ${hours - 12}`
                  : `  오전 ${hours}`} : {mins < 10 ? `0${mins}` : mins}
              </Text>
            </View>
          </View>
          <View style={styles.weatherBoxInner}>
            <Text style={styles.textMain}>{`${todayTemp} º`}</Text>
          </View>
          <View style={styles.weatherBoxInner}>
            <MaterialCommunityIcons
              name={weatherOption[weather].icon}
              size={55}
              color="white"
            />

            {/* <Text style={styles.textMain}>{`  ${weather}`}</Text> */}
          </View>
        </View>

        <View style={styles.weatherBox}>
          <View style={styles.weatherBoxInner2}>
            <Text style={styles.textMain}>
              어제
              {compareTemp === 0
                ? `와 체감온도가 같아요`
                : compareTemp < 0
                ? `보다 체감온도가 ${-compareTemp} º 낮아요`
                : `보다 체감온도가 ${compareTemp} º 높아요`}
            </Text>
          </View>

          {/* 비교온도가 높냐 낮냐 보여주는 박스 */}
          <View style={styles.weatherBoxInner3}>
            {compareTemp === 0 ? (
              <FontAwesome5
                style={styles.icon}
                name="equals"
                size={40}
                color="white"
              />
            ) : compareTemp < 0 ? (
              <MaterialCommunityIcons
                style={styles.icon}
                name="arrow-down-bold-box"
                size={40}
                color="blue"
              />
            ) : (
              <MaterialCommunityIcons
                style={styles.icon}
                name="arrow-up-bold-box"
                size={40}
                color="red"
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box_container_cold: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#6bbaeb",
    shadowColor: "#d2ffff",
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    color: "white",
  },
  box_container_warm: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#e9a5b6",
    shadowColor: "#d2ffff",
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    color: "white",
  },
  box_container_same: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#ebba66",
    shadowColor: "#d2ffff",
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    color: "white",
  },
  weatherBox: {
    flex: 3,

    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
  },
  weatherBoxInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,

    borderWidth: 1,
    borderColor: "yellow",
  },
  weatherBoxInner2: {
    flex: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  weatherBoxInner3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: "yellow",
  },
  textBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textMain: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
