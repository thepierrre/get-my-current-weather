import { useContext } from "react";
import WeatherContext from "../../../../context/weather-context";
import { DateTime } from "luxon";
import { Text, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { WiSunrise, WiSunset } from "react-icons/wi";

const SunriseAndSunset = () => {
  const { globalWeather, clockFormat, getLocalTime } =
    useContext(WeatherContext);

  let sunrise = globalWeather.sun.sunrise;
  let sunset = globalWeather.sun.sunset;
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
      gap="6rem"
    >
      <Flex direction="column" align="center" justify="center" gap="1rem">
        <Text fontSize="4xl">Sunrise</Text>
        <Icon as={WiSunrise} boxSize={36} />
        <Text fontSize="2xl">{getLocalTime(sunrise, timezone)}</Text>
      </Flex>
      <Flex direction="column" align="center" justify="center" gap="1rem">
        <Text fontSize="4xl">Sunset</Text>
        <Icon as={WiSunset} boxSize={36} />
        <Text fontSize="2xl">{getLocalTime(sunrise, timezone)}</Text>
      </Flex>
    </Flex>
  );
};

export default SunriseAndSunset;
