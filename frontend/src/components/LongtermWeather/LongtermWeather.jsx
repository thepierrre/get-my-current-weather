import "./LongtermWeather.css";
import React from "react";

const LongtermWeather = (props) => {
  const { longtermWeather } = props;

  const days = Object.keys(longtermWeather).map((key) => {
    const dayWeather = longtermWeather[key];

    return (
      <div className="additional-day" key={key}>
        <h3>{dayWeather.day}</h3>
        <p>{dayWeather.temp}°C</p>
        <div className="longterm-weather-photo">
          <img src="https://cdn-icons-png.flaticon.com/512/3349/3349371.png" />
        </div>
        <p>{dayWeather.main}</p>
      </div>
    );
  });

  return <div className="additional-days-container">{days}</div>;
};

export default LongtermWeather;
