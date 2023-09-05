import { createContext } from "react";

const WeatherContext = createContext({
  // isNight: undefined,
  // setIsNight: () => {},
  enteredCity: undefined,
  setEnteredCity: () => {},
  globalWeather: undefined,
  setGlobalWeather: () => {},
  tempUnits: undefined,
  clickedCity: undefined,
  setClickedCity: () => {},
  setTempUnits: () => {},
  clockFormat: undefined,
  setClockFormat: () => {},
  weatherIsFetched: undefined,
  setWeatherIsFetched: () => {},
  getCoordinatesForCityName: () => {},
  getCityNameForCoordinates: () => {},
  getWeatherForCoordinates: () => {},
  getWeatherForEnteredCity: () => {},
  getWeatherForCurrentLocation: () => {},
  cityInputChangeHandler: () => {},
  getLocalTime: () => {},
  getWeatherForClickedCity: () => {},
});

export default WeatherContext;
