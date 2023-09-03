import { useContext } from "react";
import WeatherContext from "../../context/weather-context";
import { DateTime } from "luxon";
import { Text, Box } from "@chakra-ui/react";

const Header = () => {
  const { globalWeather, clockFormat, getLocalTime } =
    useContext(WeatherContext);

  const timezone = globalWeather.timezone;
  const currTime = globalWeather.currTime;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="6xl" textAlign="center">
        {globalWeather.city.name}, {globalWeather.city.country}
      </Text>
      <Text fontSize="4xl">{getLocalTime(currTime, timezone)}</Text>
    </Box>
  );
};

export default Header;
