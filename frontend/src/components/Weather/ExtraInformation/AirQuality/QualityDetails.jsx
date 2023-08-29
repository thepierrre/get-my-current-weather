import { Text, Box, Icon, Tooltip, Flex } from "@chakra-ui/react";

const QualityDetails = () => {
  return (
    <Flex
      w="50%"
      direction="column"
      fontSize="xl"
      px="2rem"
      align="center"
      gap="1rem"
    >
      <Text fontSize="2xl">
        μg/m<sup>3</sup>
      </Text>
      <Flex gap="1.5rem">
        <Flex direction="column">
          <Text>
            SO<sub>2</sub>
          </Text>
          <Text>
            NO<sub>2</sub>
          </Text>
          <Text>
            PM<sub>10</sub>
          </Text>
          <Text>
            PM<sub>2.5</sub>
          </Text>
          <Text>
            O<sub>3</sub>
          </Text>
          <Text>
            CO<sub></sub>
          </Text>
        </Flex>
        <Flex direction="column" align="flex-end">
          <Text>–</Text>
          <Text>–</Text>
          <Text>–</Text>
          <Text>–</Text>
          <Text>–</Text>
          <Text>–</Text>
        </Flex>
        <Flex direction="column" align="flex-end">
          <Text>10</Text>
          <Text>5</Text>
          <Text>6</Text>
          <Text>5</Text>
          <Text>11</Text>
          <Text>9</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QualityDetails;
