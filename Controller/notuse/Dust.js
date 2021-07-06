import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Dust({ air }) {
  console.log(air.component);
  console.log(air.co);
  console.log(air.co);

  return (
    <View style={styles.container}>
      <Text>Total : {air.main.aqi}</Text>
      <Text>CO : {air.co}</Text>
      <Text>NH3 : {air.nh3}</Text>
      <Text>NO : {air.no}</Text>
      <Text>NO2 : {air.no2}</Text>
      <Text>O3 : {air.o3}</Text>
      <Text>PM2.5 : {air.pm2_5}</Text>
      <Text>PM10 : {air.pm10}</Text>
      <Text>SO2 : {air.so2}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
