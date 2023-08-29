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
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherForCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(`combined-data?lat=${lat}&lon=${lon}`);
      console.log(response.data);
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
        globalWeatherState,
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
