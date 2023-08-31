import DailyForecastItem from "./DailyForecastItem";
import { Flex } from "@chakra-ui/react";

const DailyForecast = () => {
  return (
    <Flex
      bg="rgba(255, 255, 255, 0.2)"
      w="78rem"
      h="18rem"
      borderRadius="1.5rem"
      align="center"
      overflowX="scroll"
      overflowY="hidden"
    >
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
    </Flex>
  );
};

export default DailyForecast;
