import React, {useState} from "react";
import {StyleSheet, Text, View, ImageBackground} from "react-native";

const image = require("../assets/loading.png");
export default function Loading() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Weather For You</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  text: {
    color: "#rgba(10, 10, 10,0.6)",
    fontSize: 28,
    fontWeight: "500",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
