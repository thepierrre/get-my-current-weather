import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const HourlyForecastItem = (props) => {
  const { temp, main, date } = props;
  const { globalWeather } = useContext(WeatherContext);

  const weatherIcon = getWeatherIcon(main);

  const timezone = globalWeather.timezone;
  // const hour = DateTime.fromSeconds(+date).toLocaleString({
  //   hour: "2-digit",
  // });
  const hour = DateTime.fromSeconds(+date, { zone: timezone }).toLocaleString(
    DateTime.TIME_SIMPLE
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
    >
      <Text fontSize="2xl">{hour}</Text>
      <Icon as={weatherIcon} boxSize={20} />
      <Text>{temp}°</Text>
    </Box>
  );
};

export default HourlyForecastItem;
