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

  let hour = DateTime.fromSeconds(+date, { zone: timezone })
    .toLocaleString({
      hour: "numeric",
      hourCycle: "h12",
    })
    .replace(/(a|p)m/, (match) => match.toUpperCase());

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
