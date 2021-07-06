import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import CompareView from "./View/CompareView";

export default function Forecast({ today, yesterday, yesterday2 }) {
  //여기서 부터  어제와 오늘 비교하는 내용
  // console.log(today.current);
  // console.log(yesterday.hourly);
  // console.log(yesterday2);

  // 09시 이전이라면 yesterday2데이터가 있고 이후라면 빈배열
  // 이 둘을 합쳐서 09시 이전이라면 전전날09시~전날08시 + 전날 09시~당일 08시까지 배열만듦
  // 09시 이후라면 전날 09시~당일 08시까지배열만 반환

  const yesterdayArray = [...(yesterday.hourly || []), ...(yesterday2 || [])];

  // console.log(yesterdayArray);
  const todayHourly = today.hourly;

  //1일전 데이터에서 현재시간기준으로 해야하니까
  // 현재시간기준 1일전보다 큰것만 반환하는 새로운 배열 만들기

  const yesterdayHourly = yesterdayArray.filter(function (element) {
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
        style={styles.container}
      />
    );
  });

  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <CompareView
          time={today.current.dt}
          weather={today.current.weather[0].main}
          todayTemp={today.current.feels_like}
          yesterDayTemp={yesterday.current.feels_like}
        />

        {compareData}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  scrollView: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
