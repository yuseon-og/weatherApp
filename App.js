import {StatusBar} from "expo-status-bar";
import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

// const getLocation = async () => {
//   try {
//     const response = await Location.getForegroundPermissionsAsync();
//     const location = await Location.getCurrentPositionAsync(options);
//     console.log(location);
//     console.log(response);
//   } catch (error) {
//     Alert.alert("Can't find you...");
//   }
// };

// useEffect(() => {
//   getLocation();
// }, []);

export default function App() {
  //   const [location, setLocation] = useState(null);
  //   const [errorMsg, setErrorMsg] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);

      setLongitude(location.coords.longitude);

      console.log(latitude);

      console.log(longitude);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Can't find you...");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  // useEffect(() => {
  //   async () => {
  //     let {status} = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("fuck not working!!!!");
  //       console.log(status);
  //       return;
  //     }
  //     let locations = await Location.getCurrentPositionAsync({});

  //     setLocation(locations);
  //     console.log(location);
  //   };
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  //예제

  //   useEffect(() => {
  //     (async () => {
  //       let {status} = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         setErrorMsg("Permission to access location was denied");
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //       console.log(location.coords.latitude);
  //       console.log(location.coords.longitude);
  //     })();
  //   }, []);

  //   let text = "Waiting..";
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location);
  //   }

  return isLoading ? (
    <View style={styles.container}>
      <Loading />
      <Text>ㅁㄴㅇㄹ</Text>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

// 클래스형 컴포넌트
// export default class extends React.Component {
//   getLocation = async () => {
//     try {
//       const response = await Location.requestForegroundPermissionsAsync();
//       const location = await Location.getCurrentPositionAsync({});
//       console.log(location);
//       console.log(response);
//     } catch (error) {
//       Alert.alert("Can't find you...");
//     }
//   };
//   componentDidMount() {
//     this.getLocation();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Loading />

//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
