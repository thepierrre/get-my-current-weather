import QualityChart from "./QualityChart";
import QualityDetails from "./QualityDetails";
import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const AirQuality = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="39rem"
      h="23rem"
      borderRadius="1.5rem"
      direction="column"
      justify="center"
      align="center"
      gap="1rem"
    >
      <Text as="h2" fontSize="4xl">
        Air Quality
      </Text>
      <Flex gap="1rem" w="100%">
        <QualityChart />
        <QualityDetails />
      </Flex>
    </Flex>
  );
};

export default AirQuality;
