import { createContext } from "react";

const WeatherContext = createContext({
  isNight: undefined,
  setIsNight: () => {},
  enteredCity: undefined,
  setEnteredCity: () => {},
  // chartLevel: undefined,
  // setChartLevel: () => {},
  globalWeather: undefined,
  setGlobalWeather: () => {},
  getCoordinatesForCityName: () => {},
  getCityNameForCoordinates: () => {},
  getWeatherForCoordinates: () => {},
  getWeatherForEnteredCity: () => {},
  getWeatherForCurrentLocation: () => {},
  cityInputChangeHandler: () => {},
});

export default WeatherContext;
