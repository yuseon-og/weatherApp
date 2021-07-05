import React, {useState} from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import {Ionicons, MaterialCommunityIcons, Fontisto} from "@expo/vector-icons";

const weatherOption = {
  Thunderstorm: {
    icon: "weather-lightning-rainy",
  },
  Drizzle: {icon: "weather-rainy"},
  Rain: {icon: "weather-pouring"},
  Snow: {icon: "weather-snowy-heavy"},
  Mist: {icon: "weather-hail"},
  Smoke: {icon: "weather-fog"},
  Haze: {icon: "weather-hazy"},
  Dust: {icon: "weather-fog"},
  Fog: {icon: "weather-fog"},
  Sand: {icon: "weather-fog"},
  Dust: {icon: "weather-fog"},
  Ash: {icon: "weather-fog"},
  Squall: {icon: "weather-windy"},
  Tornado: {icon: "weather-tornado"},
  Clear: {icon: "weather-sunny"},
  Clouds: {icon: "weather-cloudy"},
};

// Thunderstorm : {icon : "weather-lightning-rainy",color:['#141517','#fffc00'] },
// Drizzle : {icon :"weather-rainy",color:['#3a7bd5','#00d2ff'] },
// Rain : {icon : "weather-pouring",color:['#000046','#1cb5e0']},
// Snow : {icon : "weather-snowy-heavy",color:['#00416a','#e4e5e6']},
// Mist : {icon : "weather-hail",color:['#8e9eab','#eef2f3']},
// Smoke : {icon : "weather-fog",color:['#304352','#d7d2cc']},
// Haze : {icon : "weather-hazy",color:['#8e9eab','#eef2f3'] },
// Dust : {icon : "weather-fog",color:['#16222a','#3a6073']},
// Fog : {icon : "weather-fog",color:['#8e9eab','#eef2f3']},
// Sand : {icon : "weather-fog",color:['#4da0b0','#d39d38']},
// Dust : {icon : "weather-fog",color:['#4da0b0','#d39d38']},
// Ash : {icon : "weather-fog",color:['#304352','#d7d2cc']},
// Squall : {icon : "weather-windy",color:['#16222a','#3a6073']},
// Tornado : {icon :"weather-tornado",color:['#16222a','#3a6073'] },
// Clear: { icon: "weather-sunny", color: ['#ee9ca7', '#ffdde1'] },
// Clouds: { icon: "weather-cloudy", color: ['#8e9eab', '#eef2f3'] }
// color: ["#141517", "#fffc00"]
// color: ["#3a7bd5", "#00d2ff"]
// color: ["#000046", "#1cb5e0"]
// color: ["#00416a", "#e4e5e6"]
// color: ["#8e9eab", "#eef2f3"]
// color: ["#304352", "#d7d2cc"]
// color: ["#8e9eab", "#eef2f3"]
// color: ["#16222a", "#3a6073"]
// color: ["#8e9eab", "#eef2f3"]
// color: ["#4da0b0", "#d39d38"]
// color: ["#4da0b0", "#d39d38"]
// color: ["#304352", "#d7d2cc"]
// color: ["#16222a", "#3a6073"]
// color: ["#16222a", "#3a6073"]
// color: ["#89F7FE", "#66A6FF"]
// color: ["#8e9eab", "#eef2f3"]

// Thunderstorm : 천둥번개폭풍 ok
// Drizzle : 이슬비 ok
// Rain : 비 ok
// Snow : 눈 ok
// Mist : 안개 -
// Smoke : 연기 ok
// Haze :연무(실안개) -
// Dust : 회오리바람
// Fog : 안개 -
// Sand : 모래 ok
// Dust : 흙먼지 ok
// Ash : 화산재 ok
// Squall : 돌풍
// Tornado : 토네이도
// Clear : 맑음 ok
// Clouds : 흐림 ok

// 나눠야 할 백그라운드
// 낮 : 맑음, 흐림 , 비, 눈
// 밤 : 맑음, 흐림, 비, 눈

const image = {
  uri: "https://cdn.pixabay.com/photo/2017/03/24/17/10/maldives-2171627_960_720.jpg",
};

export default function Weather({today, yesterday}) {
  // console.log(today)
  // console.log(yesterday)

  const tempGap = Math.round(today.main.temp - yesterday.temp);
  const humidGap = Math.round(today.main.humidity - yesterday.humidity);
  // const [humidity, setHumidity] = useState(null);
  // const [feelsLike, setFeelsLike] = useState(null);
  // setTemp(today.main.temp - yesterday.temp);
  // console.log(temp)
  //

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
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
          {/* </LinearGradient> */}
        </ImageBackground>
      </View>
    </>
  );
}

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
