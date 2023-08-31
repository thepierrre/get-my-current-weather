import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import globalWeatherState from "./globalWeatherState";
import WeatherContext from "./weather-context";

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

  return (
    <WeatherContext.Provider
      value={{
        globalWeather,
        setGlobalWeather,
        getWeatherForCurrentLocation,
        getWeatherForEnteredCity,
        enteredCity,
        setEnteredCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
