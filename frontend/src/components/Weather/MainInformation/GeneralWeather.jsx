import { useContext, useState } from "react";
import WeatherContext from "../../../context/weather-context";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Text, Box, Icon, Button } from "@chakra-ui/react";

const GeneralWeather = (props) => {
  const { currWeather, setCurrWeather, sunrise, sunset, isNight } = props;
  const { globalWeather } = useContext(WeatherContext);
  const [tempUnit, setTempUnit] = useState(["Celsius"]);
  const celsiusSymbolColor = tempUnit === "Celsius" ? "#F1F1F1" : "#0A2647";
  const fahrenheitSymbolColor =
    tempUnit === "Fahrenheit" ? "#F1F1F1" : "#0A2647";

  let currTemp = currWeather.temp;
  let tempInFahrenheit;
  let tempInCelsius;

  const weatherIcon = getWeatherIcon(globalWeather.weather.main);

  const convertToFahrenheit = () => {
    if (!currTemp) {
      currTemp = 75;
      setCurrWeather((prevWeather) => ({
        ...prevWeather,
        temp: currTemp,
      }));
      return;
    }
    tempInFahrenheit = Math.round((currTemp * 9) / 5 + 32);
    console.log(tempInFahrenheit);
    setCurrWeather((prevWeather) => ({
      ...prevWeather,
      temp: tempInFahrenheit,
    }));
  };

  const convertToCelsius = () => {
    console.log(currTemp);
    tempInCelsius = Math.round((currTemp - 32) * (5 / 9));
    console.log(tempInCelsius);
    setCurrWeather((prevWeather) => ({
      ...prevWeather,
      temp: tempInCelsius,
    }));
  };

  const setToCelsius = () => {
    if (tempUnit === "Celsius") {
      return;
    }
    setTempUnit("Celsius");
    convertToCelsius();
  };

  const setToFahrenheit = () => {
    if (tempUnit === "Fahrenheit") {
      return;
    }
    setTempUnit("Fahrenheit");
    convertToFahrenheit();
  };

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
        <Text fontSize="6xl">
          <Box display="flex">
            <Text fontSize="6xl">
              {Math.floor(globalWeather.weather.temp || 24.0)}
            </Text>
            <Text fontSize="2xl" marginTop="0.75rem">
              °
            </Text>
            <Button
              variant="ghost"
              fontSize="2xl"
              marginTop="0.75rem"
              padding="0"
              color={celsiusSymbolColor}
              _hover={{ color: "rgb(241, 241, 241)" }}
              _active={{ bg: "none", fontSize: "3xl" }}
              onClick={setToCelsius}
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
              color={fahrenheitSymbolColor}
              _hover={{ color: "rgb(241, 241, 241)" }}
              _active={{ bg: "none", fontSize: "3xl" }}
              onClick={setToFahrenheit}
            >
              F
            </Button>
          </Box>
        </Text>
        <Text fontSize="5xl">{globalWeather.weather.main || "Clear"}</Text>
      </Box>
    </Box>
  );
};

export default GeneralWeather;
