import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast() {
  return (
    <View style={styles.container}>
      <Text>Weather</Text>
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
