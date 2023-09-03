import { Text, Flex, IconButton, Icon } from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";

const SettingsButton = (props) => {
  const { onOpen } = props;

  return (
    <Flex position="fixed" top="2rem" right="2rem">
      <IconButton
        variant="link"
        color="#0A2647"
        _hover={{ color: "rgb(241, 241, 241)" }}
        onClick={onOpen}
      >
        <Icon as={IoSettingsOutline} boxSize={12} />
      </IconButton>
    </Flex>
  );
};

export default SettingsButton;
