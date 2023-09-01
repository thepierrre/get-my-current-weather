import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const DailyForecastItem = (props) => {
  const { main, temp, date } = props;
  const { globalWeather } = useContext(WeatherContext);

  const weatherIcon = getWeatherIcon(main);

  const timezone = globalWeather.timezone;

  let day = DateTime.fromSeconds(+date, { zone: timezone }).weekdayLong;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
      w="20%"
    >
      <Text fontSize="3xl">{day}</Text>
      <Icon as={weatherIcon} boxSize={40} />
      <Text fontSize="2xl">{temp}°</Text>
    </Box>
  );
};

export default DailyForecastItem;
