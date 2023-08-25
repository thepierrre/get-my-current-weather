import { Text, Box, Icon, Button } from "@chakra-ui/react";
import { WiCloudy, WiSunrise, WiSunset } from "react-icons/wi";

const MainWeatherInfo = (props) => {
  const { currWeather, sunrise, sunset } = props;
  return (
    <Box
      w="37%"
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="1.5rem"
      h="25rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Box display="flex" flexDirection="column">
          <Icon as={WiSunrise} boxSize={20} />
          <Text fontSize="2xl">{sunrise}</Text>
        </Box>

        <Icon as={WiCloudy} boxSize={60} />
        <Box display="flex" flexDirection="column">
          <Icon as={WiSunset} boxSize={20} />
          <Text fontSize="2xl">{sunset}</Text>
        </Box>
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
        </Text>
        <Text fontSize="5xl">{currWeather.main || "Clear"}</Text>
      </Box>
    </Box>
  );
};

export default MainWeatherInfo;
