import { useContext } from "react";
import WeatherContext from "../../../../context/weather-context";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const QualityChart = () => {
  const { globalWeather } = useContext(WeatherContext);

  const returnAirQuality = () => {
    const airQuality = globalWeather.airQuality.overall;
    if (airQuality === 1) {
      return "Very Good";
    }
    if (airQuality === 2) {
      return "Good";
    }
    if (airQuality === 3) {
      return "Moderate";
    }
    if (airQuality === 4) {
      return "Poor";
    }
    if (airQuality === 5) {
      return "Very Poor";
    }
  };

  return (
    <Box w="50%" display="flex" alignItems="center" justifyContent="flex-end">
      <Box w="13rem">
        <CircularProgress value={40} color="#55a875" size="12rem">
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Box>
  );
};

export default QualityChart;
