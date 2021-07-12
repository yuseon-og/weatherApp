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

function findImage(today) {
  let result = "";
  if (today.dt >= today.sunrise && today.dt <= today.sunset) {
    result = {a: "1", b: weatherOption[today.weather[0].main].image};
  } else {
    result = {a: "2", b: weatherOption[today.weather[0].main].image};
  }

  return result;
}

export {findImage};

export default weatherOption;
