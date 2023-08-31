import { useContext } from "react";
import WeatherContext from "../../../../context/weather-context";
import { Text, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { WiSunrise, WiSunset } from "react-icons/wi";

const SunriseAndSunset = () => {
  const { globalWeather } = useContext(WeatherContext);

  const sunrise = globalWeather.sun.sunrise;
  const sunset = globalWeather.sun.sunset;

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
      <Tooltip label="Sunrise">
        <Flex direction="column" align="center" justify="center" gap="1rem">
          <Icon as={WiSunrise} boxSize={36} />
          <Text fontSize="2xl">{sunrise}</Text>
        </Flex>
      </Tooltip>
      <Tooltip label="Sunrise">
        <Flex direction="column" align="center" justify="center" gap="1rem">
          <Icon as={WiSunset} boxSize={36} />
          <Text fontSize="2xl">{sunset}</Text>
        </Flex>
      </Tooltip>
    </Flex>
  );
};

export default SunriseAndSunset;
