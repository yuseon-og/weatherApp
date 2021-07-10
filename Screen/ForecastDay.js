import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import DayCompareView from "./View/DayCompareView";
import DayContentView from "./View/DayContentView";
import { UserContext } from "../context";

////////// 그냥 props 넘겨서 스크린 보여주는게 좋을 것 같다//////////////////
export default function ForecastDay() {
  const context = useContext(UserContext);
  // console.log("이건 컨텍스트");
  // console.log(context);
  const weatherD = context.weatherD.daily;

  const dailyData = weatherD.map((element) => {
    return (
      <DayCompareView
        key={element.dt}
        time={element.dt}
        temp={element.temp}
        feelsLike={element.feels_like}
        humidity={element.humidity}
        pop={element.pop}
        rain={element.rain}
        uvi={element.uvi}
        windSpeed={element.wind_speed}
        weather={element.weather[0].main}
        icon={element.weather[0].icon}
        sunrise={element.sunrise}
        sunset={element.sunset}
        style={styles.compareView}
      />
    );
  });

  return (
    <>
      <View style={styles.container}>
        <DayContentView />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {dailyData}
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 5,

    // borderWidth: 1,
    // borderColor: "pink",
  },

  compareView: {
    flexDirection: "row",
  },
  scrollView: {
    flex: 1,
    margin: 2,
    // backgroundColor: "rgba(10, 10, 10,0.6)",
    borderWidth: 2,
    borderColor: "yellow",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
