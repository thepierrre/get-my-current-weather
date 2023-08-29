import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Text, Box } from "@chakra-ui/react";

const UVIndex = () => {
  const percentage = 80;

  return (
    <Box
      w="25rem"
      h="25rem"
      padding="4rem"
      bg="rgba(255, 255, 255, 0.2)"
      borderRadius="1.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <Text fontSize="5xl">UV Index</Text>
      <Box
        w="19.5rem"
        h="20rem"
        display="flex"
        gap="2rem"
        alignItems="flex-end"
        justifyContent="center"
        padding="0 2rem 0 2rem"
      >
        <Box bg="#609966" w="1rem" h="2rem" borderRadius="0.75rem"></Box>
        <Box bg="#609966" w="1rem" h="3.5rem" borderRadius="0.75rem"></Box>
        <Box
          bg="rgba(1, 1, 1, 0.1)"
          w="1rem"
          h="5rem"
          borderRadius="0.75rem"
        ></Box>
        <Box
          bg="rgba(1, 1, 1, 0.1)"
          w="1rem"
          h="6.5rem"
          borderRadius="0.75rem"
        ></Box>
        <Box
          bg="rgba(1, 1, 1, 0.1)"
          w="1rem"
          h="8rem"
          borderRadius="0.75rem"
        ></Box>
      </Box>
      <Text fontSize="4xl">Low</Text>
    </Box>
  );
};

export default UVIndex;

{
  /* <Box w="10rem">
        <CircularProgressbar
          value={percentage}
          text={"Good"}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "0.75rem",
            pathTransitionDuration: 1,
            pathColor: "#0A2647",
            textColor: "#0A2647",
            trailColor: "#d6d6d6",
          })}
        />
      </Box> */
}
