import { useState } from "react";
import axios from "../axiosInstance";
import globalWeatherState from "./globalWeatherState";
import WeatherContext from "./weather-context";
// import {
//   WiFog,
//   WiRain,
//   WiSnow,
//   WiDaySunny,
//   WiCloudy,
//   WiThunderstorm,
//   WiTornado,
//   WiSmog,
//   WiDust,
// } from "react-icons/wi";

const WeatherContextProvider = (props) => {
  const { children, sunrise, sunset } = props;
  const [isNight, setIsNight] = useState(undefined);
  const [enteredCity, setEnteredCity] = useState("");
  const [globalWeather, setGlobalWeather] = useState(globalWeatherState);

  // useEffect(() => {
  //   // Calculate the current UTC time in seconds
  //   const currentTimeInSeconds = Math.floor(Date.now() / 1000);

  //   // Check if it is night or day based on sunrise and sunset times
  //   if (currentTimeInSeconds > sunset || currentTimeInSeconds < sunrise) {
  //     setIsNight(true);
  //   } else {
  //     setIsNight(false);
  //   }
  // }, [sunrise, sunset]);

  let lat, lon;
  let cityName, countryCode;

  const getCoordinatesForCityName = async () => {
    const city = enteredCity;
    try {
      const response = await axios.get(`coordinates?city=${city}`);
      lat = response.data[0].lat;
      lon = response.data[0].lon;
      cityName = response.data[0].name;
      countryCode = response.data[0].country;
      setGlobalWeather((prevState) => {
        return {
          ...prevState,
          city: {
            name: cityName,
            country: countryCode,
          },
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getCityNameForCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(`city?lat=${lat}&lon=${lon}`);
      const cityName = response.data[0].name;
      const countryCode = response.data[0].country;
      setEnteredCity(`${cityName}, ${countryCode}`);
      setGlobalWeather((prevState) => {
        return {
          ...prevState,
          city: {
            name: cityName,
            country: countryCode,
          },
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherForCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(`combined-data?lat=${lat}&lon=${lon}`);
      const currentWeatherData = response.data.weather.current;
      const airQuality = response.data.airQuality.list[0];
      const hourlyWeatherData = response.data.weather.hourly;
      const dailyWeatherData = response.data.weather.daily;
      setGlobalWeather((prevState) => {
        return {
          ...prevState,
          weather: {
            main: currentWeatherData.weather[0].main,
            temp: currentWeatherData.temp,
            wind: currentWeatherData.wind_speed,
            humidity: currentWeatherData.humidity,
            pressure: currentWeatherData.pressure,
            cloudiness: currentWeatherData.clouds,
            uvIndex: currentWeatherData.uvi,
          },
          sun: {
            sunrise: undefined,
            sunset: undefined,
          },
          airQuality: {
            overall: airQuality.main.aqi,
            components: {
              co: airQuality.components.co,
              so2: airQuality.components.so2,
              no2: airQuality.components.no2,
              o3: airQuality.components.o3,
              pm2_5: airQuality.components.pm2_5,
            },
          },
          hourlyForecast: {
            plus1: {
              main: hourlyWeatherData[0].weather[0].main,
              temp: hourlyWeatherData[0].temp,
            },
            plus2: {
              main: hourlyWeatherData[1].weather[0].main,
              temp: hourlyWeatherData[1].temp,
            },
            plus3: {
              main: hourlyWeatherData[2].weather[0].main,
              temp: hourlyWeatherData[2].temp,
            },
            plus4: {
              main: hourlyWeatherData[3].weather[0].main,
              temp: hourlyWeatherData[3].temp,
            },
            plus5: {
              main: hourlyWeatherData[4].weather[0].main,
              temp: hourlyWeatherData[4].temp,
            },
            plus6: {
              main: hourlyWeatherData[5].weather[0].main,
              temp: hourlyWeatherData[5].temp,
            },
            plus7: {
              main: hourlyWeatherData[6].weather[0].main,
              temp: hourlyWeatherData[6].temp,
            },
            plus8: {
              main: hourlyWeatherData[7].weather[0].maind,
              temp: hourlyWeatherData[7].temp,
            },
            plus9: {
              main: hourlyWeatherData[8].weather[0].main,
              temp: hourlyWeatherData[8].temp,
            },
            plus10: {
              main: hourlyWeatherData[9].weather[0].main,
              temp: hourlyWeatherData[9].temp,
            },
            plus11: {
              main: hourlyWeatherData[10].weather[0].main,
              temp: hourlyWeatherData[10].temp,
            },
            plus12: {
              main: hourlyWeatherData[11].weather[0].main,
              temp: hourlyWeatherData[11].temp,
            },
            plus13: {
              main: hourlyWeatherData[12].weather[0].main,
              temp: hourlyWeatherData[12].temp,
            },
            plus14: {
              main: hourlyWeatherData[13].weather[0].main,
              temp: hourlyWeatherData[13].temp,
            },
            plus15: {
              main: hourlyWeatherData[14].weather[0].main,
              temp: hourlyWeatherData[14].temp,
            },
            plus16: {
              main: hourlyWeatherData[15].weather[0].main,
              temp: hourlyWeatherData[15].temp,
            },
            plus17: {
              main: hourlyWeatherData[16].weather[0].main,
              temp: hourlyWeatherData[16].temp,
            },
            plus18: {
              main: hourlyWeatherData[17].weather[0].main,
              temp: hourlyWeatherData[17].temp,
            },
            plus19: {
              main: hourlyWeatherData[18].weather[0].main,
              temp: hourlyWeatherData[18].temp,
            },
            plus20: {
              main: hourlyWeatherData[19].weather[0].main,
              temp: hourlyWeatherData[19].temp,
            },
            plus31: {
              main: hourlyWeatherData[20].weather[0].main,
              temp: hourlyWeatherData[20].temp,
            },
            plus22: {
              main: hourlyWeatherData[21].weather[0].main,
              temp: hourlyWeatherData[21].temp,
            },
            plus23: {
              main: hourlyWeatherData[22].weather[0].main,
              temp: hourlyWeatherData[22].temp,
            },
            plus24: {
              main: hourlyWeatherData[23].weather[0].main,
              temp: hourlyWeatherData[23].temp,
            },
          },
          dailyForecast: {
            plus1: {
              main: dailyWeatherData[0].weather[0].main,
              temp: dailyWeatherData[0].temp.day,
            },
            plus2: {
              main: dailyWeatherData[1].weather[0].main,
              temp: dailyWeatherData[1].temp.day,
            },
            plus3: {
              main: dailyWeatherData[2].weather[0].main,
              temp: dailyWeatherData[2].temp.day,
            },
            plus4: {
              main: dailyWeatherData[3].weather[0].main,
              temp: dailyWeatherData[3].temp.day,
            },
            plus5: {
              main: dailyWeatherData[4].weather[0].main,
              temp: dailyWeatherData[4].temp.day,
            },
            plus6: {
              main: dailyWeatherData[5].weather[0].main,
              temp: dailyWeatherData[5].temp.day,
            },
            plus7: {
              main: dailyWeatherData[6].weather[0].main,
              temp: dailyWeatherData[6].temp.day,
            },
            plus8: {
              main: dailyWeatherData[7].weather[0].main,
              temp: dailyWeatherData[7].temp.day,
            },
          },
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherForEnteredCity = async () => {
    await getCoordinatesForCityName();
    setEnteredCity(`${cityName}, ${countryCode}`);
    getWeatherForCoordinates(lat, lon);
  };

  const getWeatherForCurrentLocation = async () => {
    setEnteredCity("Fetching my location...");
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getCityNameForCoordinates(lat, lon);
      getWeatherForCoordinates(lat, lon);
    });
  };

  // let weatherIcon;

  // switch (globalWeather.weather.main) {
  //   case "Clouds":
  //     weatherIcon = WiCloudy;
  //     break;
  //   case "Clear":
  //     // if (isNight === false) {
  //     //   weatherIcon = WiDaySunny;
  //     // } else {
  //     //   weatherIcon = WiMoonAltFull;
  //     // }
  //     weatherIcon = WiDaySunny;
  //     break;
  //   case "Snow":
  //     weatherIcon = WiSnow;
  //     break;
  //   case "Drizzle":
  //   case "Rain":
  //   case "Squall":
  //     weatherIcon = WiRain;
  //     break;
  //   case "Haze":
  //   case "Mist":
  //   case "Fog":
  //     weatherIcon = WiFog;
  //     break;
  //   case "Thunderstorm":
  //     imgSrc = WiThunderstorm;
  //     break;
  //   case "Tornado":
  //     weatherIcon = WiTornado;
  //     break;
  //   case "Smoke":
  //     weatherIcon = WiSmog;
  //     break;
  //   case "Dust":
  //   case "Sand":
  //   case "Ash":
  //     weatherIcon = WiDust;
  //     break;
  //   default:
  //     weatherIcon = WiDaySunny;
  //     break;
  // }

  return (
    <WeatherContext.Provider
      value={{
        globalWeather,
        setGlobalWeather,
        getWeatherForCurrentLocation,
        getWeatherForEnteredCity,
        enteredCity,
        setEnteredCity,
        // weatherIcon,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
