import { useState } from "react";
import axios from "../axiosInstance";
import { countries } from "country-data";
import globalWeatherState from "./globalWeatherState";
import WeatherContext from "./weather-context";

const WeatherContextProvider = (props) => {
  const { children } = props;
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
            country: countries[countryCode].name,
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
      setEnteredCity(`${cityName}, ${countries[countryCode].name}`);
      setGlobalWeather((prevState) => {
        return {
          ...prevState,
          city: {
            name: cityName,
            country: countries[countryCode].name,
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
      const timezone = response.data.weather.timezone;

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
          currTime: currentWeatherData.dt,
          timezone,
          sun: {
            sunrise: currentWeatherData.sunrise,
            sunset: currentWeatherData.sunset,
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
              date: hourlyWeatherData[0].dt,
            },
            plus2: {
              main: hourlyWeatherData[1].weather[0].main,
              temp: hourlyWeatherData[1].temp,
              date: hourlyWeatherData[1].dt,
            },
            plus3: {
              main: hourlyWeatherData[2].weather[0].main,
              temp: hourlyWeatherData[2].temp,
              date: hourlyWeatherData[2].dt,
            },
            plus4: {
              main: hourlyWeatherData[3].weather[0].main,
              temp: hourlyWeatherData[3].temp,
              date: hourlyWeatherData[3].dt,
            },
            plus5: {
              main: hourlyWeatherData[4].weather[0].main,
              temp: hourlyWeatherData[4].temp,
              date: hourlyWeatherData[4].dt,
            },
            plus6: {
              main: hourlyWeatherData[5].weather[0].main,
              temp: hourlyWeatherData[5].temp,
              date: hourlyWeatherData[5].dt,
            },
            plus7: {
              main: hourlyWeatherData[6].weather[0].main,
              temp: hourlyWeatherData[6].temp,
              date: hourlyWeatherData[6].dt,
            },
            plus8: {
              main: hourlyWeatherData[7].weather[0].maind,
              temp: hourlyWeatherData[7].temp,
              date: hourlyWeatherData[7].dt,
            },
            plus9: {
              main: hourlyWeatherData[8].weather[0].main,
              temp: hourlyWeatherData[8].temp,
              date: hourlyWeatherData[8].dt,
            },
            plus10: {
              main: hourlyWeatherData[9].weather[0].main,
              temp: hourlyWeatherData[9].temp,
              date: hourlyWeatherData[9].dt,
            },
            plus11: {
              main: hourlyWeatherData[10].weather[0].main,
              temp: hourlyWeatherData[10].temp,
              date: hourlyWeatherData[10].dt,
            },
            plus12: {
              main: hourlyWeatherData[11].weather[0].main,
              temp: hourlyWeatherData[11].temp,
              date: hourlyWeatherData[11].dt,
            },
            plus13: {
              main: hourlyWeatherData[12].weather[0].main,
              temp: hourlyWeatherData[12].temp,
              date: hourlyWeatherData[12].dt,
            },
            plus14: {
              main: hourlyWeatherData[13].weather[0].main,
              temp: hourlyWeatherData[13].temp,
              date: hourlyWeatherData[13].dt,
            },
            plus15: {
              main: hourlyWeatherData[14].weather[0].main,
              temp: hourlyWeatherData[14].temp,
              date: hourlyWeatherData[14].dt,
            },
            plus16: {
              main: hourlyWeatherData[15].weather[0].main,
              temp: hourlyWeatherData[15].temp,
              date: hourlyWeatherData[15].dt,
            },
            plus17: {
              main: hourlyWeatherData[16].weather[0].main,
              temp: hourlyWeatherData[16].temp,
              date: hourlyWeatherData[16].dt,
            },
            plus18: {
              main: hourlyWeatherData[17].weather[0].main,
              temp: hourlyWeatherData[17].temp,
              date: hourlyWeatherData[17].dt,
            },
            plus19: {
              main: hourlyWeatherData[18].weather[0].main,
              temp: hourlyWeatherData[18].temp,
              date: hourlyWeatherData[18].dt,
            },
            plus20: {
              main: hourlyWeatherData[19].weather[0].main,
              temp: hourlyWeatherData[19].temp,
              date: hourlyWeatherData[19].dt,
            },
            plus31: {
              main: hourlyWeatherData[20].weather[0].main,
              temp: hourlyWeatherData[20].temp,
              date: hourlyWeatherData[20].dt,
            },
            plus22: {
              main: hourlyWeatherData[21].weather[0].main,
              temp: hourlyWeatherData[21].temp,
              date: hourlyWeatherData[21].dt,
            },
            plus23: {
              main: hourlyWeatherData[22].weather[0].main,
              temp: hourlyWeatherData[22].temp,
              date: hourlyWeatherData[22].dt,
            },
            plus24: {
              main: hourlyWeatherData[23].weather[0].main,
              temp: hourlyWeatherData[23].temp,
              date: hourlyWeatherData[23].dt,
            },
          },
          dailyForecast: {
            plus1: {
              main: dailyWeatherData[0].weather[0].main,
              temp: dailyWeatherData[0].temp.day,
              date: dailyWeatherData[0].dt,
            },
            plus2: {
              main: dailyWeatherData[1].weather[0].main,
              temp: dailyWeatherData[1].temp.day,
              date: dailyWeatherData[1].dt,
            },
            plus3: {
              main: dailyWeatherData[2].weather[0].main,
              temp: dailyWeatherData[2].temp.day,
              date: dailyWeatherData[2].dt,
            },
            plus4: {
              main: dailyWeatherData[3].weather[0].main,
              temp: dailyWeatherData[3].temp.day,
              date: dailyWeatherData[3].dt,
            },
            plus5: {
              main: dailyWeatherData[4].weather[0].main,
              temp: dailyWeatherData[4].temp.day,
              date: dailyWeatherData[4].dt,
            },
            plus6: {
              main: dailyWeatherData[5].weather[0].main,
              temp: dailyWeatherData[5].temp.day,
              date: dailyWeatherData[5].dt,
            },
            plus7: {
              main: dailyWeatherData[6].weather[0].main,
              temp: dailyWeatherData[6].temp.day,
              date: dailyWeatherData[6].dt,
            },
            plus8: {
              main: dailyWeatherData[7].weather[0].main,
              temp: dailyWeatherData[7].temp.day,
              date: dailyWeatherData[7].dt,
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
    setEnteredCity(`${cityName}, ${countries[countryCode].name}`);
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
