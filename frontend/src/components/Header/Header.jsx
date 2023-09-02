import { useContext } from "react";
import WeatherContext from "../../context/weather-context";
import { DateTime } from "luxon";
import { Text, Box } from "@chakra-ui/react";

const Header = () => {
  const { globalWeather, clockFormat } = useContext(WeatherContext);

  const timezone = globalWeather.timezone;
  // const time = DateTime.fromSeconds(+globalWeather.currTime, {
  //   zone: timezone,
  // }).toLocaleString(
  //   DateTime.TIME_SIMPLE
  //   // hour: "numeric",
  //   // minute: "numeric",
  //   // hourCycle: "h12",
  // );
  // // .replace(/(a|p)m/, (match) => match.toUpperCase());

  const format = clockFormat === "12hours" ? "hh:mm a" : "HH:mm";

  const time = DateTime.fromSeconds(+globalWeather.currTime, {
    zone: timezone,
  }).toFormat(format);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="6xl" textAlign="center">
        {globalWeather.city.name}, {globalWeather.city.country}
      </Text>
      <Text fontSize="3xl">{time}</Text>
    </Box>
  );
};

export default Header;
