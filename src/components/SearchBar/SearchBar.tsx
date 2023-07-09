import Box from "@mui/material/Box";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="searchbar"
          label="City name"
          focused
          style={{ background: "rgba(255, 255, 255)" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
