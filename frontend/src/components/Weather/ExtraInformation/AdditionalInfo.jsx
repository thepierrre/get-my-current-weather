import SunAndMoon from "./SunAndMoon/SunAndMoon";
import AirQuality from "./AirQuality/AirQuality";

import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";

const AdditionalInfo = () => {
  return (
    <Flex w="100%" direction={["column", "row"]} align="center" gap="1.5rem">
      <SunAndMoon />
      <AirQuality />
    </Flex>
  );
};

export default AdditionalInfo;
