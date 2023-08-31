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
      fontSize="xl"
      justify="center"
      gap="6rem"
    >
      <Tooltip label="Sunrise">
        <Flex direction="column" align="center" justify="center" gap="1rem">
          <Icon as={WiSunrise} boxSize={36} />
          <Text fontSize="2xl">05:49 AM</Text>
        </Flex>
      </Tooltip>
      <Tooltip label="Sunrise">
        <Flex direction="column" align="center" justify="center" gap="1rem">
          <Icon as={WiSunset} boxSize={36} />
          <Text fontSize="2xl">08:50 PM</Text>
        </Flex>
      </Tooltip>
    </Flex>
  );
};

export default SunAndMoon;
