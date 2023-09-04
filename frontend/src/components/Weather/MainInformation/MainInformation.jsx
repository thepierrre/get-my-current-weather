import Header from "../../Header/Header";
import DetailedWeather from "./DetailedWeather";
import GeneralWeather from "./GeneralWeather";
import UVIndex from "./UVIndex";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AdditionalInfo from "../ExtraInformation/AdditionalInfo";
import { Flex, Box } from "@chakra-ui/react";

const MainInformation = () => {
  return (
    <>
      <Flex
        color="#0A2647"
        direction="column"
        gap="3rem"
        w={[360, 400, 600, 700]}
      >
        <Header />
        <Flex direction="column" gap={["1rem", "1.5rem"]} w="100%">
          <HourlyForecast />
          <Flex
            direction={["column", "row"]}
            justify="center"
            align="center"
            gap={["1rem", "1.5rem"]}
            w="100%"
          >
            <Box order={[2, 1]} w="100%">
              <DetailedWeather />
            </Box>
            <Box order={[1, 2]} w="100%">
              <GeneralWeather />
            </Box>
            <Box order={[3, 3]} w="100%">
              <UVIndex />
            </Box>
          </Flex>
          <DailyForecast />
          <AdditionalInfo />
        </Flex>
      </Flex>
    </>
  );
};

export default MainInformation;
