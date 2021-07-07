import React, {useContext} from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, Image} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {UserContext} from "../context";

export default function Weather() {
  const context = useContext(UserContext);
  // console.log("이건 컨텍스트");
  // console.log(context);

  console.log(context);
  const weatherD = context.weatherD;
  const yesterdayD = context.yesterdayD;
  const dayBeforeD = context.dayBeforeD;
  console.log(weatherD.current);
  console.log(weatherD.current.weather[0].icon);
  const icon =
    "uri:`http://openweathermap.org/img/wn/${weatherD.current.weather[0].icon}@2x.png`";
  // console.log(yesterdayD.current);

  const tempGap = Math.round(weatherD.current.temp - yesterdayD.current.temp);
  // console.log(tempGap);
  const humidGap = Math.round(
    weatherD.current.humidity - yesterdayD.current.humidity
  );
  // console.log(humidGap);

  return (
    <View style={styles.container}>
      <View style={styles.halfContainer1}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherD.current.weather[0].icon}@2x.png`,
          }}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.condition}>
          {weatherD.current.weather[0].description} /{" "}
          <Text style={styles.temp}>
            {Math.round(weatherD.current.temp)}º /{" "}
          </Text>
          <Text style={styles.humidity}>{weatherD.current.humidity}%</Text>
        </Text>
      </View>

      <View style={styles.halfContainer2}>
        <View style={[styles.halfContainer, styles.textContainer]}>
          <Text style={styles.yesterday}>
            어제는 /{" "}
            <Text style={styles.yesterday}>
              {Math.round(yesterdayD.current.temp)}º /{" "}
            </Text>
            <Text style={styles.yesterday}>{yesterdayD.current.humidity}%</Text>
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

      {/* <MaterialCommunityIcons
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
        </View> */}
      {/* </View> */}
    </View>
  );
}

Weather.propTypes = {
  // today: PropTypes.object.isRequired,
  // yesterday: PropTypes.object.isRequired,
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
    backgroundColor: "rgba(34, 47, 62,0.6)",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  halfContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 47, 62,0.6)",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 5,
    marginRight: 5,
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
