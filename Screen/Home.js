import React, {useContext} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

import {UserContext} from "../context";
import ForecastHour from "./ForecastHour";
export default function Weather() {
  const context = useContext(UserContext);
  // console.log("이건 컨텍스트");
  // console.log(context);

  // console.log(context);
  const weatherD = context.weatherD;
  const yesterdayD = context.yesterdayD;
  // const dayBeforeD = context.dayBeforeD;

  const icon =
    "uri:`http://openweathermap.org/img/wn/${weatherD.current.weather[0].icon}@2x.png`";
  // console.log(yesterdayD.current);

  const tempGap = Math.round(weatherD.current.temp - yesterdayD.current.temp);
  // console.log(tempGap);
  const humidGap = Math.round(
    weatherD.current.humidity - yesterdayD.current.humidity
  );
  // console.log(humidGap);

  return (
    <View style={styles.container}>
      {/* 여기서 부터 위 컨테이너 */}
      <View style={styles.halfContainer1}>
        <View style={styles.leftCon}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherD.current.weather[0].icon}@2x.png`,
              }}
              style={{width: 100, height: 100}}
            />
          </View>
          <View style={styles.condiContainer}>
            <Text style={styles.condition}>
              {weatherD.current.weather[0].main}
            </Text>
          </View>
        </View>
        <View style={styles.RightCon}>
          <View style={styles.discription}>
            <View style={styles.insider}>
              <Text style={styles.tempandhumi}>
                {weatherD.current.temp.toFixed(1)} º
              </Text>
            </View>
            <View style={styles.insider}>
              <Text style={styles.tempandhumi}>
                <Text
                  style={
                    (styles.tempandhumi,
                    {
                      fontSize: 10,
                      marginRight: 10,
                    })
                  }
                >
                  {"습도    "}
                </Text>
                {weatherD.current.humidity} %
              </Text>
            </View>
          </View>
          <View style={styles.discription}>
            <View style={styles.insider}>
              {tempGap === 0 ? (
                <Text style={styles.compare}>어제와 같아요</Text>
              ) : tempGap > 0 ? (
                <View style={styles.insider}>
                  <Text
                    style={{fontSize: 10, color: "rgba(255, 255, 255, 1);"}}
                  >
                    {" "}
                    어제보다
                  </Text>
                  <Text style={styles.compare}>{tempGap} º 높아요</Text>
                </View>
              ) : (
                <View style={styles.insider}>
                  <Text
                    style={{fontSize: 10, color: "rgba(255, 255, 255, 1);"}}
                  >
                    {" "}
                    어제보다
                  </Text>
                  <Text style={styles.compare}>{tempGap} º 낮아요</Text>
                </View>
              )}
            </View>
            <View style={styles.insider}>
              {humidGap === 0 ? (
                <Text style={styles.compare}>어제와 같아요</Text>
              ) : humidGap > 0 ? (
                <View style={styles.insider}>
                  <Text
                    style={{fontSize: 10, color: "rgba(255, 255, 255, 1);"}}
                  >
                    어제보다
                  </Text>
                  <Text style={styles.compare}>{humidGap} % 높아요</Text>
                </View>
              ) : (
                <View style={styles.insider}>
                  <Text
                    style={{fontSize: 10, color: "rgba(255, 255, 255, 1);"}}
                  >
                    {" "}
                    어제보다
                  </Text>
                  <Text style={styles.compare}>{humidGap} % 낮아요</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* 여기서부터 아래 컨테이너 */}

      <View style={styles.halfContainer2}>
        <View style={styles.vertical1}>
          <Text style={styles.subTitle}>오늘의 체감온도</Text>
        </View>
        <View style={styles.vertical2}>
          <ForecastHour />
        </View>

        {/* <MaterialCommunityIcons
          name={weatherOption[today.weather[0].main].icon}
          size={96}
          color="white"
        />
        <Text style={styles.condition}>
          {today.weather[0].main} /{" "}
          <Text style={styles.temp}>{Math.round(today.main.temp)}º / </Text>
          <Text style={styles.humidity}>{today.main.humidity}%</Text>
        </Text>
      </View>
      <View style={styles.halfContainer2}>
        <View style={[styles.halfContainer, styles.textContainer]}>
          <Text style={styles.yesterday}>
            어제는 /{" "}
            <Text style={styles.yesterday}>
              {Math.round(yesterday.temp)}º /{" "}
            </Text>
            <Text style={styles.yesterday}>{yesterday.humidity}%</Text>
          </Text>
          <Text style={styles.tempDscription}>
            온도가{" "}
            {tempGap === 0
              ? "어제와 같아요"
              : tempGap > 0
              ? `어제보다 ${tempGap}도 높아요`
              : `어제보다 ${tempGap}도 낮아요`}
          </Text>
          <Text style={styles.humidityDscription}>
            습도가{" "}
            {humidGap === 0
              ? "어제와 같아요"
              : humidGap > 0
              ? `어제보다 ${humidGap}% 높아요`
              : `어제보다 ${-humidGap}% 낮아요`}
          </Text>
        </View> */}
        {/* </View> */}
      </View>
    </View>
  );
}

Weather.propTypes = {
  // today: PropTypes.object.isRequired,
  // yesterday: PropTypes.object.isRequired,
  // condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado","Clear","Clouds"]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tempandhumi: {
    color: "rgba(255, 255, 255, 1);",
    fontSize: 40,
    fontWeight: "400",
  },
  compare: {
    color: "rgba(255, 255, 255, 1);",
    fontSize: 20,
    fontWeight: "400",
  },
  condition: {
    color: "rgba(255, 255, 255, 1);",
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    color: "rgba(255, 255, 255, 1);",
    fontSize: 23,
    fontWeight: "500",
    paddingTop: 5,
  },

  halfContainer1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(80, 80, 80,0.6)",
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 20,
    // paddingTop: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  condiContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,

    // borderWidth: 2,
    // borderColor: "grey",
    // width: "50%",
    // height: "50%",
    // paddingBottom: 5,
    // paddingTop: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "50%",
    // height: "50%",

    // borderWidth: 2,
    // borderColor: "green",

    // padding: 5,
    // paddingBottom: 5,
    // paddingTop: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  leftCon: {
    flex: 2,

    // borderWidth: 2,
    // borderColor: "yellow",

    // paddingBottom: 23.2,
    // paddingTop: 23.2,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  RightCon: {
    flex: 4,

    // borderWidth: 2,
    // borderColor: "yellow",

    // paddingBottom: 23.2,
    // paddingTop: 23.2,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  discription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // paddingBottom: 6,
    // paddingTop: 6,
    // paddingLeft: 5,
    // paddingRight: 5,
    // borderWidth: 2,
    // borderColor: "red",
  },

  insider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4.5,
    paddingTop: 4.5,

    // paddingLeft: 5,
    // paddingRight: 5,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  halfContainer2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(80, 80, 80,0.6)",
    borderRadius: 15,
    marginTop: 25,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  vertical1: {
    width: "100%",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 5,

    // borderWidth: 1,
    // borderColor: "red",
  },
  vertical2: {
    width: "100%",
    flex: 10,
    paddingRight: 5,
    // paddingLeft: 5,

    // borderWidth: 1,
    // borderColor: "blue",
  },
});
