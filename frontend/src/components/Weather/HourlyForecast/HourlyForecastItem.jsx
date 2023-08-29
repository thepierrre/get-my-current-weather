import { Box, Text, Icon } from "@chakra-ui/react";
import { WiRain } from "react-icons/wi";

const HourlyForecastItem = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
    >
      <Text fontSize="2xl">1 hour</Text>
      <Icon as={WiRain} boxSize={20} />
      <Text>20°</Text>
    </Box>
  );
};

export default HourlyForecastItem;
