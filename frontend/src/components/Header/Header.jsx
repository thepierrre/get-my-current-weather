import { useContext } from "react";
import WeatherContext from "../../context/weather-context";
import { Text, Box } from "@chakra-ui/react";

const Header = (props) => {
  const { time } = props;
  const { globalWeather } = useContext(WeatherContext);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="6xl" textAlign="center">
        {globalWeather.city.name}, {globalWeather.city.country}
      </Text>
      <Text fontSize="3xl">{time || "No one counts time in Dreamcity!"}</Text>
    </Box>
  );
};

export default Header;
