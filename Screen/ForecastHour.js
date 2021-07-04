import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CompareView from "./View/CompareView";

// refreshControll 위한 함수
// const wait = (timeout) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// };

export default function Forecast({ today, yesterday }) {
  // refreshControll 위한 state
  // const [refreshing, setRefreshing] = React.useState(false);

  // refreshControll 위한 내용
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  //여기서 부터  어제와 오늘 비교하는 내용
  // console.log(today);
  // console.log(yesterday);
  const todayHourly = today.hourly;
  const yesterdayHourly = yesterday.hourly.filter(function (element) {
    return element.dt >= yesterday.current.dt;
  });
  // console.log(yesterdayHourly);

  // 새로 배열을 만들어
  const newObject = [];

  // 좀따 삭제
  // todayHourly.map((element) => {
  //   yesterdayHourly.map((number) => {
  //     number.dt + 86400 === element.dt
  //       ? console.log(
  //           `element.dt : ${element.dt}, element.weather[0].main : ${element.weather[0].main}, element.feels_like : ${element.feels_like}, number.feels_like : ${number.feels_like} `
  //         )
  //       : null;
  //   });
  // });

  // 오늘 시간데이터 하나하나와 비교하는데 어제 시간데이터 + 86400 === 오늘 시간데이터와 같은거면
  // 새로 배열 만든거에 push로 데이터를 넣어라

  todayHourly.map((element) => {
    yesterdayHourly.map((number) => {
      number.dt + 86400 === element.dt
        ? newObject.push({
            dt: element.dt,
            weather: element.weather[0].main,
            todayTemp: element.feels_like,
            yesterdayTemp: number.feels_like,
          })
        : null;
    });
  });

  // console.log(`새로운 오브젝트 ${newObject}`);
  // console.log(newObject);

  const compareData = newObject.map((element) => {
    return (
      <CompareView
        key={element.dt}
        time={element.dt}
        weather={element.weather}
        todayTemp={element.todayTemp}
        yesterDayTemp={element.yesterdayTemp}
      />
    );
  });

  return (
    <>
      <LinearGradient colors={["#0083b0", "#00b4db"]} style={styles.container}>
        <CompareView
          time={today.current.dt}
          weather={today.current.weather[0].main}
          todayTemp={today.current.feels_like}
          yesterDayTemp={yesterday.current.feels_like}
        />

        {compareData}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
