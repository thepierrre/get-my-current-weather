import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Text, Box, Icon, Button } from "@chakra-ui/react";

const GeneralWeather = () => {
  const { globalWeather, tempUnits } = useContext(WeatherContext);

  const main = globalWeather.weather.main;
  const temp =
    tempUnits === "Celsius"
      ? globalWeather.weather.celsiusTemp
      : globalWeather.weather.fahrenheitTemp;

  const weatherIcon = getWeatherIcon(globalWeather.weather.main);

  return (
    <Box
      w="25rem"
      bg="rgba(255, 255, 255, 0.2)"
      borderRadius="1.5rem"
      h="25rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Icon as={weatherIcon} boxSize={60} />
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap="2rem">
        <Box>
          <Text fontSize="6xl">{`${Math.floor(temp || 24.0)}°`}</Text>
        </Box>
        <Text fontSize="5xl">{main || "Clear"}</Text>
      </Box>
    </Box>
  );
};

export default GeneralWeather;
