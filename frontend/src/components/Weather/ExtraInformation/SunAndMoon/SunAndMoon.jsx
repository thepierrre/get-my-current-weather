import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";
import {
  WiMoonrise,
  WiMoonset,
  WiSunrise,
  WiSunset,
  WiMoonAltWaningCrescent3,
} from "react-icons/wi";

const SunAndMoon = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="39rem"
      h="23rem"
      borderRadius="1.5rem"
      p="2rem"
      direction="column"
      fontSize="xl"
    >
      {/* <Flex justify="center" gap="2rem" w="100%">
        <Icon as={WiMoonAltWaningCrescent3} boxSize={20} />
        <Text>Waning Crescent</Text>
      </Flex> */}
      <Flex w="100%">
        <Flex direction="column" w="50%" align="center">
          <Flex align="center" justify="flex-end" gap="1rem">
            <Icon as={WiSunrise} boxSize={28} />
            <Text>05:49 AM</Text>
          </Flex>
          <Flex align="center" justify="flex-end" gap="1rem">
            <Icon as={WiSunset} boxSize={28} />
            <Text>08:50 PM</Text>
          </Flex>
        </Flex>
        <Flex direction="column" w="50%" align="center">
          <Flex align="center" justify="flex-start" gap="1rem">
            <Icon as={WiMoonrise} boxSize={28} />
            <Text>19:42 PM</Text>
          </Flex>
          <Flex align="center" justify="flex-start" gap="1rem">
            <Icon as={WiMoonset} boxSize={28} />
            <Text>03:20 PM</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center">
        <Icon as={WiMoonAltWaningCrescent3} boxSize={20} />
        <Text>Waning Crescent</Text>
      </Flex>
    </Flex>
  );
};

export default SunAndMoon;
