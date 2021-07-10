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
// 낮 : 1.맑음, 2.흐림 , 3.비, 4.눈
// 밤 : 5.맑음, 6.흐림, 7.비, 8.눈

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
