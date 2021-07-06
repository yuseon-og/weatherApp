import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import weatherOption, { findImage } from "../Controller/WeatherDesign";
import { UserContext } from "../context";
let image2 = {};

export default function Weather({ today, yesterday }) {
  const context = useContext(UserContext);
  console.log("이건 컨텍스트");
  console.log(context);
  // image2 = findImage(today);
  // console.log(image2);
  // console.log(today.sys);
  // console.log(today);
  // console.log(yesterday)

  const tempGap = Math.round(today.main.temp - yesterday.temp);
  const humidGap = Math.round(today.main.humidity - yesterday.humidity);

  return (
    <View style={styles.container}>
      <View style={styles.halfContainer1}>
        <MaterialCommunityIcons
          name={weatherOption[today.weather[0].main].icon}
          size={96}
          color="white"
        />
        <Text style={styles.condition}>
          {today.weather[0].main} /{" "}
          <Text style={styles.temp}>{Math.round(today.main.temp)}º / </Text>
          <Text style={styles.humidity}>{today.main.humidity}%</Text>
        </Text>
      </View>
      <View style={styles.halfContainer2}>
        <View style={[styles.halfContainer, styles.textContainer]}>
          <Text style={styles.yesterday}>
            어제는 /{" "}
            <Text style={styles.yesterday}>
              {Math.round(yesterday.temp)}º /{" "}
            </Text>
            <Text style={styles.yesterday}>{yesterday.humidity}%</Text>
          </Text>
          <Text style={styles.tempDscription}>
            온도가{" "}
            {tempGap === 0
              ? "어제와 같아요"
              : tempGap > 0
              ? `어제보다 ${tempGap}도 높아요`
              : `어제보다 ${tempGap}도 낮아요`}
          </Text>
          <Text style={styles.humidityDscription}>
            습도가{" "}
            {humidGap === 0
              ? "어제와 같아요"
              : humidGap > 0
              ? `어제보다 ${humidGap}% 높아요`
              : `어제보다 ${-humidGap}% 낮아요`}
          </Text>
        </View>
      </View>
    </View>
  );
}

export { image2 };

Weather.propTypes = {
  today: PropTypes.object.isRequired,
  yesterday: PropTypes.object.isRequired,
  // condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado","Clear","Clouds"]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  condition: {
    fontSize: 40,
    color: "white",
  },
  temp: {
    fontSize: 40,
    fontWeight: "500",

    color: "white",
  },
  humidity: {
    fontSize: 35,
    fontWeight: "500",
    color: "white",
  },
  tempDscription: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  yesterday: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  humidityDscription: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },

  halfContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

{
}
// <LinearGradient colors={["#0083b0", "#00b4db"]} style={styles.container}>
//         <View style={styles.halfContainer}>
//           <MaterialCommunityIcons
//             name={weatherOption[today.weather[0].main].icon}
//             size={96}
//             color="white"
//           />
//           <Text style={styles.condition}>
//             {today.weather[0].main} /{" "}
//             <Text style={styles.temp}>{Math.round(today.main.temp)}º / </Text>
//             <Text style={styles.humidity}>{today.main.humidity}%</Text>
//           </Text>
//         </View>
//         <View style={styles.halfContainer}>
//           <View style={[styles.halfContainer, styles.textContainer]}>
//             <Text style={styles.yesterday}>
//               어제는 /{" "}
//               <Text style={styles.yesterday}>
//                 {Math.round(yesterday.temp)}º /{" "}
//               </Text>
//               <Text style={styles.yesterday}>{yesterday.humidity}%</Text>
//             </Text>
//             <Text style={styles.tempDscription}>
//               온도가{" "}
//               {tempGap === 0
//                 ? "어제와 같아요"
//                 : tempGap > 0
//                 ? `어제보다 ${tempGap}도 높아요`
//                 : `어제보다 ${tempGap}도 낮아요`}
//             </Text>
//             <Text style={styles.humidityDscription}>
//               습도가{" "}
//               {humidGap === 0
//                 ? "어제와 같아요"
//                 : humidGap > 0
//                 ? `어제보다 ${humidGap}% 높아요`
//                 : `어제보다 ${-humidGap}% 낮아요`}
//             </Text>
//           </View>
//         </View>
//       </LinearGradient>
