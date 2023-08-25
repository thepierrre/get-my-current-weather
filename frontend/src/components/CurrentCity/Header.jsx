import { Text, Box } from "@chakra-ui/react";

const Header = (props) => {
  const { currWeather, time } = props;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="6xl" textAlign="center">
        {currWeather.city || "Dreamcity"}, {currWeather.country || "Dreamland"}
      </Text>
      <Text fontSize="3xl">{time || "Saturday 10 AM"}</Text>
    </Box>
  );
};

export default Header;
