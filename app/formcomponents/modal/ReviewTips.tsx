import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
export default function ReviewTips() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        onClick={onOpen}
        alignItems="center"
        fontStyle="underline"
        gap="3px"
        fontSize="14px"
        fontWeight="600"
        lineHeight="1em"
        pb="15px"
        cursor="pointer"
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
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
        <u>Review Tips</u>
      </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90%">
          <Flex
            flexDirection="column"
            position="relative"
            justifyContent="flex-start"
            py="30px"
            px="15px"
            fontSize="16px"
            lineHeight="1em"
            fontWeight="500"
            gap="5px"
          >
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
            <Box fontSize="20px" fontWeight="600" mb="10px">
              What makes a great review?
            </Box>

            <Box fontSize="18px" fontWeight="700">
              Do
            </Box>
            <Box>&#x2022; Get specific - the more details, the better</Box>
            <Box>&#x2022; Share the good, the bad, and just OK</Box>
            <Box>&#x2022; Tell us stuff you'd tell your friends</Box>
            <Box>&#x2022; Sprinkle in a few tips and recs</Box>
            <Box mt="10px" fontSize="18px" fontWeight="700">
              Don't
            </Box>
            <Box>&#x2022; Use profanity, threats, or personal insults</Box>
            <Box>
              &#x2022; Include personal info like email or phone numbers
            </Box>
            <Box>&#x2022; Write in ALL CAPS</Box>
            <Box>&#x2022; Share someone else's experience</Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
