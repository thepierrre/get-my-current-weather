import HourlyForecastItem from "./HourlyForecastItem";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { WiRain } from "react-icons/wi";

const HourlyForecast = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="78rem"
      h="10rem"
      borderRadius="1.5rem"
      padding="1rem"
      align="center"
      overflowX="scroll"
      overflowY="hidden"
      gap="1.5rem"
    >
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
      <HourlyForecastItem />
    </Flex>
  );
};

export default HourlyForecast;
