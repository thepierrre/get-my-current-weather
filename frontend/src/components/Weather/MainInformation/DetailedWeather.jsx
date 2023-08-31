import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import { Text, Box, Icon, Tooltip } from "@chakra-ui/react";
import { WiStrongWind, WiHumidity, WiBarometer, WiCloud } from "react-icons/wi";

const DetailedWeather = (props) => {
  const { globalWeather } = useContext(WeatherContext);
  const { currWeather } = props;
  return (
    <Box
      w="25rem"
      h="25rem"
      padding="2rem"
      bg="rgba(255, 255, 255, 0.2)"
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
        <Tooltip label="Wind speed">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" width="9rem" textAlign="center">
              {Math.floor(globalWeather.weather.wind || 2)} km/h
            </Text>
            <Box width="100%" textAlign="center">
              <Icon as={WiStrongWind} boxSize={20}></Icon>
            </Box>
          </Box>
        </Tooltip>
        <Tooltip label="Humidity">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" width="9rem" textAlign="center">
              {Math.floor(globalWeather.weather.humidity || 15)}%
            </Text>
            <Box width="100%" textAlign="center">
              <Icon as={WiHumidity} boxSize={20} />
            </Box>
          </Box>
        </Tooltip>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        gap="1.5rem"
        width="100%"
      >
        <Tooltip label="Air Pressure">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" width="9rem" textAlign="center">
              {Math.floor(globalWeather.weather.pressure || 1013)} hPa
            </Text>
            <Box width="100%" textAlign="center">
              <Icon as={WiBarometer} boxSize={20} />
            </Box>
          </Box>
        </Tooltip>
        <Tooltip label="Cloudiness">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" width="9rem" textAlign="center">
              {Math.floor(globalWeather.weather.cloudiness || 5)}%
            </Text>
            <Box width="100%" textAlign="center">
              <Icon as={WiCloud} boxSize={20} />
            </Box>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default DetailedWeather;
