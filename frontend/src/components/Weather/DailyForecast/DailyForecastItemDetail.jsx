import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";

import {
  WiSunrise,
  WiSunset,
  WiMoonrise,
  WiMoonset,
  WiMoonNew,
  WiDaySunny,
  WiNightClear,
} from "react-icons/wi";

const DailyForecastItemDetail = (props) => {
  const { onClose, weatherIcon } = props;

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="1.5rem" color="#0A2647">
        <ModalHeader textAlign="center">Wednesday, 10 September</ModalHeader>
        <ModalCloseButton />
        <ModalBody color="inherit">
          <Flex direction="column" gap="2rem">
            <Flex direction="column" align="center">
              <Icon as={weatherIcon} boxSize={40} />
              <Text fontSize="3xl">Clear</Text>
              <Flex align="center" gap="0.5rem">
                <Icon as={WiNightClear} boxSize={8} />
                <Text fontSize="2xl">11° / 23°</Text>
                <Icon as={WiDaySunny} boxSize={8} />
              </Flex>
            </Flex>
            <Flex direction="column" align="center" gap="2rem">
              <Flex direction="column">
                <Text>Precipitation probability: 20%</Text>
                <Flex direction="column" align="center" gap="0.5rem">
                  <Text>Moonphase: New Moon</Text>
                  <Icon as={WiMoonNew} boxSize={8} />
                </Flex>
              </Flex>
              <Flex justify="center" gap="2rem">
                <Flex direction="column">
                  <Text>Sunrise: 6:14 AM</Text>
                  <Text>Sunset: 8:20 PM</Text>
                </Flex>
                <Flex direction="column">
                  <Text>Moonrise: 5:18 PM</Text>
                  <Text>Moonset 2:35 AM</Text>
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

export default DailyForecastItemDetail;
