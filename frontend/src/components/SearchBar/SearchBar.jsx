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
    cityInputChangeHandler,
    enteredCity,
    getCoordinatesForCityName,
    getWeatherForCoordinates,
    getWeatherForEnteredCity,
    getWeatherForCurrentLocation,
    getCityNameForCoordinates,
  } = props;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getWeather();
    }
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement height="100%" width="3rem">
          <Tooltip label="Fetch weather for my location">
            <IconButton
              variant="link"
              // onClick={getLocation}
              // onClick={getWeatherForCurrentLocation}
              onClick={getWeatherForCurrentLocation}
            >
              <Icon as={CiLocationOn} boxSize={7} size="lg" color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputLeftElement>
        <Input
          placeholder="Enter a city name"
          size="lg"
          width="45rem"
          background="white"
          borderRadius="1.5rem"
          value={enteredCity}
          onChange={cityInputChangeHandler}
          onKeyDown={handleKeyDown}
        />
        <InputRightElement height="100%" width="3rem">
          <Tooltip label="Fetch weather for entered city">
            <IconButton
              variant="link"
              // onClick={getWeather}
              onClick={getWeatherForEnteredCity}
            >
              <Icon as={CiSearch} boxSize={7} size="lg" color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
