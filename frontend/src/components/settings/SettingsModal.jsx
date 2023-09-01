import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

const SettingsModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent display="flex" gap="2rem" borderRadius="1.5rem">
        <ModalHeader textAlign="center" fontSize="2xl">
          Settings
        </ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Flex direction="column" gap="2rem">
            <Flex gap="3rem">
              <Flex align="center" w="45%">
                <Text fontSize="xl">Temperature</Text>
              </Flex>
              <Flex gap="1rem" w="55%">
                <Button w="8.5rem">Celsius</Button>
                <Button w="8.5rem">Fahrenheit</Button>
              </Flex>
            </Flex>
            <Flex gap="3rem">
              <Flex align="center" w="45%">
                <Text fontSize="xl">Clock</Text>
              </Flex>
              <Flex gap="1rem" w="55%">
                <Button w="8rem">12 hours</Button>
                <Button w="8rem">24 hours</Button>
              </Flex>
            </Flex>
            <Flex gap="3rem">
              <Flex align="center" w="45%">
                <Text fontSize="xl">Theme</Text>
              </Flex>
              <Flex gap="1rem" w="55%">
                <Button w="8rem">Default</Button>
                <Button w="8rem">Dark</Button>
              </Flex>
            </Flex>
            <Flex gap="3rem">
              <Flex align="center" w="45%">
                <Text fontSize="xl">Language</Text>
              </Flex>
              <Flex gap="1rem" w="55%">
                <Button w="8rem">English</Button>
                <Button w="8rem">German</Button>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
