import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { UserContext } from "../../context";
export default function Loading() {
  const context = useContext(UserContext);
  //   console.log("이건 컨텍스트");
  //   console.log(context);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>확인중</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
