import { Flex, Image, useDisclosure, HStack } from "@chakra-ui/react";

export default function HomeTopBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      id="header"
      bgGradient="linear(to-r,  rgb(9, 9, 121) 11.2%, rgb(144, 6, 161) 83.7%)"
      w="100%"
      justify="center"
      py={{ base: "6px", md: "10px" }}
    >
      <Flex
        fontWeight="600"
        fontSize={{ base: "14px", sm: "16px", md: "18px" }}
        color="#fff"
      >
        Booking & payments system built specifically for Nightclubs
      </Flex>
    </Flex>
  );
}
