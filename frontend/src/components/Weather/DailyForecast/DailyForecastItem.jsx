import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const DailyForecastItem = (props) => {
  const { main, temp, date } = props;

  const weatherIcon = getWeatherIcon(main);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
      w="20%"
    >
      <Text fontSize="3xl">{date}</Text>
      <Icon as={weatherIcon} boxSize={40} />
      <Text fontSize="2xl">{temp}°</Text>
    </Box>
  );
};

export default DailyForecastItem;
