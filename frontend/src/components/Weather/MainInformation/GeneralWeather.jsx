import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Text, Box, Icon, Flex, Button } from "@chakra-ui/react";

const GeneralWeather = () => {
  const { globalWeather, tempUnits } = useContext(WeatherContext);

  const main = globalWeather.weather.main;
  const temp =
    tempUnits === "Celsius"
      ? globalWeather.weather.celsiusTemp
      : globalWeather.weather.fahrenheitTemp;

  const weatherIcon = getWeatherIcon(globalWeather.weather.main);

  return (
    <Flex
      w="100%"
      bg="rgba(255, 255, 255, 0.2)"
      borderRadius="1.5rem"
      // h="25rem"
      padding={["0.5rem", "1rem"]}
      direction="column"
      align="center"
      justify="center"
    >
      <Flex align="center">
        <Icon as={weatherIcon} boxSize="140px" />
      </Flex>
      <Flex direction={["column", "row"]} align="center" gap={["0", "2rem"]}>
        <Box order={[2, 1]}>
          <Text fontSize={["6xl", "6xl"]}>{`${Math.floor(
            temp || 24.0
          )}°`}</Text>
        </Box>
        <Box order={[1, 2]}>
          <Text fontSize={["3xl", "6xl"]}>{main || "Clear"}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default GeneralWeather;
