import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Forecast() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.weatherBox}>
          <View style={styles.weatherBoxDT}>
            <Text style={styles.textDT}>날짜</Text>
          </View>
          <View style={styles.weatherBoxDT}>
            <Text style={styles.textDT}>시간</Text>
          </View>
          <View style={styles.weatherBoxNow}>
            <Text style={styles.textDT}>날씨</Text>
          </View>
          <View style={styles.weatherBoxNow}>
            <Text style={styles.textDT}>체감</Text>
            <Text style={styles.textDT}>온도</Text>
          </View>
          <View style={styles.weatherBoxPop}>
            <Text style={styles.textDT}>강수</Text>
            <Text style={styles.textDT}>확률</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "4%",

    backgroundColor: "rgba(80, 80, 80,0.5)",
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
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderWidth: 1,
    // borderColor: "yellow",
  },

  weatherBoxNow: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderBottomWidth: 0.8,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "rgba(127, 143, 166,0.5)",

    // borderRadius: 15,
    // borderWidth: 1,
    // borderColor: "blue",
  },

  weatherBoxPop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    // borderRadius: 15,

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
    textAlign: "center",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
