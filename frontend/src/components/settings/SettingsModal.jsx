import { useContext } from "react";
import WeatherContext from "../../context/weather-context";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

const SettingsModal = (props) => {
  const { isOpen, onClose } = props;
  const {
    globalWeather,
    tempUnits,
    setTempUnits,
    clockFormat,
    setClockFormat,
  } = useContext(WeatherContext);

  const setTempUnitsToCelsius = () => {
    setTempUnits("Celsius");
  };

  const setTempUnitsToFahrenheit = () => {
    setTempUnits("Fahrenheit");
  };

  const setClockFormatTo12 = () => {
    setClockFormat("12hours");
  };

  const setClockFormatTo24 = () => {
    setClockFormat("24hours");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        display="flex"
        gap="2rem"
        borderRadius="1.5rem"
        p={3}
        minWidth="45rem"
        color="#0A2647"
      >
        <ModalHeader textAlign="center" fontSize="2xl">
          Settings
        </ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Flex justify="center">
            <Flex direction="column" gap="2rem">
              <Flex gap="10rem">
                <Flex align="center" w="45%">
                  <Text fontSize="xl">Temperature</Text>
                </Flex>
                <Flex gap="1rem" w="55%">
                  <Button
                    w="8.5rem"
                    onClick={setTempUnitsToCelsius}
                    colorScheme={tempUnits === "Celsius" ? "blue" : undefined}
                  >
                    Celsius
                  </Button>
                  <Button
                    w="8.5rem"
                    onClick={setTempUnitsToFahrenheit}
                    colorScheme={
                      tempUnits === "Fahrenheit" ? "blue" : undefined
                    }
                  >
                    Fahrenheit
                  </Button>
                </Flex>
              </Flex>
              <Flex gap="3rem">
                <Flex align="center" w="45%">
                  <Text fontSize="xl">Clock</Text>
                </Flex>
                <Flex gap="1rem" w="55%">
                  <Button
                    w="8.5rem"
                    onClick={setClockFormatTo12}
                    colorScheme={clockFormat === "12hours" ? "blue" : undefined}
                  >
                    12 hours
                  </Button>
                  <Button
                    w="8.5rem"
                    onClick={setClockFormatTo24}
                    colorScheme={clockFormat === "24hours" ? "blue" : undefined}
                  >
                    24 hours
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
