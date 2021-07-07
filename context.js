import React, {useState, useEffect} from "react";
import * as Location from "expo-location";
import axios from "axios";

import {weatherD, yesterdayD, dayBeforeD} from "./App";

const UserContext = React.createContext();

const UserContextProvider = ({children}) => (
  <UserContext.Provider value={{weatherD, yesterdayD, dayBeforeD}}>
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;

export {UserContext};

// API 받아오는 로직
// const ADDRESS = "https://api.openweathermap.org/data/2.5/";
// const API_KEY = "1eaa85bc3b419d87b8faa16def8c886e";
// const API = "onecall";

// let weatherData = null;
// let yesterdayData = null;
// let dayBeforeData = null;

// function setLocation() {
//   const [weatherData, setData] = useState(null);
//   const [yesterdayData, setYesterday] = useState(null);
//   const [dayBeforeData, setdayBeforeData] = useState(null);
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const getWeather = async (lat, long) => {
//     const { data } = await axios.get(
//       `${ADDRESS}${API}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
//     );

//     console.log("여기?");
//     setData(data);

//     let time = new Date(data.current.dt * 1000);
//     let now = time.getHours();

//     if (now < 9) {
//       const yesterday1 = data.current.dt - 86400;
//       const yesterday2 = data.current.dt;
//       const yesterdayData1 = await axios.get(
//         `${ADDRESS}${API}/timemachine?lat=${lat}&lon=${long}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
//       );
//       const yesterdayData2 = await axios.get(
//         `${ADDRESS}${API}/timemachine?lat=${lat}&lon=${long}&dt=${yesterday2}&appid=${API_KEY}&units=metric`
//       );

//       setYesterday(yesterdayData1.data);
//       setdayBeforeData(yesterdayData2.data.hourly);
//     } else {
//       const yesterday1 = data.current.dt - 86400;
//       const yesterdayData1 = await axios.get(
//         `${ADDRESS}${API}/timemachine?lat=${latitude}&lon=${longitude}&dt=${yesterday1}&appid=${API_KEY}&units=metric`
//       );

//       setYesterday(yesterdayData1.data);
//       setdayBeforeData([]);
//     }
//   };
//   const getLocation = async () => {
//     try {
//       await Location.requestForegroundPermissionsAsync();
//       const location = await Location.getCurrentPositionAsync({});
//       const lat = location.coords.latitude;
//       const long = location.coords.longitude;

//       setLatitude(lat);
//       setLongitude(long);

//       getWeather(lat, long);
//       // setIsLoading(true);
//     } catch (error) {
//       Alert.alert("Donno where you are, Can't find you....");
//     }
//   };

//   useEffect(() => {
//     getLocation();
//     weatherD = weatherData;
//     yesterdayD = yesterdayData;
//     dayBeforeD = dayBeforeData;
//   }, []);
// }
