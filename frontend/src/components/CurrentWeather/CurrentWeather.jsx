import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const { currWeather } = props;

  return (
    <div className="city-container">
      <div className="city-name">
        <h1>Munich, Germany</h1>
      </div>
      <div className="current-weather-info">
        <div className="current-weather-info-image">
          <img src="https://cdn-icons-png.flaticon.com/512/3349/3349371.png" />
        </div>
        <div className="current-weather-info__main">
          <span className="current-temperature">{currWeather.temp}°C</span>
          <span className="current-weather-description">
            {currWeather.main}
          </span>
          {/* <span className="current-date">9 July, 2023</span> */}
        </div>
        {/* <div className="current-weather-info__additional">
          <span>Wind: 13 km/h</span>
          <span>Humidity: 30%</span>
          <span>Pressure: 1013 hPa</span>
          <span>Cloudiness: 15%</span>
        </div> */}
      </div>
    </div>
  );
};

export default CurrentWeather;
