import DailyForecastItem from "./DailyForecastItem";
import { Box } from "@chakra-ui/react";

const DailyForecast = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.2)"
      w="78rem"
      h="18rem"
      borderRadius="1.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
    </Box>
  );
};

export default DailyForecast;
