import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { DateTime } from "luxon";
import { countries } from "country-data";
import globalWeatherState from "./globalWeatherState";
import WeatherContext from "./weather-context";

const WeatherContextProvider = (props) => {
  const { children } = props;
  const [enteredCity, setEnteredCity] = useState("");
  const [tempUnits, setTempUnits] = useState("Celsius");
  const [clockFormat, setClockFormat] = useState("12hours");
  const [globalWeather, setGlobalWeather] = useState(globalWeatherState);
  const [weatherIsFetched, setWeatherIsFetched] = useState(false);
  const [clickedCity, setClickedCity] = useState(undefined);

  let lat, lon;
  let cityName, countryCode;

  const getCelsiusTemp = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15);
  };

  const getFahrenheitTemp = (kelvinTemp) => {
    return Math.round(((kelvinTemp - 273.15) * 9) / 5 + 32);
  };

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
        // ["day" + i]:
        return {
          ...prevState,
          isNight:
            currentWeatherData.dt > currentWeatherData.sunset ||
            currentWeatherData.dt < currentWeatherData.sunrise
              ? true
              : false,
          weather: {
            main: currentWeatherData.weather[0].main,
            temp: currentWeatherData.temp,
            celsiusTemp: getCelsiusTemp(currentWeatherData.temp),
            fahrenheitTemp: getFahrenheitTemp(currentWeatherData.temp),
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
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[0].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[0].temp),
              date: hourlyWeatherData[0].dt,
            },
            plus2: {
              main: hourlyWeatherData[1].weather[0].main,
              temp: hourlyWeatherData[1].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[1].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[1].temp),
              date: hourlyWeatherData[1].dt,
            },
            plus3: {
              main: hourlyWeatherData[2].weather[0].main,
              temp: hourlyWeatherData[2].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[2].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[2].temp),
              date: hourlyWeatherData[2].dt,
            },
            plus4: {
              main: hourlyWeatherData[3].weather[0].main,
              temp: hourlyWeatherData[3].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[3].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[3].temp),
              date: hourlyWeatherData[3].dt,
            },
            plus5: {
              main: hourlyWeatherData[4].weather[0].main,
              temp: hourlyWeatherData[4].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[4].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[4].temp),
              date: hourlyWeatherData[4].dt,
            },
            plus6: {
              main: hourlyWeatherData[5].weather[0].main,
              temp: hourlyWeatherData[5].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[5].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[5].temp),
              date: hourlyWeatherData[5].dt,
            },
            plus7: {
              main: hourlyWeatherData[6].weather[0].main,
              temp: hourlyWeatherData[6].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[6].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[6].temp),
              date: hourlyWeatherData[6].dt,
            },
            plus8: {
              main: hourlyWeatherData[7].weather[0].maind,
              temp: hourlyWeatherData[7].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[7].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[7].temp),
              date: hourlyWeatherData[7].dt,
            },
            plus9: {
              main: hourlyWeatherData[8].weather[0].main,
              temp: hourlyWeatherData[8].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[8].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[8].temp),
              date: hourlyWeatherData[8].dt,
            },
            plus10: {
              main: hourlyWeatherData[9].weather[0].main,
              temp: hourlyWeatherData[9].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[9].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[9].temp),
              date: hourlyWeatherData[9].dt,
            },
            plus11: {
              main: hourlyWeatherData[10].weather[0].main,
              temp: hourlyWeatherData[10].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[10].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[10].temp),
              date: hourlyWeatherData[10].dt,
            },
            plus12: {
              main: hourlyWeatherData[11].weather[0].main,
              temp: hourlyWeatherData[11].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[11].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[11].temp),
              date: hourlyWeatherData[11].dt,
            },
            plus13: {
              main: hourlyWeatherData[12].weather[0].main,
              temp: hourlyWeatherData[12].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[12].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[12].temp),
              date: hourlyWeatherData[12].dt,
            },
            plus14: {
              main: hourlyWeatherData[13].weather[0].main,
              temp: hourlyWeatherData[13].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[13].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[13].temp),
              date: hourlyWeatherData[13].dt,
            },
            plus15: {
              main: hourlyWeatherData[14].weather[0].main,
              temp: hourlyWeatherData[14].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[14].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[14].temp),
              date: hourlyWeatherData[14].dt,
            },
            plus16: {
              main: hourlyWeatherData[15].weather[0].main,
              temp: hourlyWeatherData[15].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[15].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[15].temp),
              date: hourlyWeatherData[15].dt,
            },
            plus17: {
              main: hourlyWeatherData[16].weather[0].main,
              temp: hourlyWeatherData[16].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[16].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[16].temp),
              date: hourlyWeatherData[16].dt,
            },
            plus18: {
              main: hourlyWeatherData[17].weather[0].main,
              temp: hourlyWeatherData[17].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[17].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[17].temp),
              date: hourlyWeatherData[17].dt,
            },
            plus19: {
              main: hourlyWeatherData[18].weather[0].main,
              temp: hourlyWeatherData[18].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[18].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[18].temp),
              date: hourlyWeatherData[18].dt,
            },
            plus20: {
              main: hourlyWeatherData[19].weather[0].main,
              temp: hourlyWeatherData[19].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[19].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[19].temp),
              date: hourlyWeatherData[19].dt,
            },
            plus31: {
              main: hourlyWeatherData[20].weather[0].main,
              temp: hourlyWeatherData[20].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[20].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[20].temp),
              date: hourlyWeatherData[20].dt,
            },
            plus22: {
              main: hourlyWeatherData[21].weather[0].main,
              temp: hourlyWeatherData[21].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[21].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[21].temp),
              date: hourlyWeatherData[21].dt,
            },
            plus23: {
              main: hourlyWeatherData[22].weather[0].main,
              temp: hourlyWeatherData[22].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[22].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[22].temp),
              date: hourlyWeatherData[22].dt,
            },
            plus24: {
              main: hourlyWeatherData[23].weather[0].main,
              temp: hourlyWeatherData[23].temp,
              celsiusTemp: getCelsiusTemp(hourlyWeatherData[23].temp),
              fahrenheitTemp: getFahrenheitTemp(hourlyWeatherData[23].temp),
              date: hourlyWeatherData[23].dt,
            },
          },
          dailyForecast: {
            plus1: {
              main: dailyWeatherData[0].weather[0].main,
              precipProb: dailyWeatherData[0].pop,
              temp: dailyWeatherData[0].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[0].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[0].temp.day),
              nightTemp: dailyWeatherData[0].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[0].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[0].temp.night
              ),
              sunrise: dailyWeatherData[0].sunrise,
              sunset: dailyWeatherData[0].sunset,
              moonrise: dailyWeatherData[0].moonrise,
              moonset: dailyWeatherData[0].moonset,
              moonPhase: dailyWeatherData[0].moon_phase,
              date: dailyWeatherData[0].dt,
            },
            plus2: {
              main: dailyWeatherData[1].weather[0].main,
              precipProb: dailyWeatherData[1].pop,
              temp: dailyWeatherData[1].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[1].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[1].temp.day),
              nightTemp: dailyWeatherData[1].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[1].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[1].temp.night
              ),
              sunrise: dailyWeatherData[1].sunrise,
              sunset: dailyWeatherData[1].sunset,
              moonrise: dailyWeatherData[1].moonrise,
              moonset: dailyWeatherData[1].moonset,
              moonPhase: dailyWeatherData[1].moon_phase,
              date: dailyWeatherData[1].dt,
            },
            plus3: {
              main: dailyWeatherData[2].weather[0].main,
              precipProb: dailyWeatherData[2].pop,
              temp: dailyWeatherData[2].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[2].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[2].temp.day),
              nightTemp: dailyWeatherData[2].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[2].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[2].temp.night
              ),
              sunrise: dailyWeatherData[2].sunrise,
              sunset: dailyWeatherData[2].sunset,
              moonrise: dailyWeatherData[2].moonrise,
              moonset: dailyWeatherData[2].moonset,
              moonPhase: dailyWeatherData[2].moon_phase,
              date: dailyWeatherData[2].dt,
            },
            plus4: {
              main: dailyWeatherData[3].weather[0].main,
              precipProb: dailyWeatherData[3].pop,
              temp: dailyWeatherData[3].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[3].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[3].temp.day),
              nightTemp: dailyWeatherData[3].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[3].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[3].temp.night
              ),
              sunrise: dailyWeatherData[3].sunrise,
              sunset: dailyWeatherData[3].sunset,
              moonrise: dailyWeatherData[3].moonrise,
              moonset: dailyWeatherData[3].moonset,
              moonPhase: dailyWeatherData[3].moon_phase,
              date: dailyWeatherData[3].dt,
            },
            plus5: {
              main: dailyWeatherData[4].weather[0].main,
              precipProb: dailyWeatherData[4].pop,
              temp: dailyWeatherData[4].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[4].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[4].temp.day),
              nightTemp: dailyWeatherData[4].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[4].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[4].temp.night
              ),
              sunrise: dailyWeatherData[4].sunrise,
              sunset: dailyWeatherData[4].sunset,
              moonrise: dailyWeatherData[4].moonrise,
              moonset: dailyWeatherData[4].moonset,
              moonPhase: dailyWeatherData[4].moon_phase,
              date: dailyWeatherData[4].dt,
            },
            plus6: {
              main: dailyWeatherData[5].weather[0].main,
              precipProb: dailyWeatherData[5].pop,
              temp: dailyWeatherData[5].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[5].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[5].temp.day),
              nightTemp: dailyWeatherData[5].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[5].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[5].temp.night
              ),
              sunrise: dailyWeatherData[5].sunrise,
              sunset: dailyWeatherData[5].sunset,
              moonrise: dailyWeatherData[5].moonrise,
              moonset: dailyWeatherData[5].moonset,
              moonPhase: dailyWeatherData[5].moon_phase,
              date: dailyWeatherData[5].dt,
            },
            plus7: {
              main: dailyWeatherData[6].weather[0].main,
              precipProb: dailyWeatherData[6].pop,
              temp: dailyWeatherData[6].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[6].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[6].temp.day),
              nightTemp: dailyWeatherData[6].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[6].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[6].temp.night
              ),
              sunrise: dailyWeatherData[6].sunrise,
              sunset: dailyWeatherData[6].sunset,
              moonrise: dailyWeatherData[6].moonrise,
              moonset: dailyWeatherData[6].moonset,
              moonPhase: dailyWeatherData[6].moon_phase,
              date: dailyWeatherData[6].dt,
            },
            plus8: {
              main: dailyWeatherData[7].weather[0].main,
              precipProb: dailyWeatherData[7].pop,
              temp: dailyWeatherData[7].temp.day,
              celsiusTemp: getCelsiusTemp(dailyWeatherData[7].temp.day),
              fahrenheitTemp: getFahrenheitTemp(dailyWeatherData[7].temp.day),
              nightTemp: dailyWeatherData[7].temp.night,
              celsiusNightTemp: getCelsiusTemp(dailyWeatherData[7].temp.night),
              fahrenheitNightTemp: getFahrenheitTemp(
                dailyWeatherData[7].temp.night
              ),
              sunrise: dailyWeatherData[7].sunrise,
              sunset: dailyWeatherData[7].sunset,
              moonrise: dailyWeatherData[7].moonrise,
              moonset: dailyWeatherData[7].moonset,
              moonPhase: dailyWeatherData[7].moon_phase,
              date: dailyWeatherData[7].dt,
            },
          },
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getLocalTime = (timeInSeconds, timezone) => {
    const format = clockFormat === "12hours" ? "h:mm a" : "H:mm";
    const time = DateTime.fromSeconds(+timeInSeconds, {
      zone: timezone,
    }).toFormat(format);

    return time;
  };

  const getWeatherForEnteredCity = async () => {
    await getCoordinatesForCityName();
    setEnteredCity(`${cityName}, ${countries[countryCode].name}`);
    await getWeatherForCoordinates(lat, lon);
    setWeatherIsFetched(true);
  };

  const getWeatherForCurrentLocation = async () => {
    setEnteredCity("Fetching my location...");
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getCityNameForCoordinates(lat, lon);
      getWeatherForCoordinates(lat, lon);
      setWeatherIsFetched(true);
    });
  };

  const getWeatherForClickedCity = async (city) => {
    setEnteredCity(city);
    setClickedCity(city);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await getCoordinatesForCityName();
      setEnteredCity(`${cityName}, ${countries[countryCode].name}`);
      await getWeatherForCoordinates(lat, lon);
      setWeatherIsFetched(true);
    };

    if (enteredCity) {
      fetchWeather();
    }
  }, [clickedCity]);

  return (
    <WeatherContext.Provider
      value={{
        globalWeather,
        setGlobalWeather,
        getWeatherForCurrentLocation,
        getWeatherForEnteredCity,
        enteredCity,
        setEnteredCity,
        tempUnits,
        setTempUnits,
        clockFormat,
        setClockFormat,
        getLocalTime,
        getWeatherForClickedCity,
        weatherIsFetched,
        setWeatherIsFetched,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
