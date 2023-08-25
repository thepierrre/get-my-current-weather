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
  const { getWeather, getLocation, cityInputChangeHandler, enteredCity } =
    props;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getWeather();
    }
  };

  return (
    <Box>
      <InputGroup>
        <InputLeftElement height="100%" width="3rem">
          <Tooltip label="Fetch my location">
            <IconButton variant="link" onClick={getLocation}>
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
          <Tooltip label="Search for the city">
            <IconButton variant="link" onClick={getWeather}>
              <Icon as={CiSearch} boxSize={7} size="lg" color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
