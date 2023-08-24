// import { InputAdornment, TextField, IconButton } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SearchIcon from "@mui/icons-material/Search";

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
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import "./SearchBar.css";

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
          <Tooltip label="Get my location">
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
            <IconButton variant="link">
              <Icon as={CiSearch} boxSize={7} size="lg" color="#0A2647" />
            </IconButton>
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );

  //       //   endAdornment: (
  //       //     <InputAdornment position="end">
  //       //       <Tooltip title="Get weather">
  //       //         <IconButton onClick={getWeather}>
  //       //           <SearchIcon color="primary" />
  //       //         </IconButton>
  //       //       </Tooltip>
  //       //     </InputAdornment>
  //       //   ),
  //       // }}
  //     />
  //     {/* <InputRightElement
  //       onClick={getLocation}
  //       children={
  //         <IconButton
  //           color="gray.300"
  //           backgroundColor="white"
  //           icon={<SearchIcon />}
  //         />
  //       }
  //       size="lg"
  //     /> */}
  //   {/* </InputGroup> */}
  // </div>
};

export default SearchBar;
