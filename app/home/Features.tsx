import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
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

export default function Features() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"full"}
      py={{ base: "40px", md: "90px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 1)) , url('https://mckenzie-james.com/wp-content/uploads/2024/01/bg-vip.jpg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={{ base: "100%" }} gap="30px" px={{ base: "20px", md: "0" }}>
        <Flex flexDirection="column" gap="15px">
          <Flex
            color="#fff"
            textAlign="left"
            lineHeight="1em"
            fontSize={{ base: "28px", md: "30px" }}
            fontWeight="700"
            alignSelf="flex-start"
          >
            How does it work?
          </Flex>
          <Flex
            color="#fff"
            textAlign="left"
            lineHeight="1.2em"
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="500"
            alignSelf="flex-start"
          >
            To direct guests to your bespoke review page you have two options:
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "450px" }}
          bg="#fff"
          borderRadius="10px"
          overflow="hidden"
          border="1px solid #fff"
        >
          <Image
            h="200px"
            objectFit="cover"
            src="https://assets.vipflow.co.uk/files/gmail-email.webp"
          />
          <Flex
            color="#111"
            textAlign="center"
            lineHeight="1.4em"
            fontSize={{ base: "18px", md: "30px" }}
            fontWeight="500"
            p="10px 15px"
          >
            Send automated emails and SMS message to guests after checkout
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "450px" }}
          bg="#fff"
          borderRadius="10px"
          overflow="hidden"
          border="1px solid #fff"
        >
          <Image
            h="200px"
            objectFit="cover"
            src="https://assets.vipflow.co.uk/files/hotel-scan-qr-code.jpg"
          />
          <Flex
            color="#111"
            textAlign="center"
            lineHeight="1.4em"
            fontSize={{ base: "18px", md: "30px" }}
            fontWeight="500"
            p="10px 15px"
          >
            You can place QR codes at reception, inside rooms, and in common
            areas.
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
