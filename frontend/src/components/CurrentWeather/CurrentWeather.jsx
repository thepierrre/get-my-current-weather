import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const { currWeather } = props;

  const time = new Date(currWeather.time).toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="city-container">
      <div className="query">
        <h1>Munich, Germany</h1>
        <p>{time}</p>
      </div>
      <div className="current-weather-info">
        <div className="current-weather-info-image">
          <img src="https://cdn-icons-png.flaticon.com/512/3349/3349371.png" />
        </div>
        <div>
          <div className="current-weather-info__main">
            <p className="current-temperature">{currWeather.temp}°C</p>
            <p className="current-weather-description">{currWeather.main}</p>
            <div className="current-weather-info__additional">
              <div className="additional_1">
                <p>Wind: {currWeather.wind} km/h</p>
                <p>Humidity: {currWeather.humidity}%</p>
              </div>
              <div className="additional_2">
                <p>Pressure: {currWeather.pressure} hPa</p>
                <p>Feels like: {currWeather.felt}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
