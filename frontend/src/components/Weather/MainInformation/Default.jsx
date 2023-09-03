import { Flex, Text, Icon, Button, useTheme } from "@chakra-ui/react";
import { WiDaySunnyOvercast } from "react-icons/wi";

const defaultCities = [
  "Lisbon",
  "San Francisco",
  "Cairo",
  "Buenos Aires",
  "Sydney",
  "Jakarta",
];

const cityButtons = defaultCities.map((city) => (
  <Button bg="white" color="#0A264" _hover={{ bg: "#2C5282", color: "white" }}>
    {city}
  </Button>
));

const Default = () => {
  return (
    <Flex direction="column" color="#0A2647">
      <Flex align="center" h="20rem" gap="2rem">
        <Text align="center" fontSize="4xl">
          Enter a city
          <br /> or fetch your location
          <br /> to get weather!
        </Text>
        <Icon as={WiDaySunnyOvercast} boxSize={300} />
      </Flex>
      <Flex direction="column" gap="2rem">
        <Text fontSize="4xl" textAlign="center">
          ... or simply choose one:
        </Text>
        <Flex direction="column" gap="0.5rem">
          {cityButtons}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Default;
