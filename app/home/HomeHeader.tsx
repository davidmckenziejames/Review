import { Flex, Image, useDisclosure, HStack } from "@chakra-ui/react";
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};
export default function HomeHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      id="header"
      bg="black"
      w="100%"
      justify="center"
      borderBottom="solid 1px #fff"
    >
      <HStack p="15px" w="100%" maxW="1200px" justifyContent="space-between">
        <Image height="30px" src="http://media.djfan.app/images/VIPFLOW.png" />
        <Flex {...buttonStyle} bg="#fff" px="10px" py="6px">
          REQUEST DEMO
        </Flex>
      </HStack>
    </Flex>
  );
}
