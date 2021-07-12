import React, {useContext} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

import {UserContext} from "../context";
import ForecastHour from "./ForecastHour";

export default function Weather() {
  const context = useContext(UserContext);

  const weatherD = context.weatherD;
  const yesterdayD = context.yesterdayD;

  const icon =
    "uri:`http://openweathermap.org/img/wn/${weatherD.current.weather[0].icon}@2x.png`";

  const tempGap = Math.round(weatherD.current.temp - yesterdayD.current.temp);

  const humidGap = Math.round(
    weatherD.current.humidity - yesterdayD.current.humidity
  );

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
                      fontSize: 15,
                      marginRight: 10,
                    })
                  }
                >
                  {"습도 "}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tempandhumi: {
    color: "rgba(255, 255, 255, 1);",

    fontSize: 30,
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

    backgroundColor: "rgba(10, 10, 10,0.5)",
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 20,
  },
  condiContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: "60%",
    height: "50%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
    // borderColor: "green",
    shadowColor: "black",
    elevation: 0,

    marginTop: 12,

    backgroundColor: "rgba(255, 255, 255,0.5)",
  },
  leftCon: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  RightCon: {
    flex: 4,
  },
  discription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  insider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 4.5,
    paddingTop: 4.5,
  },
  halfContainer2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(10, 10, 10,0.5)",

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
  },
  vertical2: {
    width: "100%",
    flex: 10,
    paddingRight: 5,
  },
});
