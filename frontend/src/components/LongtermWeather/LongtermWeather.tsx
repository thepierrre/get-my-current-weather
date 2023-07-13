import "./LongtermWeather.css";
import React from "react";

const LongtermWeather: React.FC = () => {
  return (
    <div className="additional-days-container">
      <div className="additional-day">
        <h3>Wednesday</h3>
        <p>25°C</p>
        <div className="longterm-weather-photo">
          <img src="https://cdn-icons-png.flaticon.com/512/3349/3349371.png" />
        </div>
        <p>Clear sky</p>
      </div>
      <div className="additional-day">
        <h3>Thursday</h3>
        <p>26°C</p>
        <div className="longterm-weather-photo">
          <img src="https://cdn-icons-png.flaticon.com/512/7512/7512517.png" />
        </div>
        <p>Raining</p>
      </div>
      <div className="additional-day">
        <h3>Friday</h3>
        <p>24°C</p>
        <div className="longterm-weather-photo">
          <img src="https://cdn-icons-png.flaticon.com/512/7512/7512491.png" />
        </div>
        <p>Cloudy</p>
      </div>
      <div className="additional-day">
        <h3>Saturday</h3>
        <p>27°C</p>
        <div className="longterm-weather-photo">
          <img src="https://cdn-icons-png.flaticon.com/512/7512/7512545.png" />
        </div>
        <p>Thunderstorm</p>
      </div>
    </div>
  );
};

export default LongtermWeather;
