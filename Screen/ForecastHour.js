import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import HourCompareView from "./View/HourCompareView";
import HourContentView from "./View/HourContentView";
import { UserContext } from "../context";

export default function Forecast() {
  const context = useContext(UserContext);
  // console.log("이건 컨텍스트");
  // console.log(context);

  const weatherD = context.weatherD;
  const yesterdayD = context.yesterdayD;
  const dayBeforeD = context.dayBeforeD;

  // 오늘 시간데이터와 새로 만들어진 과거 데이터와 비교
  // 과거 시간데이터 + 86400 == 오늘시간데이터 일치하면
  // 아래의 새 배열에 push로 데이터 넣기
  let newObject = [];

  // weatherD = today
  // yesterdayD = yesterday
  // dayBeforeD = yesterday2

  //여기서 부터  어제와 오늘 비교하는 내용
  // console.log(today.current);
  // console.log(yesterday.hourly);
  // console.log(yesterday2);

  // 09시 이전이라면 yesterday2(dayBeforeD)데이터가 있고 이후라면 빈배열
  // 이 둘을 합쳐서 09시 이전이라면 전전날09시~전날08시 + 전날 09시~당일 08시까지 배열만듦
  // 09시 이후라면 전날 09시~당일 08시까지배열만 반환

  const yesterdayArray = [...(yesterdayD.hourly || []), ...(dayBeforeD || [])];
  const todayHourly = weatherD.hourly;
  // console.log(yesterdayArray);

  //1일전 데이터에서 현재시간기준으로 해야하니까
  // 현재시간기준 1일전보다 큰것만 반환하는 새로운 배열 만들기

  const yesterdayHourly = yesterdayArray.filter(function (element) {
    return element.dt >= yesterdayD.current.dt;
  });
  // console.log(yesterdayHourly);

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

  todayHourly.map((eleToday) => {
    yesterdayHourly.map((eleYester) => {
      eleYester.dt + 86400 === eleToday.dt
        ? newObject.push({
            dt: eleToday.dt,
            weather: eleToday.weather[0].main,
            icon: eleToday.weather[0].icon,
            todayTemp: eleToday.feels_like,
            yesterdayTemp: eleYester.feels_like,
            pop: eleToday.pop,
          })
        : null;
    });
  });

  // 12개 까지만 넣기 위해서....
  let finalArray = [];
  // let i = 0;
  // while (newObject[i] != undefined && i < 12) {
  //   i++;
  //   finalArray.push(newObject[i]);
  // }

  for (let i = 0; i < newObject.length; i++) {
    finalArray.push(newObject[i]);
  }

  // const finalArray = newObject.filter((n) => {
  //   return n < 13;
  // });

  // console.log(`새로운 오브젝트 ${newObject}`);
  // console.log(newObject);
  // console.log("-----------");
  // console.log(finalArray);

  const compareData = finalArray.map((element) => {
    return (
      <HourCompareView
        key={element.dt}
        time={element.dt}
        weather={element.weather}
        icon={element.icon}
        todayTemp={element.todayTemp}
        yesterDayTemp={element.yesterdayTemp}
        pop={element.pop}
        style={styles.container}
      />
    );
  });

  return (
    <>
      <View style={styles.container}>
        <HourContentView />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {compareData}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
