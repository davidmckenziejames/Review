import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { Meteors } from "./meteors";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";

const fontStyle = {
  lineHeight: "1em",
};
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};

const text = {
  lineHeight: "1em",
};

export default function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={{ base: "90%", md: "450px" }}>
          <Box w="100%" position="relative">
            <Flex
              cursor="pointer"
              position="absolute"
              right="10px"
              top="10px"
              fontSize="26px"
              onClick={onClose}
            >
              <FiX />
            </Flex>
            <form
              accept-charset="UTF-8"
              action="https://www.formbackend.com/f/9d02de158b2f70bc"
              method="POST"
            >
              <Flex flexDirection="column" gap="10px" px="15px" py="20px">
                <Flex flexDirection="column">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input type="text" id="name" name="name" required />
                </Flex>
                <Flex flexDirection="column">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type="email" id="email" name="email" required />
                </Flex>
                <Flex flexDirection="column">
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <Input type="company" id="company" name="company" required />
                </Flex>
                <Button type="submit">
                  <Flex
                    alignItems="center"
                    lineHeight="1em"
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="600"
                    gap="5px"
                    w={{ base: "", md: "" }}
                  >
                    <Box boxSize="20px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </Box>
                    REQUEST ACCESS
                  </Flex>
                </Button>
              </Flex>
            </form>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
