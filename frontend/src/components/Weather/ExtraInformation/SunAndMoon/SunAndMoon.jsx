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
      w="39rem"
      h="23rem"
      borderRadius="1.5rem"
      p="2rem"
      fontSize="xl"
      justify="center"
      align="center"
      gap="4rem"
    >
      <Flex direction="column" gap="1.5rem">
        <Flex gap="1rem" align="center">
          <Icon as={WiSunrise} boxSize={20} />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl">Sunrise</Text>
            <Text fontSize="2xl">{getLocalTime(sunrise, timezone)}</Text>
          </Flex>
        </Flex>
        <Flex gap="1rem" align="center">
          <Icon as={WiSunset} boxSize={20} />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl">Sunset</Text>
            <Text fontSize="2xl">{getLocalTime(sunset, timezone)}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.5rem">
        <Flex gap="1rem" align="center">
          <Icon as={WiMoonrise} boxSize={20} />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl">Moonrise</Text>
            <Text fontSize="2xl">{getLocalTime(moonrise, timezone)}</Text>
          </Flex>
        </Flex>
        <Flex gap="1rem" align="center">
          <Icon as={WiMoonset} boxSize={20} />
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl">Moonset</Text>
            <Text fontSize="2xl">{getLocalTime(moonset, timezone)}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SunAndMoon;
