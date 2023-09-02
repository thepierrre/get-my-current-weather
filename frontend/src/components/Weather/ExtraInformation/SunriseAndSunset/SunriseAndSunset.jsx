import { useContext } from "react";
import WeatherContext from "../../../../context/weather-context";
import { DateTime } from "luxon";
import { Text, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { WiSunrise, WiSunset } from "react-icons/wi";

const SunriseAndSunset = () => {
  const { globalWeather } = useContext(WeatherContext);

  let sunrise = globalWeather.sun.sunrise;
  let sunset = globalWeather.sun.sunset;
  const timezone = globalWeather.timezone;

  sunrise = DateTime.fromSeconds(+sunrise, { zone: timezone })
    .toLocaleString({
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h12",
    })
    .replace(/(a|p)m/, (match) => match.toUpperCase());

  sunset = DateTime.fromSeconds(+sunset, { zone: timezone })
    .toLocaleString({
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h12",
    })
    .replace(/(a|p)m/, (match) => match.toUpperCase());

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
        <Text fontSize="2xl">{sunrise}</Text>
      </Flex>
      <Flex direction="column" align="center" justify="center" gap="1rem">
        <Text fontSize="4xl">Sunset</Text>
        <Icon as={WiSunset} boxSize={36} />
        <Text fontSize="2xl">{sunset}</Text>
      </Flex>
    </Flex>
  );
};

export default SunriseAndSunset;
