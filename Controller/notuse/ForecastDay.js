import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

////////// 그냥 props 넘겨서 스크린 보여주는게 좋을 것 같다//////////////////
export default function Forecast({ day }) {
  function convertDay(dayNumber) {
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    let date = new Date(dayNumber * 1000);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let daylablel = date.getDay();

    return { month: month, day: day, daylablel: week[daylablel] };
  }

  const dayInfor = day.map((num) => {
    const dayInfo = convertDay(num.dt);
    console.log(dayInfo.month);
    console.log(dayInfo.day);
    console.log(dayInfo.daylablel);
    return (
      <Text style={styles.days}>
        {dayInfo.month}월 {dayInfo.day}일 {dayInfo.daylablel}
        <Text style={styles.temp}>
          - 체감온도 낮 : {num.feels_like.day} 밤 : {num.feels_like.night} 저녁
          : {num.feels_like.eve} 아침 : {num.feels_like.morn}
        </Text>
        <Text style={styles.temp}>
          - 온도 낮 : {num.temp.day} 밤 : {num.temp.night} 저녁 : {num.temp.eve}{" "}
          아침 : {num.temp.morn} 최저 : {num.temp.min} 최고 : {num.temp.max}
        </Text>
      </Text>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView>{dayInfor}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  days: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    flex: 7,
    marginBottom: 100,
  },
});
