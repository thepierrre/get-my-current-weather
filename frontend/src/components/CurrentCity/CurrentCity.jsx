import { useContext, useEffect, useState } from "react";
import DayPartContext from "../../context/day-part-context";
import Header from "./Header";
import AdditionalWeatherInfo from "./AdditionalWeatherInfo";
import MainWeatherInfo from "./MainWeatherInfo";
import RandomClimateFact from "./RandomClimateFact";
import { imagesLinks } from "../../utils/images/images-links";
import { Flex, Box } from "@chakra-ui/react";

const CurrentCity = (props) => {
  const { isNight } = useContext(DayPartContext);
  const { currWeather } = props;
  const [time, setTime] = useState("Saturday 10 AM");

  // Calculate the formatted local time.
  function getLocalTimeFromOffset(offsetInSeconds) {
    const offsetMilliseconds = offsetInSeconds * 1000;
    const adjustedTime =
      Date.now() + offsetMilliseconds + new Date().getTimezoneOffset() * 60000;
    const localDate = new Date(adjustedTime);

    const formattedTime = localDate.toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return formattedTime;
  }

  useEffect(() => {
    // Calculate the local time from the timezone offset once the API response is received
    if (currWeather.time !== undefined) {
      const localTime = getLocalTimeFromOffset(currWeather.time);
      setTime(localTime);
    }
  }, [currWeather.time]);

  // const localTime = getLocalTimeFromOffset(currWeather.time);

  // Get the current UTC time in the Unix epoch
  const getCurrentUTCTimeInUnixEpoch = () => {
    const currentTimeInMilliseconds = Date.now();
    const currentTimeInSeconds = Math.floor(currentTimeInMilliseconds / 1000);
    return currentTimeInSeconds;
  };

  const currentTimeUTC = getCurrentUTCTimeInUnixEpoch();

  const date = new Date();

  const currTime = {
    time: new Date(),
    timezone: currWeather.time,
  };

  const offsetMilliseconds = currTime.timezone ? currTime.timezone * 1000 : 0;

  // Calculate the sunrise in the local time.
  const sunrise = currWeather.sunrise
    ? new Date(
        currWeather.sunrise * 1000 +
          date.getTimezoneOffset() * 60000 +
          offsetMilliseconds
      ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "05:00 AM";

  // Calculate the sunset in the local time.
  const sunset = currWeather.sunset
    ? new Date(
        currWeather.sunset * 1000 +
          date.getTimezoneOffset() * 60000 +
          offsetMilliseconds
      ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "09:00 PM";

  // Specify which weather image to use.
  let imgSrc;
  switch (currWeather.main) {
    case "Clouds":
      imgSrc = imagesLinks.cloudy;
      break;
    case "Clear":
      if (isNight === false) {
        imgSrc = imagesLinks.sun;
      } else {
        imgSrc = imagesLinks.moon;
      }
      break;
    case "Snow":
      imgSrc = imagesLinks.snow;
      break;
    case "Drizzle":
    case "Rain":
    case "Squall":
      imgSrc = imagesLinks.rain;
      break;
    case "Haze":
      imgSrc = imagesLinks.haze;
      break;
    case "Mist":
    case "Fog":
      imgSrc = imagesLinks.mist;
      break;
    case "Thunderstorm":
      imgSrc = imagesLinks.thunder;
      break;
    case "Tornado":
      imgSrc = imagesLinks.tornado;
      break;
    case "Smoke":
      imgSrc = imagesLinks.smoke;
      break;
    case "Dust":
    case "Sand":
    case "Ash":
      imgSrc = imagesLinks.dust;
      break;
    default:
      imgSrc = imagesLinks.sun;
      break;
  }

  return (
    <>
      <Box w="100%" h="100%" color="#0A2647">
        <Flex direction="column" gap="2rem">
          <Header currWeather={currWeather} time={time} />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="1.5rem"
          >
            <AdditionalWeatherInfo currWeather={currWeather} />
            <MainWeatherInfo
              sunrise={sunrise}
              sunset={sunset}
              currWeather={currWeather}
            />
            <RandomClimateFact />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CurrentCity;
