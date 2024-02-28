import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface OfferProps {
  brandBG: string;
  brandAccent: string;
}

export default function HotelOffer({ brandBG, brandAccent }: OfferProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
      style={{ position: "fixed", bottom: 0, width: "100%" }}
      initial={{ translateY: "100%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Flex
        id="offer"
        bg={brandBG}
        color="#fff"
        justify={{ base: "space-between", md: "center" }}
        gap={{ base: "unset", md: "20px" }}
        align="center"
        px={{ base: "15px", md: "20px" }}
        py={{ base: "10px", md: "5px" }}
        borderRadius="10px 10px 0 0"
        w="100%"
      >
        <Image
          height={{ base: "40px", md: "60px" }}
          src="http://assets.vipflow.co.uk/files/201312340598Voucher.gif"
        />
        <Flex
          fontSize={{ base: "16px", md: "22px" }}
          fontWeight="600"
          lineHeight="1em"
          textAlign="center"
        >
          Want 30% off your next stay?
        </Flex>
        <Flex
          id="mobileButton"
          fontSize="16px"
          fontWeight="600"
          lineHeight="1em"
          px="8px"
          py="5px"
          borderRadius="5px"
          onClick={onOpen}
          cursor="pointer"
          bg="#fff"
          color="#1e385e"
          display={{ base: "unset", md: "none" }}
          _hover={{
            bg: brandAccent,
            color: "#fff",
          }}
        >
          CLAIM
        </Flex>
        <Flex
          id="desktopButton"
          fontSize="16px"
          fontWeight="700"
          lineHeight="1em"
          px="10px"
          py="8px"
          borderRadius="5px"
          onClick={onOpen}
          cursor="pointer"
          bg="#fff"
          color="#1e385e"
          display={{ base: "none", md: "unset" }}
        >
          CLAIM DISCOUNT
        </Flex>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="90%">
            <VStack position="relative" py="30px" px="10px">
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
                <Input type="email" placeholder="yourname@example.com" />
                <Button
                  w="100%"
                  mt="20px"
                  bg={brandBG}
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
      </Flex>
    </motion.div>
  );
}
