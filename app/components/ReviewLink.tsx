import { Flex, Box, Image, VStack } from "@chakra-ui/react";
export default function ReviewLink() {
  return (
    <VStack
      bg="#fff"
      mt="40px"
      borderRadius="10px"
      w={{ base: "100%", md: "700px" }}
      textAlign={"center"}
    >
      <Flex direction="column" alignItems="center" width="100%" gap="10px">
        <Flex
          mb="5px"
          fontSize={{ base: "28px", md: "28px" }}
          fontWeight="600"
          lineHeight={{ base: "1.2em", md: "1em" }}
          textAlign="center"
          w={{ base: "80%", md: "unset" }}
        >
          Great! We would love to hear your feedback.
        </Flex>
        <Flex
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight="400"
          textAlign="center"
          lineHeight={{ base: "1.4em", md: "1.2em" }}
          w={{ base: "90%", md: "420px" }}
        >
          We are a new business and a review of any length would be greatly
          appreciated!
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          width="100%"
          justifyContent={{ base: "unset", md: "center" }}
          alignItems={{ base: "center", md: "unset" }}
          gap={{ base: "25px", md: "15px" }}
          py="20px"
        >
          <Box
            as="a"
            href="https://www.booking.com/hotel/gb/holgatebridgehotel.en-gb.html"
            target="_blank"
            id="TripAdvisor"
          >
            <Image
              src="http://assets.vipflow.co.uk/files/booking-logo.png"
              alt="Booking.com"
              height={{ base: "45px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box
            as="a"
            href="https://www.google.com/maps/place/New+Holgate/@53.9540367,-1.1031053,17z/data=!4m11!3m10!1s0x487931e4d6cbea93:0x9c43693d1dd06568!5m2!4m1!1i2!8m2!3d53.9540367!4d-1.1005304!9m1!1b1!16s%2Fg%2F11l6wrzlwm?entry=ttu"
            target="_blank"
            id="TripAdvisor"
          >
            <Image
              src="http://assets.vipflow.co.uk/files/google-logo.png"
              alt="Google"
              height={{ base: "45px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box
            as="a"
            href="https://www.tripadvisor.com/UserReviewEdit-g186346-d490387-New_Holgate-York_North_Yorkshire_England.html"
            target="_blank"
            id="TripAdvisor"
          >
            <Image
              src="http://assets.vipflow.co.uk/files/tripadvisor-logo-1.png"
              alt="TripAdvisor"
              height={{ base: "45px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
        </Flex>
        <Flex
          mt="20px"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="600"
          color="#23385b"
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
          gap="3px"
          lineHeight="1em"
          w="90%"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
          Click any logo to visit your preferred website.
        </Flex>
      </Flex>
    </VStack>
  );
}
