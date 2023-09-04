import QualityChart from "./QualityChart";
import QualityDetails from "./QualityDetails";
import { Text, Flex } from "@chakra-ui/react";

const AirQuality = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="100%"
      // h="23rem"
      borderRadius="1.5rem"
      direction="column"
      justify="center"
      align="center"
      gap="2rem"
      padding="1rem"
    >
      <Text as="h2" fontSize="3xl">
        Air Quality
      </Text>
      <Flex
        gap="1.5rem"
        direction={["column", "row"]}
        align="center"
        justify="center"
        w="100%"
      >
        <QualityChart />
        <QualityDetails />
      </Flex>
    </Flex>
  );
};

export default AirQuality;
