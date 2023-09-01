import Header from "../../Header/Header";
import DetailedWeather from "./DetailedWeather";
import GeneralWeather from "./GeneralWeather";
import UVIndex from "./UVIndex";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForecast from "../DailyForecast/DailyForecast";
import AdditionalInfo from "../ExtraInformation/AdditionalInfo";
import { Box } from "@chakra-ui/react";

const MainInformation = () => {
  return (
    <>
      <Box color="#0A2647" display="flex" flexDirection="column" gap="1.5rem">
        <Header />
        <HourlyForecast />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="1.5rem"
        >
          <DetailedWeather />
          <GeneralWeather />
          <UVIndex />
        </Box>
        <DailyForecast />
        <AdditionalInfo />
      </Box>
    </>
  );
};

export default MainInformation;
