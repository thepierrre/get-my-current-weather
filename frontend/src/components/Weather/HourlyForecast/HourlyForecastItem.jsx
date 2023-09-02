import { useContext } from "react";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Box, Text, Icon } from "@chakra-ui/react";

const HourlyForecastItem = (props) => {
  const { celsiusTemp, fahrenheitTemp, main, date } = props;
  const { globalWeather, tempUnits, clockFormat } = useContext(WeatherContext);

  const convertedTemp = tempUnits === "Celsius" ? celsiusTemp : fahrenheitTemp;

  const weatherIcon = getWeatherIcon(main);

  const timezone = globalWeather.timezone;

  // let hour = DateTime.fromSeconds(+date, { zone: timezone })
  //   .toLocaleString({
  //     hour: "numeric",
  //     hourCycle: "h12",
  //   })
  //   .replace(/(a|p)m/, (match) => match.toUpperCase());

  const format = clockFormat === "12hours" ? "h a" : "H:mm";

  let time = DateTime.fromSeconds(+date, {
    zone: timezone,
  }).toFormat(format);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
    >
      <Text fontSize="2xl">{time}</Text>
      <Icon as={weatherIcon} boxSize={20} />
      <Text>{convertedTemp}°</Text>
    </Box>
  );
};

export default HourlyForecastItem;
