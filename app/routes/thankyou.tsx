import { Box, Flex, VStack } from "@chakra-ui/react";

export default function ThankYou() {
  return (
    <Flex h="100vh" w="100%" justifyContent="start" flexDirection="column">
      <VStack
        bg="#fff"
        h="100%"
        py="50px"
        bgGradient="linear(to-l, rgb(6, 183, 249), rgb(25, 74, 236))"
      >
        <VStack
          bg="#fff"
          p="20px"
          borderRadius="10px"
          maxW={{ base: "90%", sm: "450px" }}
          textAlign={"center"}
          fontSize={{ base: "16px", md: "16px" }}
        >
          <Box
            mb="5px"
            fontSize={{ base: "22px", md: "24px" }}
            fontWeight="600"
          >
            Thank you for your feedback
          </Box>
          <Box mb="10px">
            We appreciate your honesty and are sorry to hear that your
            experience may not have met your expectations. Your input is
            invaluable to us as we continuously strive to enhance our services
            and provide exceptional experiences for all.{" "}
          </Box>
          <Box mb="10px">
            Rest assured, we will carefully review your comments and take
            appropriate action to address any areas of concern. If there's
            anything else you'd like to discuss or if you have any further
            feedback, please feel free to reach out to us directly.
          </Box>
          <Box mb="10px">
            We hope to have the opportunity to welcome you back in the future
            and exceed your expectations.
          </Box>
          <Box fontStyle="italic">- Customer Services Team</Box>
        </VStack>
      </VStack>
    </Flex>
  );
}
