import SunriseAndSunset from "./SunriseAndSunset/SunriseAndSunset";
import AirQuality from "./AirQuality/AirQuality";

import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";

const AdditionalInfo = () => {
  return (
    <Box w="78rem" display="flex" alignItems="center" gap="1.5rem">
      <SunriseAndSunset />
      <AirQuality />
    </Box>
  );
};

export default AdditionalInfo;
