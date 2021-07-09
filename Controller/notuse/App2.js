import {StatusBar} from "expo-status-bar";
import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./Loading";
import Weather from "./Weather";


const API_KEY = "05b3728fcc8a0180d27ce08830a9a6d0";


export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData,setData]= useState(null);

  const getWeather = async (latitude,longitude) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    console.log(data.data.main.temp)
    setData(data);
    console.log(weatherData)
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      console.log(latitude);
      console.log(longitude);
      getWeather(latitude, longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Donno where you are, Can't find you....");
    }
  };


  useEffect(() => {
    getLocation();
  },[]);
 
  return isLoading ? <Loading /> : null
    // < Weather />
}




// 클래스형 컴포넌트

export default class extends React.Component {
    state = {
        isLoading : true
    }
    getWeather = async (latitude, longitude) => {
        const { data } = await axios.get(
         
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        console.log(data);
        this.setState({ isLoading: false, temp : data.main.temp});
    };
    
  getLocation = async () => {
    try {
     await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude
        console.log(latitude);
        console.log(longitude);
        this.getWeather(latitude, longitude);
        this.setState({isLoading:false})
      
    } catch (error) {
      Alert.alert("Can't find you...");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
    render() {
      const { isLoading,temp } =this.state;
    return isLoading ? <Loading /> : <Weather temp={temp}/>
  }
}
  



export default function App() {
  
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setData] = useState();
  
    const getWeather = async (latitude, longitude) => {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      // console.log(data)
      // setData(data);
      
      
      
    }
  
    const getLocation = async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const location = await Location.getCurrentPositionAsync({});
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude
        // console.log(latitude);
        // console.log(longitude)
  
        getWeather(latitude, longitude);
        setIsLoading(false);
      } catch (error) {
        Alert.alert("Donno where you are, Can't find you....");
      }
    };
  
  
    useEffect(() => {
      getLocation();
      
    },[]);
   
    return isLoading ? <Loading /> : <Weather temp={weatherData.main.temp}/>
    
    
    // <View>
       
    //    <Text>{console.log(isLoading)}</Text>
    //   <Text>{console.log(weatherData)}</Text>
    //   <Text>{weatherData.main.temp }</Text>
  //     <Text>{weatherData ?weatherData.main.temp : "nope"}</Text>
    //  </View>
    
    
    // isLoading ? <Loading /> : null
      
    
    // < Weather />
    
    // <View>
    //   <Text>{latitude},{longitude}</Text>
    // </View>
    
    
  
  }