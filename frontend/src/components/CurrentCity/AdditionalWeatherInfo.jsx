import { Text, Box, Icon } from "@chakra-ui/react";

import { WiStrongWind, WiHumidity, WiBarometer, WiCloud } from "react-icons/wi";

const AdditionalWeatherInfo = (props) => {
  const { currWeather } = props;
  return (
    <Box
      w="30%"
      h="25rem"
      padding="2rem"
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="1.5rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        gap="1.5rem"
        width="100%"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="4xl" width="9rem" textAlign="center">
            {Math.floor(currWeather.wind || 2)} km/h
          </Text>
          <Box width="100%" textAlign="center">
            <Icon as={WiStrongWind} boxSize={20} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="4xl" width="9rem" textAlign="center">
            {Math.floor(currWeather.humidity || 15)}%
          </Text>
          <Box width="100%" textAlign="center">
            <Icon as={WiHumidity} boxSize={20} />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        gap="1.5rem"
        width="100%"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="4xl" width="9rem" textAlign="center">
            {Math.floor(currWeather.pressure || 1013)} hPa
          </Text>
          <Box width="100%" textAlign="center">
            <Icon as={WiBarometer} boxSize={20} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text fontSize="4xl" width="9rem" textAlign="center">
            {Math.floor(currWeather.cloudiness || 5)}%
          </Text>
          <Box width="100%" textAlign="center">
            <Icon as={WiCloud} boxSize={20} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalWeatherInfo;
