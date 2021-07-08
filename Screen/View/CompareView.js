import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";

export default function Forecast({
  time,
  weather,
  todayTemp,
  yesterDayTemp,
  icon,
  pop,
}) {
  //   console.log(time);
  //   console.log(weather);
  //   console.log(todayTemp);
  //   console.log(yesterDayTemp);
  // console.log(time);
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
          <View style={styles.weatherBoxDT}>
            <Text style={styles.textDT}>
              {month}월 {day}일
            </Text>
          </View>
          <View style={styles.weatherBoxDT}>
            <Text style={styles.textDT}>
              {hours >= 12 ? `오후 ${hours - 12}시` : `오전 ${hours}시`}
            </Text>
          </View>
          <View style={styles.weatherBoxNow}>
            <View style={styles.iconBox}>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}
                style={{width: 70, height: 70}}
              />
            </View>
            <View style={styles.innerBox}>
              <Text style={styles.textDT}>{weather}</Text>
            </View>
          </View>
          <View style={styles.weatherBoxNow}>
            <View style={styles.iconBox}>
              <Text style={styles.textTemp}>{todayTemp} º</Text>
            </View>
            <View style={styles.innerBox}>
              {compareTemp === 0 ? (
                <View style={styles.innerBox}>
                  <Text style={styles.textSmall}>어제와</Text>
                  <Text style={styles.textCompare}>같아요</Text>
                </View>
              ) : compareTemp > 0 ? (
                <View style={styles.innerBox}>
                  <Text style={styles.textSmall}>어제보다</Text>
                  <Text style={styles.textCompare}>{compareTemp} º 높아요</Text>
                </View>
              ) : (
                <View style={styles.innerBox}>
                  <Text style={styles.textSmall}>어제보다</Text>
                  <Text style={styles.textCompare}>{compareTemp} º 낮아요</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.weatherBoxPop}>
            <Text style={styles.textDT}>{pop} %</Text>
          </View>
        </View>
        {/* <View style={styles.weatherBox}>
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

          비교온도가 높냐 낮냐 보여주는 박스
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
        </View> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  box_container_cold: {
    width: "8%",
    backgroundColor: "rgba(5, 30, 80,0.5)",
  },
  box_container_warm: {
    width: "8%",
    backgroundColor: "rgba(80, 40, 50,0.5)",
  },
  box_container_same: {
    width: "8%",
    backgroundColor: "rgba(50, 80, 80,0.5)",
  },
  weatherBox: {
    flex: 3,

    // borderWidth: 1,
    // borderColor: "black",
  },
  weatherBoxDT: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
    // borderWidth: 1,
    // borderColor: "yellow",
  },

  weatherBoxNow: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,

    justifyContent: "center",
    alignItems: "center",

    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  iconBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "green",
  },
  innerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "grey",
  },

  weatherBoxPop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,

    // borderWidth: 1,
    // borderColor: "yellow",
  },

  textBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textDT: {
    fontSize: 15,
    color: "white",
    fontWeight: "300",
  },
  textTemp: {
    fontSize: 17,
    color: "white",
    fontWeight: "300",
  },
  textSmall: {fontSize: 10, color: "white", fontWeight: "400"},
  textCompare: {fontSize: 15, color: "white", fontWeight: "400"},
  textPo: {
    fontSize: 20,
    color: "white",
    fontWeight: "300",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
