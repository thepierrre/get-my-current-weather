import { createContext } from "react";

const WeatherContext = createContext({
  isNight: undefined,
  setIsNight: () => {},
  enteredCity: undefined,
  setEnteredCity: () => {},
  globalWeather: undefined,
  setGlobalWeather: () => {},
  tempUnits: undefined,
  setTempUnits: () => {},
  clockFormat: undefined,
  setClockFormat: () => {},
  theme: undefined,
  setTheme: () => {},
  getCoordinatesForCityName: () => {},
  getCityNameForCoordinates: () => {},
  getWeatherForCoordinates: () => {},
  getWeatherForEnteredCity: () => {},
  getWeatherForCurrentLocation: () => {},
  cityInputChangeHandler: () => {},
  getLocalTime: () => {},
});

export default WeatherContext;
