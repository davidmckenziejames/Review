import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

export default function PestThankYou() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex h="100vh" w="100%" justifyContent="start" flexDirection="column">
      <Box bg="#1e385e" w="100%" p={4} color="white">
        <Flex justifyContent="center">
          <Image
            height="80px"
            src="https://i.postimg.cc/wvJJ9xcg/nh-logo.png"
          />
        </Flex>
      </Box>
      <VStack
        bg="#fff"
        h="100%"
        py="50px"
        bgImage="url('https://i.postimg.cc/t4SF5M4Q/new-holgate-room.jpg')"
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
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
            and provide exceptional experiences for all our guests.{" "}
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
          <Box fontStyle="italic">- New Holgate Team</Box>
          <Flex
            bg="#1e385e"
            color="#fff"
            fontSize="18px"
            fontWeight="600"
            lineHeight="1em"
            px="15px"
            py="10px"
            borderRadius="5px"
            mt="20px"
            onClick={onOpen}
            cursor="pointer"
          >
            Claim 30% off your next stay
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <VStack position="relative" py="20px" px="10px">
                <Box
                  onClick={onClose}
                  position="absolute"
                  top="10px"
                  right="10px"
                  cursor="pointer"
                >
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 0.75 0.75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.165.165a.031.031 0 0 1 .044 0l.166.166L.54.166A.031.031 0 1 1 .584.21L.419.375.584.54A.031.031 0 0 1 .54.584L.375.419.21.584A.031.031 0 0 1 .166.54L.331.375.165.21a.031.031 0 0 1 0-.044z"
                      fill="#0D0D0D"
                    />
                  </svg>
                </Box>
                <Box fontSize="20px" fontWeight="600">
                  Where shall we send your voucher?
                </Box>
                <FormControl w="90%">
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="John Doe" />
                  <FormLabel mt="10px">Email address</FormLabel>
                  <Input type="email" placeholder="lNcJt@example.com" />
                  <Button
                    w="100%"
                    mt="20px"
                    bg="#1e385e"
                    color="#fff"
                    type="submit"
                    _hover={{ bg: "#1e385e" }}
                  >
                    CLAIM DISCOUNT
                  </Button>
                </FormControl>
              </VStack>
            </ModalContent>
          </Modal>
        </VStack>
      </VStack>
    </Flex>
  );
}
