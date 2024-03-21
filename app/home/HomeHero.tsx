import { Box, Flex, Image, VStack } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <Flex
      w={"full"}
      py={{ base: "40px", md: "90px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('https://assets.vipflow.co.uk/files/hotel-bg.jpg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={{ base: "100%" }} gap="20px">
        <Image
          mb="10px"
          height={{ base: "40px", md: "60px" }}
          src="http://assets.vipflow.co.uk/files/vipflow-logo.png"
        />
        <Flex
          color="#fff"
          textAlign="center"
          lineHeight="1.2em"
          fontSize={{ base: "40px", md: "60px" }}
          fontWeight="700"
          w={{ base: "95%", md: "800px" }}
        >
          Review Generation Software for Hotels
        </Flex>
        <Flex
          textAlign="center"
          justifyContent="center"
          lineHeight="1.4em"
          color="#fff"
          fontSize={{ base: "18px", md: "28px" }}
          fontWeight="500"
          w={{ base: "95%", md: "600px" }}
        >
          Increase positive reviews, boost direct bookings and level up your
          guest experience.
        </Flex>
      </VStack>
      <Flex w={{ base: "100%" }} flexDirection="column" alignItems="center">
        <Flex
          fontWeight="600"
          cursor="pointer"
          position="relative"
          mt="25px"
          bg="#fff"
          color="#111"
          fontSize={{ base: "18px", md: "18px" }}
          lineHeight="1.1em"
          borderRadius="5px"
          px={{ base: "10px", md: "10px" }}
          py={{ base: "6px", md: "6px" }}
          _hover={{}}
        >
          VIEW DEMO
        </Flex>
        <Flex
          lineHeight="1em"
          color="#fff"
          fontSize={{ base: "14px", md: "14px" }}
          fontWeight="500"
          mt="10px"
        >
          No email required
        </Flex>
      </Flex>
    </Flex>
  );
}
