import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast() {
  return (
    <>
      <View style={styles.box_container}>
        <View style={styles.weather_container}>
          <View style={styles.dayBox}>
            <Text style={styles.textDT}>날짜</Text>
          </View>

          <View style={styles.weatherBox}>
            <Text style={styles.textDT}>날씨</Text>
          </View>

          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <Text style={styles.textDT}>온도</Text>
            </View>
          </View>

          <View style={styles.tempBox}>
            <View style={styles.tempCon}>
              <Text style={styles.textDT}>체감</Text>
              <Text style={styles.textDT}>온도</Text>
            </View>
          </View>

          <View style={styles.otherBox}>
            <Text style={styles.textother}>습도</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>강수</Text>
            <Text style={styles.textother}>확률</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>강수량</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>자외선</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>풍속</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>일출</Text>
          </View>
          <View style={styles.otherBox}>
            <Text style={styles.textother}>일몰</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  box_container: {
    width: "12%",
    backgroundColor: "rgba(10, 10, 10,0.4)",
  },
  weather_container: {
    // width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "red",
  },
  dayBox: {
    width: "100%",
    flex: 0.7,
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

  weatherBox: {
    width: "100%",
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

    // borderWidth: 1,
    // borderColor: "yellow",
  },

  tempBox: {
    width: "100%",
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderWidth: 1,
    // borderColor: "green",
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
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // 각 상자마다 아래 테두리만 넣은것
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderWidth: 1,
    // borderColor: "pink",
  },

  textBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    // borderColor: "white",
  },

  // 여기서부터 텍스트 컴포넌트
  textDT: {
    fontSize: 11,
    color: "white",
    fontWeight: "500",
    margin: 1,
  },

  textother: {
    fontSize: 11,
    color: "white",
    fontWeight: "500",
  },
});
