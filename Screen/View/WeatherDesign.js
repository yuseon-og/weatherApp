import * as React from "react";

const weatherOption = {
  Thunderstorm: {
    icon: "weather-lightning-rainy",
    image: "rain",
  },
  Drizzle: {icon: "weather-rainy", image: "rain"},
  Rain: {icon: "weather-pouring", image: "rain"},
  Snow: {icon: "weather-snowy-heavy", image: "show"},
  Mist: {icon: "weather-hail", image: "rain"},
  Smoke: {icon: "weather-fog", image: "cloud"},
  Haze: {icon: "weather-hazy", image: "cloud"},
  Dust: {icon: "weather-fog", image: "cloud"},
  Fog: {icon: "weather-fog", image: "cloud"},
  Sand: {icon: "weather-fog", image: "cloud"},
  Dust: {icon: "weather-fog", image: "cloud"},
  Ash: {icon: "weather-fog", image: "cloud"},
  Squall: {icon: "weather-windy", image: "cloud"},
  Tornado: {icon: "weather-tornado", image: "cloud"},
  Clear: {icon: "weather-sunny", image: "sun"},
  Clouds: {icon: "weather-cloudy", image: "cloud"},
};

// const weatherOption = {
//   Thunderstorm: {
//     icon: "weather-lightning-rainy",
//     image: "rain",
//   },
//   Drizzle: {icon: "weather-rainy", image: "rain"},
//   Rain: {icon: "weather-pouring", image: "rain"},
//   Snow: {icon: "weather-snowy-heavy", image: "show"},
//   Mist: {icon: "weather-hail", image: "rain"},
//   Smoke: {icon: "weather-fog", image: "cloud"},
//   Haze: {icon: "weather-hazy", image: "cloud"},
//   Dust: {icon: "weather-fog", image: "cloud"},
//   Fog: {icon: "weather-fog", image: "cloud"},
//   Sand: {icon: "weather-fog", image: "cloud"},
//   Dust: {icon: "weather-fog", image: "cloud"},
//   Ash: {icon: "weather-fog", image: "cloud"},
//   Squall: {icon: "weather-windy", image: "cloud"},
//   Tornado: {icon: "weather-tornado", image: "cloud"},
//   Clear: {icon: "weather-sunny", image: "sun"},
//   Clouds: {icon: "weather-cloudy", image: "cloud"},
// };

// function findNow(today) {
//   let result;
//   if (today.dt >= today.sys.sunrise && today.dt <= today.sys.sunset) {
//     result = require(`../assets/${1}_${
//       weatherOption[today.weather[0].main].image
//     }.jpg`);
//   } else {
//     result = require(`../assets/${2}_${
//       weatherOption[today.weather[0].main].image
//     }.jpg`);
//   }
//   return result;
// }

function matchImage(result) {}

function findImage(today) {
  let result = "";
  if (today.dt >= today.sunrise && today.dt <= today.sunset) {
    result = {a: "1", b: weatherOption[today.weather[0].main].image};
  } else {
    result = {a: "2", b: weatherOption[today.weather[0].main].image};
  }

  return result;
}

// function findHour(today) {
//   let result;
//   if (today.dt >= today.sunrise && today.dt <= today.sunset) {
//     result = require(`./../assets/${1}_${
//       weatherOption[today.weather[0].main].image
//     }.jpg`);
//   } else {
//     result = require(`./../assets/${2}_${
//       weatherOption[today.weather[0].main].image
//     }.jpg`);
//   }
//   return result;
// }

// export { findHour, findImage };
export {findImage};

export default weatherOption;

// const weatherOption = {
//   Thunderstorm: {
//     icon: "weather-lightning-rainy",
//     image: "rain",
//   },
//   Drizzle: { icon: "weather-rainy", image: "rain" },
//   Rain: { icon: "weather-pouring", image: "rain" },
//   Snow: { icon: "weather-snowy-heavy", image: "show" },
//   Mist: { icon: "weather-hail", image: "rain" },
//   Smoke: { icon: "weather-fog", image: "cloud" },
//   Haze: { icon: "weather-hazy", image: "cloud" },
//   Dust: { icon: "weather-fog", image: "cloud" },
//   Fog: { icon: "weather-fog", image: "cloud" },
//   Sand: { icon: "weather-fog", image: "cloud" },
//   Dust: { icon: "weather-fog", image: "cloud" },
//   Ash: { icon: "weather-fog", image: "cloud" },
//   Squall: { icon: "weather-windy", image: "cloud" },
//   Tornado: { icon: "weather-tornado", image: "cloud" },
//   Clear: { icon: "weather-sunny", image: "sun" },
//   Clouds: { icon: "weather-cloudy", image: "cloud" },
// };

// Thunderstorm : ?????????????????? ok
// Drizzle : ????????? ok
// Rain : ??? ok
// Snow : ??? ok
// Mist : ?????? -
// Smoke : ?????? ok
// Haze :??????(?????????) -
// Dust : ???????????????
// Fog : ?????? -
// Sand : ?????? ok
// Dust : ????????? ok
// Ash : ????????? ok
// Squall : ??????
// Tornado : ????????????
// Clear : ?????? ok
// Clouds : ?????? ok

// ????????? ??? ???????????????
// ??? : 1.??????, 2.?????? , 3.???, 4.???
// ??? : 5.??????, 6.??????, 7.???, 8.???

// const image = {
//   day_sun: { uri: "../assets/1.jpg" },
//   day_cloud: { uri: "../assets/2.jpg" },
//   day_rain: { uri: "../assets/3.jpg" },
//   day_snow: { uri: "../assets/4.jpg" },
//   night_sun: { uri: "../assets/5.jpg" },
//   night_cloud: { uri: "../assets/6.jpg" },
//   night_rain: { uri: "../assets/7.jpg" },
//   night_snow: { uri: "../assets/8.jpg" },
// };
