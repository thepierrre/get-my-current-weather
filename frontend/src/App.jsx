import SearchBar from "./components/SearchBar/SearchBar";
import SettingsModal from "./components/settings/SettingsModal";
import SettingsButton from "./components/settings/SettingsButton";
import MainInformation from "./components/Weather/MainInformation/MainInformation";
import WeatherContextProvider from "./context/WeatherContextProvider";
import Footer from "./components/authorship/Footer";
import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <WeatherContextProvider>
      <Box
        bg="linear-gradient(150deg, #4477CE, #CCEEBC)"
        w="100vw"
        padding="3.5rem 2.5rem"
      >
        <SettingsButton onOpen={onOpen} />
        <Flex direction="column" align="center" gap="2rem">
          <SearchBar />
          <MainInformation />
        </Flex>
        <SettingsModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </WeatherContextProvider>
  );
}

export default App;
