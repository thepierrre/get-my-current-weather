import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const QualityChart = () => {
  return (
    <Box w="50%" display="flex" alignItems="center" justifyContent="flex-end">
      <Box w="13rem">
        <CircularProgressbar
          value="50"
          text={"Moderate"}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "0.75rem",
            pathTransitionDuration: 1,
            pathColor: "#E7B10A",
            textColor: "#0A2647",
            trailColor: "#d6d6d6",
          })}
        />
      </Box>
    </Box>
  );
};

export default QualityChart;
