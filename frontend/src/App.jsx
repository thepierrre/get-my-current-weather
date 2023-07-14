import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import LongtermWeather from "./components/LongtermWeather/LongtermWeather";
import { useHttpClient } from "./hooks/http-hook";

import "./App.css";

function App() {
  const [currLocation, setCurrLocation] = useState({
    city: undefined,
    country: undefined,
  });
  const [enteredCity, setEnteredCity] = useState("");
  const [currWeather, setCurrWeather] = useState({
    city: "Munich, Germany",
    temp: "23",
    main: "Partly cloudy",
    wind: "13",
    humidity: "30",
    pressure: "1013",
    felt: "25",
    time: "2023-07-14 13:28",
  });
  const [longtermWeather, setLongtermWeather] = useState({
    todayPlus1: {
      day: "Saturday",
      temp: "24",
      main: "Partly cloudy",
    },
    todayPlus2: {
      day: "Sunday",
      temp: "24",
      main: "Sunny",
    },
    todayPlus3: {
      day: "Monday",
      temp: "28",
      main: "Thunderstorm",
    },
    todayPlus4: {
      day: "Tuesday",
      temp: "22",
      main: "Rainy",
    },
  });

  const { sendRequest } = useHttpClient();

  const currDay = new Date(currWeather.time).toLocaleString("en-US", {
    weekday: "long",
  });

  const currDate = new Date();
  const offsets = [1, 2, 3, 4];
  const weekdays = offsets.map((offset) => {
    const date = new Date(currDate.getTime());
    date.setDate(currDate.getDate() + offset);
    return date.toLocaleString("en-US", { weekday: "long" });
  });

  const cityInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const getLocation = async () => {
    try {
      const responseData = await sendRequest("http://localhost:5002/location");
      setCurrLocation({
        city: responseData.city,
        country: responseData.country_name,
      });
      console.log(currLocation);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeather = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5002/weather?city=${enteredCity}`,
        "GET",
        null,
        { "Content-Type": "application/json" }
      );
      console.log(responseData);
      setCurrWeather({
        city: responseData.request.query,
        temp: responseData.current.temperature,
        main: responseData.current.weather_descriptions[0],
        wind: responseData.current.wind_speed,
        humidity: responseData.current.humidity,
        pressure: responseData.current.pressure,
        felt: responseData.current.feelslike,
        time: responseData.location.localtime,
      });
      setLongtermWeather({
        todayPlus1: {
          temp: responseData.forecast.date.avgtemp,
          main: 2,
        },
        todayPlus2: {
          temp: 1,
          main: 2,
        },
        todayPlus3: {
          temp: 1,
          main: 2,
        },
        todayPlus4: {
          temp: 1,
          main: 2,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <SearchBar
        getWeather={getWeather}
        getLocation={getLocation}
        cityInputChangeHandler={cityInputChangeHandler}
        enteredCity={enteredCity}
        currLocation={currLocation}
      />
      <CurrentWeather currWeather={currWeather} />
      <LongtermWeather longtermWeather={longtermWeather} />
    </div>
  );
}

export default App;
