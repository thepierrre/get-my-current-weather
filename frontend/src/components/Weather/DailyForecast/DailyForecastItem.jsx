import { Box, Text, Icon } from "@chakra-ui/react";
import { WiCloudy } from "react-icons/wi";

const DailyForecastItem = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="1rem"
      w="20%"
    >
      <Text fontSize="3xl">Monday</Text>
      <Icon as={WiCloudy} boxSize={40} />
      <Text fontSize="2xl">23°</Text>
    </Box>
  );
};

export default DailyForecastItem;
