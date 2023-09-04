import { useContext } from "react";
import WeatherContext from "../../../../context/weather-context";
import { DateTime } from "luxon";
import { Text, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

const SunAndMoon = () => {
  const { globalWeather, clockFormat, getLocalTime } =
    useContext(WeatherContext);

  const sunrise = globalWeather.sun.sunrise;
  const sunset = globalWeather.sun.sunset;
  const moonrise = globalWeather.dailyForecast.plus1.moonrise;
  const moonset = globalWeather.dailyForecast.plus1.moonset;

  const timezone = globalWeather.timezone;

  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="100%"
      h="10.5rem"
      borderRadius="1.5rem"
      p="1rem"
      justify="center"
      align="center"
      gap="1rem"
    >
      <Flex direction="column" gap="1rem">
        <Flex gap="1rem" align="center">
          <Icon as={WiSunrise} boxSize="60px" />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="sm">Sunrise</Text>
            <Text fontSize="md">{getLocalTime(sunrise, timezone)}</Text>
          </Flex>
        </Flex>
        <Flex gap="1rem" align="center">
          <Icon as={WiSunset} boxSize="60px" />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="sm">Sunset</Text>
            <Text fontSize="md">{getLocalTime(sunset, timezone)}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1rem">
        <Flex gap="1rem" align="center">
          <Icon as={WiMoonrise} boxSize="60px" />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="sm">Moonrise</Text>
            <Text fontSize="md">{getLocalTime(moonrise, timezone)}</Text>
          </Flex>
        </Flex>
        <Flex gap="1rem" align="center">
          <Icon as={WiMoonset} boxSize="60px" />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="sm">Moonset</Text>
            <Text fontSize="md">{getLocalTime(moonset, timezone)}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SunAndMoon;
