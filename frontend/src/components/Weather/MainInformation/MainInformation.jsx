import Header from "../../Header/Header";
import DetailedWeather from "./DetailedWeather";
import GeneralWeather from "./GeneralWeather";
import UVIndex from "./UVIndex";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AdditionalInfo from "../ExtraInformation/AdditionalInfo";
import { Flex } from "@chakra-ui/react";

const MainInformation = () => {
  return (
    <>
      <Flex color="#0A2647" direction="column" gap="3rem">
        <Header />
        <Flex direction="column" gap="1.5rem">
          <HourlyForecast />
          <Flex justify="center" align="center" gap="1.5rem">
            <DetailedWeather />
            <GeneralWeather />
            <UVIndex />
          </Flex>
          <DailyForecast />
          <AdditionalInfo />
        </Flex>
      </Flex>
    </>
  );
};

export default MainInformation;
