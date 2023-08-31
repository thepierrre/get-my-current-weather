import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const HourlyForecastItem = (props) => {
  const { temp, main } = props;

  const weatherIcon = getWeatherIcon(main);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
    >
      <Text fontSize="2xl">1 hour</Text>
      <Icon as={weatherIcon} boxSize={20} />
      <Text>{temp}°</Text>
    </Box>
  );
};

export default HourlyForecastItem;
