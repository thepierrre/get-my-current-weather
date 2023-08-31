import { useContext, useEffect, useState } from "react";
import { chartLevels, chartBarEmpty } from "../../../../UI/chartLevels";
import WeatherContext from "../../../../context/weather-context";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const QualityChart = () => {
  const { globalWeather } = useContext(WeatherContext);
  const [chartColor, setChartColor] = useState(undefined);
  const [qualityLabel, setQualityLabel] = useState("");
  const [qualityPercentage, setQualityPercentage] = useState(-1);

  const airQuality = globalWeather.airQuality.overall;

  let label, percentage;
  const getChartPercentageAndLabel = () => {
    if (airQuality === 1) {
      label = "Very Good";
      percentage = 100;
    }
    if (airQuality === 2) {
      label = "Good";
      percentage = 80;
    }
    if (airQuality === 3) {
      label = "Moderate";
      percentage = 60;
    }
    if (airQuality === 4) {
      label = "Poor";
      percentage = 40;
    }
    if (airQuality === 5) {
      label = "Very Poor";
      percentage = 20;
    }

    setQualityLabel(label);
    setQualityPercentage(percentage);
  };

  useEffect(() => {
    getChartPercentageAndLabel();
    const chartGrade = label;
    const searchedItem = chartLevels.find(
      (item) => item.airQualityGrade === chartGrade
    );
    if (searchedItem) {
      const color = searchedItem.color;
      setChartColor(color);
    }
  }, [airQuality]);

  return (
    <Box w="50%" display="flex" alignItems="center" justifyContent="flex-end">
      <Box w="13rem">
        <CircularProgress
          value={qualityPercentage}
          color={chartColor}
          size="12rem"
          fontSize="8xl"
          thickness="10px"
          trackColor={chartBarEmpty}
        >
          <CircularProgressLabel>{qualityLabel}</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Box>
  );
};

export default QualityChart;
