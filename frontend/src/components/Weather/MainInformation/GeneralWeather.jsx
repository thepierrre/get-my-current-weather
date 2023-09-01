import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Text, Box, Icon, Button } from "@chakra-ui/react";

const GeneralWeather = () => {
  const { globalWeather } = useContext(WeatherContext);

  const main = globalWeather.weather.main;
  const temp = globalWeather.weather.temp;

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
          <Box display="flex">
            <Text fontSize="6xl">{Math.floor(temp || 24.0)}</Text>
            <Text fontSize="2xl" marginTop="0.75rem">
              °
            </Text>
            <Button
              variant="ghost"
              fontSize="2xl"
              marginTop="0.75rem"
              padding="0"
              _hover={{ color: "rgb(241, 241, 241)" }}
              _active={{ bg: "none", fontSize: "3xl" }}
            >
              C
            </Button>
            <Text fontSize="2xl" marginTop="0.75rem">
              {"|"}
            </Text>
            <Button
              variant="ghost"
              fontSize="2xl"
              marginTop="0.75rem"
              padding="0"
              _hover={{ color: "rgb(241, 241, 241)" }}
              _active={{ bg: "none", fontSize: "3xl" }}
            >
              F
            </Button>
          </Box>
        </Box>
        <Text fontSize="5xl">{main || "Clear"}</Text>
      </Box>
    </Box>
  );
};

export default GeneralWeather;
