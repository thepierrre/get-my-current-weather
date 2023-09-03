import { useContext, useState } from "react";
import DailyForecastItemDetail from "./DailyForecastItemDetail";
import WeatherContext from "../../../context/weather-context";
import { DateTime } from "luxon";
import { useDisclosure } from "@chakra-ui/react";
import getWeatherIcon from "../../../shared/get-weather-icon";
import { Flex, Text, Icon } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";

const DailyForecastItem = (props) => {
  // const { celsiusTemp, fahrenheitTemp, main, date, daily, setSelectedDay } =
  //   props;
  const { dayWeather } = props;
  const { globalWeather, tempUnits } = useContext(WeatherContext);
  const [selectedDay, setSelectedDay] = useState(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const celsiusTemp = dayWeather.celsiusTemp;
  const fahrenheitTemp = dayWeather.fahrenheitTemp;
  const main = dayWeather.main;
  const date = dayWeather.date;

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
        onClick={onOpen}
      >
        <Text fontSize="2xl">{day}</Text>
        <Flex direction="column" align="center">
          <Icon as={weatherIcon} boxSize={28} />
          <Text fontSize="xl">{convertedTemp}°</Text>
        </Flex>
      </Flex>
      <DailyForecastItemDetail
        isOpen={isOpen}
        onClose={onClose}
        dayWeather={dayWeather}
        weatherIcon={weatherIcon}
      />
    </>
  );
};

export default DailyForecastItem;

// {selectedDay && (
//   <DailyForecastItemDetail
//     key={selectedDay}
//     // temp={forecast[selectedDay].temp}
//     // celsiusTemp={forecast[selectedDay].celsiusTemp}
//     // fahrenheitTemp={forecast[selectedDay].fahrenheitTemp}
//     // nightTemp={forecast[selectedDay].nightTemp}
//     // celsiusNightTemp={forecast[selectedDay].celsiusNightTemp}
//     // fahrenheitNightTemp={forecast[selectedDay].fahrenheitNightTemp}
//     // main={forecast[selectedDay].main}
//     // date={forecast[selectedDay].date}
//     // precipProb={forecast[selectedDay].precipProb}
//     // sunrise={forecast[selectedDay].sunrise}
//     // sunset={forecast[selectedDay].sunset}
//     // moonrise={forecast[selectedDay].moonrise}
//     // moonset={forecast[selectedDay].moonset}
//     // moonPhase={forecast[selectedDay].moonPhase}
//     daily={forecast[selectedDay]}
//     onClose={() => setSelectedDay(undefined)}
//   />
// )}
