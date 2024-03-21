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
import PageCarousel from "./PageCarousel";

export default function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"full"}
      py={{ base: "40px", md: "90px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="#fff"
    >
      <VStack w={{ base: "100%" }} gap="30px" px={{ base: "20px", md: "0" }}>
        <Flex flexDirection="column" gap="15px">
          <PageCarousel />
          <Flex
            color="#111"
            textAlign="left"
            lineHeight="1.2em"
            fontSize={{ base: "28px", md: "30px" }}
            fontWeight="700"
            alignSelf="flex-start"
          >
            Launch a custom review request page
          </Flex>
          <Flex
            color="#111"
            textAlign="left"
            lineHeight="1.2em"
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="500"
            alignSelf="flex-start"
          >
            Increase reviews by reducing the time and effort for guests to find
            your listings & post feedback. Decrease negative reviews by
            redirecting unhappy guests away from public sites.
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}
