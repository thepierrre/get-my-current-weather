import { useContext } from "react";
import Clock from "react-live-clock";
import WeatherContext from "../../context/weather-context";
import { Text, Box } from "@chakra-ui/react";

const Header = (props) => {
  const { time } = props;
  const { globalWeather } = useContext(WeatherContext);

  const currTime = globalWeather.currTime;
  const timezone = globalWeather.timezone;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="6xl" textAlign="center">
        {globalWeather.city.name}, {globalWeather.city.country}
      </Text>
      <Text fontSize="3xl">
        <Clock format={"HH:mm:ss"} ticking={true} timezone={timezone} />
      </Text>
    </Box>
  );
};

export default Header;
