import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

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
  sunrise,
  sunset,
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

  function getTime(timeInput) {
    let date = new Date(timeInput * 1000);

    let hour = date.getHours();
    let minutes = date.getMinutes();

    return [hour, minutes];
  }

  let date = new Date(time * 1000);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let daylablel = date.getDay();

  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();

  let sunriseTime = getTime(sunrise);
  let sunsetTime = getTime(sunset);

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
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={styles.iconInnerBox}>
              <Text style={styles.textDT}>{weather}</Text>
            </View>
          </View>

          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <View style={styles.tempInner1}>
                <Text style={styles.textDT}>아침</Text>
                <Text style={styles.textDT}>{Math.round(temp.morn)}º</Text>
              </View>
              <View style={styles.tempInner2}>
                <Text style={styles.textDT}>낮</Text>
                <Text style={styles.textDT}>{Math.round(temp.day)}º</Text>
              </View>
            </View>
            <View style={styles.tempCon}>
              <View style={styles.tempInner3}>
                <Text style={styles.textDT}>저녁</Text>
                <Text style={styles.textDT}>{Math.round(temp.eve)}º</Text>
              </View>
              <View style={styles.tempInner4}>
                <Text style={styles.textDT}>밤</Text>
                <Text style={styles.textDT}>{Math.round(temp.night)}º</Text>
              </View>
            </View>
          </View>

          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <View style={styles.tempInner1}>
                <Text style={styles.textDT}>아침</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.morn)}º</Text>
              </View>
              <View style={styles.tempInner2}>
                <Text style={styles.textDT}>낮</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.day)}º</Text>
              </View>
            </View>
            <View style={styles.tempCon}>
              <View style={styles.tempInner3}>
                <Text style={styles.textDT}>저녁</Text>
                <Text style={styles.textDT}>{Math.round(feelsLike.eve)}º</Text>
              </View>
              <View style={styles.tempInner4}>
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
            <Text style={styles.textother}>
              {rain == null ? `-` : `${rain} mm`}
            </Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{uvi}</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>{windSpeed} m/s</Text>
          </View>
          <View style={styles.otherBox}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/01d@2x.png`,
              }}
              style={{ width: 30, height: 30 }}
            />
            <View style={styles.textBox}>
              <Text style={styles.textother}>
                0{sunriseTime[0]}시 {sunriseTime[1]}분
              </Text>
            </View>
          </View>
          <View style={styles.otherBox}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/01n@2x.png`,
              }}
              style={{ width: 30, height: 30 }}
            />
            <View style={styles.textBox}>
              <Text style={styles.textother}>
                {sunsetTime[0]}시 {sunsetTime[1]}분
              </Text>
            </View>
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
    backgroundColor: "rgba(10, 10, 10,0.5)",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: "rgba(200, 200, 200, 0.2)",
  },
  weather_container: {
    flex: 1,
  },
  dayBox: {
    flex: 0.7,
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
    flex: 1.5,
    paddingTop: 5,
    paddingBottom: 5,
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
    // flex: 2,
    justifyContent: "center",
    alignItems: "center",

    //살려야 할것들
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
    shadowColor: "black",
    elevation: 0,
    backgroundColor: "rgba(255, 255, 255,0.5)",
  },
  iconInnerBox: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,

    // borderWidth: 1,
    // borderColor: "grey",
  },

  tempBox: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderWidth: 1,
    // borderColor: "blue",
  },
  tempCon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    // borderWidth: 1,
    // borderColor: "yellow",
  },

  otherBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderWidth: 1,
    // borderColor: "green",
  },

  textBox: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  // 온도부분 경계선 주기
  tempInner1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255,0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255,0.2)",
  },

  tempInner2: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255,0.2)",
  },

  tempInner3: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",

    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255,0.2)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.2)",
  },

  tempInner4: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255,0.2)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255,0.2)",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  },

  // 여기서부터 텍스트 컴포넌트
  textDT: {
    fontSize: 12,
    color: "white",
    fontWeight: "100",
    margin: 1,
  },

  textother: {
    fontSize: 12,
    color: "white",
    fontWeight: "200",
  },
});
