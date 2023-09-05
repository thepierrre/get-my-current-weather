import { useContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import WeatherContext from "../../../context/weather-context";
import DailyForecastItem from "./DailyForecastItem";
import DailyForecastItemDetail from "./DailyForecastItemDetail";
import { Flex } from "@chakra-ui/react";

const DailyForecast = () => {
  const { globalWeather } = useContext(WeatherContext);

  // const [selectedDay, setSelectedDay] = useState(undefined);

  const forecast = globalWeather.dailyForecast;

  const forecastItems = Object.keys(forecast).map((daily, index) =>
    index !== 0 ? (
      <DailyForecastItem
        key={daily}
        // temp={forecast[daily].temp}
        // celsiusTemp={forecast[daily].celsiusTemp}
        // fahrenheitTemp={forecast[daily].fahrenheitTemp}
        // main={forecast[daily].main}
        // date={forecast[daily].date}
        // daily={daily}
        dayWeather={forecast[daily]}
        // setSelectedDay={setSelectedDay}
        // selectedDay={selectedDay}
      />
    ) : null
  );

  return (
    <>
      <Flex
        bg="rgba(255, 255, 255, 0.2)"
        w={["100%", "72rem"]}
        h={["7rem", "12rem"]}
        gap={["0.2rem"]}
        borderRadius="1.5rem"
        align="center"
        justify={["", "center"]}
        overflowX={["scroll", "hidden"]}
        overflowY="hidden"
      >
        {forecastItems}
      </Flex>
    </>
  );
};

export default DailyForecast;
