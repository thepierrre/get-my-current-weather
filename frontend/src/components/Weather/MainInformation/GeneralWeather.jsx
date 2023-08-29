import { useEffect, useState } from "react";

import { Text, Box, Icon, Button } from "@chakra-ui/react";
import {
  WiFog,
  WiRain,
  WiSnow,
  WiMoonAltFull,
  WiDaySunny,
  WiCloudy,
  WiSunrise,
  WiSunset,
  WiThunderstorm,
  WiTornado,
  WiSmog,
  WiDust,
} from "react-icons/wi";

const GeneralWeather = (props) => {
  const { currWeather, setCurrWeather, sunrise, sunset, isNight } = props;
  const [tempUnit, setTempUnit] = useState(["Celsius"]);

  const celsiusSymbolColor = tempUnit === "Celsius" ? "#F1F1F1" : "#0A2647";
  const fahrenheitSymbolColor =
    tempUnit === "Fahrenheit" ? "#F1F1F1" : "#0A2647";

  let currTemp = currWeather.temp;
  let tempInFahrenheit;
  let tempInCelsius;

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

  let weatherIcon;
  switch (currWeather.main) {
    case "Clouds":
      weatherIcon = WiCloudy;
      break;
    case "Clear":
      if (isNight === false) {
        weatherIcon = WiDaySunny;
      } else {
        weatherIcon = WiMoonAltFull;
      }
      break;
    case "Snow":
      weatherIcon = WiSnow;
      break;
    case "Drizzle":
    case "Rain":
    case "Squall":
      weatherIcon = WiRain;
      break;
    case "Haze":
    case "Mist":
    case "Fog":
      weatherIcon = WiFog;
      break;
    case "Thunderstorm":
      imgSrc = WiThunderstorm;
      break;
    case "Tornado":
      weatherIcon = WiTornado;
      break;
    case "Smoke":
      weatherIcon = WiSmog;
      break;
    case "Dust":
    case "Sand":
    case "Ash":
      weatherIcon = WiDust;
      break;
    default:
      weatherIcon = WiDaySunny;
      break;
  }

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
        {/* <Box display="flex" flexDirection="column">
          <Icon as={WiSunrise} boxSize={20} />
          <Text fontSize="2xl">{sunrise}</Text>
        </Box> */}

        <Icon as={weatherIcon} boxSize={60} />
        {/* <Box display="flex" flexDirection="column">
          <Icon as={WiSunset} boxSize={20} />
          <Text fontSize="2xl">{sunset}</Text>
        </Box> */}
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" gap="2rem">
        <Text fontSize="6xl">
          <Box display="flex">
            <Text fontSize="6xl">{Math.floor(currWeather.temp || 24.0)}</Text>
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
        <Text fontSize="5xl">{currWeather.main || "Clear"}</Text>
      </Box>
    </Box>
  );
};

export default GeneralWeather;
