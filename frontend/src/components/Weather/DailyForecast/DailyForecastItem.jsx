import { useContext } from "react";
import DailyForecastItemDetail from "./DailyForecastItemDetail";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Flex, Text, Icon } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";

const DailyForecastItem = (props) => {
  const { celsiusTemp, fahrenheitTemp, main, date, daily, setSelectedDay } =
    props;
  const { globalWeather, tempUnits } = useContext(WeatherContext);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const convertedTemp = tempUnits === "Celsius" ? celsiusTemp : fahrenheitTemp;

  const weatherIcon = getWeatherIcon(main);

  const timezone = globalWeather.timezone;

  let day = DateTime.fromSeconds(+date, { zone: timezone }).weekdayLong;

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        m={0}
        gap="2rem"
        w="20%"
        h="100%"
        _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
        cursor="pointer"
        onClick={() => setSelectedDay(daily)}
      >
        <Text fontSize="2xl">{day}</Text>
        <Flex direction="column" align="center">
          <Icon as={weatherIcon} boxSize={28} />
          <Text fontSize="xl">{convertedTemp}°</Text>
        </Flex>
      </Flex>
      {/* <DailyForecastItemDetail
        isOpen={isOpen}
        onClose={onClose}
        weatherIcon={weatherIcon}
      /> */}
    </>
  );
};

export default DailyForecastItem;
