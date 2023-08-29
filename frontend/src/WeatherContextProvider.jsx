import { useState, useEffect } from "react";
import WeatherContext from "./context/weather-context";

const WeatherContextProvider = (props) => {
  const { children, sunrise, sunset } = props;
  const [isNight, setIsNight] = useState(undefined);

  useEffect(() => {
    // Calculate the current UTC time in seconds
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    // Check if it is night or day based on sunrise and sunset times
    if (currentTimeInSeconds > sunset || currentTimeInSeconds < sunrise) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [sunrise, sunset]);

  return (
    <WeatherContext.Provider value={{ isNight }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
