import "./City.css";

const City: React.FC = () => {
  return (
    <div className="city-container">
      <div>
        <h1>Munich, Germany</h1>
        <h2>23°C</h2>
      </div>
      <div>
        <h2>Image</h2>
      </div>
      <div>
        <p>Clear sky</p>
      </div>
      <div>
        <p>Tuesday, 4:20 PM</p>
      </div>
      <div>
        <span>Wind: 13 km/h</span>
        <span>Humidity: 30%</span>
        <span>Pressure: 1013 hPa</span>
        <span>Cloudiness: 15%</span>
      </div>
    </div>
  );
};

export default City;
