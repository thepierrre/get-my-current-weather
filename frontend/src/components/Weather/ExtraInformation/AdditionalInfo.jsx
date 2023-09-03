import SunAndMoon from "./SunAndMoon/SunAndMoon";
import AirQuality from "./AirQuality/AirQuality";

import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";

const AdditionalInfo = () => {
  return (
    <Box w="78rem" display="flex" alignItems="center" gap="1.5rem">
      <SunAndMoon />
      <AirQuality />
    </Box>
  );
};

export default AdditionalInfo;
