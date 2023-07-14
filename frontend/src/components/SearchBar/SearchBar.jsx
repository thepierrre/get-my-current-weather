import Box from "@mui/material/Box";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./SearchBar.css";

const SearchBar = (props) => {
  const { getWeather, cityInputChangeHandler, enteredCity } = props;

  return (
    <div className="search-container">
      <Button variant="contained" disableElevation className="location-button">
        <LocationOnIcon sx={{ fill: "white" }} />
      </Button>
      <TextField
        className="search-bar"
        label="City name"
        style={{ background: "rgba(255, 255, 255)" }}
        onChange={cityInputChangeHandler}
      />

      <Button
        variant="contained"
        disableElevation
        className="search-button"
        value={enteredCity}
        onClick={getWeather}
      >
        Get My Weather!
      </Button>
    </div>
  );
};

export default SearchBar;
