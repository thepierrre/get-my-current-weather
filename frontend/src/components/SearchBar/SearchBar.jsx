import { useContext } from "react";
import WeatherContext from "../../context/weather-context";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Tooltip,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { CiLocationOn, CiSearch } from "react-icons/ci";

// import "./SearchBar.css";

const SearchBar = (props) => {
  const {
    getWeather,
    getLocation,
    getCoordinatesForCityName,
    getWeatherForCoordinates,
    getCityNameForCoordinates,
  } = props;

  const cityInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const {
    getWeatherForCurrentLocation,
    getWeatherForEnteredCity,
    enteredCity,
    setEnteredCity,
  } = useContext(WeatherContext);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     getWeather();
  //   }
  // };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement height="100%" width="3rem">
          <Tooltip label="Fetch weather for my location">
            <IconButton variant="link" onClick={getWeatherForCurrentLocation}>
              <Icon as={CiLocationOn} boxSize={7} color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputLeftElement>
        <Input
          placeholder="Enter a city name"
          width="45rem"
          background="white"
          borderRadius="1.5rem"
          value={enteredCity}
          onChange={cityInputChangeHandler}
          // onKeyDown={handleKeyDown}
        />
        <InputRightElement height="100%" width="3rem">
          <Tooltip label="Fetch weather for entered city">
            <IconButton
              variant="link"
              // onClick={getWeather}
              onClick={getWeatherForEnteredCity}
            >
              <Icon as={CiSearch} boxSize={7} color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
