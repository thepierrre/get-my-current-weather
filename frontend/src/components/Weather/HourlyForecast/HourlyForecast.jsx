import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import HourlyForecastItem from "./HourlyForecastItem";
import { Flex } from "@chakra-ui/react";

const HourlyForecast = () => {
  const { globalWeather } = useContext(WeatherContext);

  const forecast = globalWeather.hourlyForecast;

  const forecastItems = Object.keys(forecast).map((day) => (
    <HourlyForecastItem
      key={day}
      temp={forecast[day].temp}
      main={forecast[day].main}
    />
  ));

  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="78rem"
      h="10rem"
      borderRadius="1.5rem"
      padding="1rem"
      align="center"
      overflowX="scroll"
      overflowY="hidden"
      gap="1.5rem"
    >
      {forecastItems}
    </Flex>
  );
};

export default HourlyForecast;
