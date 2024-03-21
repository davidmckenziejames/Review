import { Flex, Image, useDisclosure, HStack } from "@chakra-ui/react";
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};
export default function HomeFooter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      id="footer"
      bg="#111"
      color="#fff"
      w="100%"
      flexDirection={"column"}
      alignItems={"center"}
      py="15px"
      px="10px"
      gap={"5px"}
    >
      <Flex
        fontSize="14px"
        fontWeight="600"
        as="a"
        href="mailto:support@reviewflow.uk"
      >
        support@reviewflow.uk
      </Flex>
      <Flex fontSize="14px">©2024 Reviewflow. All rights reserved</Flex>
    </Flex>
  );
}
