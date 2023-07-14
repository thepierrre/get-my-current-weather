import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import LongtermWeather from "./components/LongtermWeather/LongtermWeather";
import { useHttpClient } from "./hooks/http-hook";

import "./App.css";

function App() {
  const [enteredCity, setEnteredCity] = useState("");
  const [currWeather, setCurrWeather] = useState({
    temp: undefined,
    main: undefined,
  });
  const { sendRequest } = useHttpClient();

  const cityInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const getWeather = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5002/weather?city=${enteredCity}`,
        "GET",
        null,
        { "Content-Type": "application/json" }
      );
      setCurrWeather({
        temp: responseData.main.temp,
        main: responseData.weather[0].main,
      });
      console.log(currWeather);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   getWeather();
  // }, [sendRequest]);

  return (
    <div className="app">
      <SearchBar
        getWeather={getWeather}
        cityInputChangeHandler={cityInputChangeHandler}
        enteredCity={enteredCity}
      />
      <CurrentWeather currWeather={currWeather} />
      <LongtermWeather />
    </div>
  );
}

export default App;
