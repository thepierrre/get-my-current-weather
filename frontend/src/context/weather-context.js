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
  getCoordinatesForCityName: () => {},
  getCityNameForCoordinates: () => {},
  getWeatherForCoordinates: () => {},
  getWeatherForEnteredCity: () => {},
  getWeatherForCurrentLocation: () => {},
  cityInputChangeHandler: () => {},
});

export default WeatherContext;
