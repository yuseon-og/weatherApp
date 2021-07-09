import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from "react-native";

export default function Forecast({
  time,
  temp,
  feelsLike,
  humidity,
  pop,
  rain,
  uvi,
  windSpeed,
  weather,
  icon,
}) {
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  let date = new Date(time * 1000);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let daylablel = date.getDay();

  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();
  // console.log(date);
  // console.log(today);
  // if (todayMonth === month && day === todayDay) {
  //   console.log("Same");
  // } else {
  //   console.log("Neop!");
  // }

  // todayMonth === month && day === todayDay
  //   ? console.log("Same")
  //   : console.log("Neop!");

  // let compareTemp = Math.round(parseInt(todayTemp) - parseInt(yesterDayTemp));

  //   console.log(compareTemp);

  return (
    <>
      <View style={styles.box_container}>
        <View style={styles.weather_container}>
          <View style={styles.dayBox}>
            {todayMonth === month && day === todayDay ? (
              <Text style={styles.textDT}>오늘</Text>
            ) : (
              <View style={styles.dayInnerBox}>
                <Text style={styles.textDT}>
                  {month}월 {day}일
                </Text>
                <Text style={styles.textDT}>{week[daylablel]}</Text>
              </View>
            )}
          </View>

          <View style={styles.weatherBox}>
            <View style={styles.iconBox}>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}
                style={{width: 70, height: 70}}
              />
            </View>
            <View style={styles.iconInnerBox}>
              <Text style={styles.textDT}>{weather}</Text>
            </View>
          </View>

          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <View style={styles.tempInner}>
                <Text style={styles.textDT}>아침</Text>
                <Text style={styles.textDT}>{Math.round(temp.morn)}º</Text>
              </View>

              <View style={styles.tempInner}>
                <Text style={styles.textDT}>낮</Text>
                <Text style={styles.textDT}>{Math.round(temp.day)}º</Text>
              </View>

              <View style={styles.tempInner}>
                <Text style={styles.textDT}>저녁</Text>
                <Text style={styles.textDT}>{Math.round(temp.eve)}º</Text>
              </View>

              <View style={styles.tempInner}>
                <Text style={styles.textDT}>밤</Text>
                <Text style={styles.textDT}>{Math.round(temp.night)}º</Text>
              </View>
            </View>
          </View>
          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <View style={styles.tempInner}>
                <Text style={styles.textDT}>아침</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.morn)}º</Text>
              </View>
              <View style={styles.tempInner}>
                <Text style={styles.textDT}>낮</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.day)}º</Text>
              </View>
              <View style={styles.tempInner}>
                <Text style={styles.textDT}>저녁</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.eve)}º</Text>
              </View>
              <View style={styles.tempInner}>
                <Text style={styles.textDT}>밤</Text>
                <Text style={styles.textDT}>
                  {Math.round(feelsLike.night)}º
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.otherBox}>
            <Text style={styles.textother}>{humidity} %</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{Math.round(pop * 100)} %</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{rain} mm</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{uvi}자외선</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{windSpeed}풍속</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  box_container: {
    flex: 1,
    // width: "12.5%",
    backgroundColor: "rgba(10, 10, 10,0.6)",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: "rgba(200, 200, 200, 0.2)",
  },
  weather_container: {
    flex: 1,
  },
  dayBox: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",
  },
  dayInnerBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  weatherBox: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,

    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",
  },

  iconBox: {
    justifyContent: "center",
    alignItems: "center",

    width: "72%",
    // height: "65%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
    shadowColor: "black",
    elevation: 0,
    // marginTop: 12,
    backgroundColor: "rgba(255, 255, 255,0.5)",

    // borderWidth: 1,
    // borderColor: "green",
  },
  iconInnerBox: {
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "grey",
  },

  tempBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",
  },
  tempCon: {
    justifyContent: "center",
    alignItems: "center",
    // width: "120%",
    flexDirection: "row",

    borderWidth: 1,
    borderColor: "yellow",
  },
  tempInner: {
    justifyContent: "center",
    alignItems: "center",
    // width: "25%",
    // flexDirection: "row",

    borderWidth: 1,
    borderColor: "red",
  },

  otherBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",
  },

  textBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  // 여기서부터 텍스트 컴포넌트
  textDT: {
    fontSize: 11,
    color: "white",
    fontWeight: "100",
    margin: 1,
  },

  textother: {
    fontSize: 15,
    color: "white",
    fontWeight: "200",
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
