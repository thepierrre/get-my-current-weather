import { Text, Box } from "@chakra-ui/react";

const RandomClimateFact = () => {
  return (
    <Box
      w="30%"
      h="25rem"
      padding="4rem"
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="1.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="2rem"
    >
      <Text fontSize="3xl" textAlign="center">
        Did you know that...
      </Text>
      <Text fontSize="xl" textAlign="center">
        Dreamcity enjoys a sunny and cozy climate every single day, creating a
        perpetually pleasant atmosphere for all.
      </Text>
    </Box>
  );
};

export default RandomClimateFact;
