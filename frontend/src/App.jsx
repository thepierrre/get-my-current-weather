import { useContext, useState, useEffect } from "react";
import WeatherContext from "./context/weather-context";
import SearchBar from "./components/SearchBar/SearchBar";
import SettingsModal from "./components/settings/SettingsModal";
import SettingsButton from "./components/settings/SettingsButton";
import MainInformation from "./components/Weather/MainInformation/MainInformation";
import WeatherContextProvider from "./context/WeatherContextProvider";
import Default from "./components/Weather/MainInformation/Default";
import Footer from "./components/authorship/Footer";
import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { globalWeather, weatherIsFetched, setWeatherIsFetched } =
    useContext(WeatherContext);

  return (
    <WeatherContextProvider>
      <Box
        bg="linear-gradient(150deg, #4477CE, #CCEEBC)"
        w="100vw"
        padding="5rem 0 5rem 0 "
        h="100vh"
      >
        <SettingsButton onOpen={onOpen} />
        <Flex direction="column" align="center" gap="3rem">
          <SearchBar />
          {weatherIsFetched ? <MainInformation /> : <Default />}
          {/* <MainInformation /> */}
        </Flex>
        <SettingsModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </WeatherContextProvider>
  );
}

export default App;
