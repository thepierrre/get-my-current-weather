import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const HourlyForecastItem = (props) => {
  const { celsiusTemp, fahrenheitTemp, main, date } = props;
  const { globalWeather, tempUnits, getLocalTime } = useContext(WeatherContext);

  const convertedTemp = tempUnits === "Celsius" ? celsiusTemp : fahrenheitTemp;

  const weatherIcon = getWeatherIcon(main);

  const timezone = globalWeather.timezone;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
      minWidth="6.5rem"
    >
      <Text fontSize="2xl">{getLocalTime(date, timezone)}</Text>
      <Icon as={weatherIcon} boxSize={20} />
      <Text>{convertedTemp}°</Text>
    </Box>
  );
};

export default HourlyForecastItem;
