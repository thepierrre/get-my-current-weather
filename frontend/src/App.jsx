import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import LongtermWeather from "./components/LongtermWeather/LongtermWeather";
import { useHttpClient } from "./hooks/http-hook";

import "./App.css";

function App() {
  const { sendRequest } = useHttpClient();

  const getWeather = async () => {
    try {
      const responseData = await sendRequest(
        "http://localhost:5002/weather?city=Lisbon",
        "GET",
        null,
        { "Content-Type": "application/json" }
      );
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  // { "Content-Type": "application/json" }

  // useEffect(() => {
  //   const fetchLists = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         "http://localhost:5001/api/lists"
  //       );
  //       setLists(responseData.lists);
  //     } catch (err) {}
  //   };
  //   fetchLists();
  // }, [sendRequest]);

  return (
    <div className="app">
      <SearchBar getWeather={getWeather} />
      <CurrentWeather />
      <LongtermWeather />
    </div>
  );
}

export default App;
