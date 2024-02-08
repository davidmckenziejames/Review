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
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import Offer from "~/components/Offer";
import MonthSelect from "~/formcomponents/date/MonthSelect";
import StarRating from "~/formcomponents/rating/Star";
export default function NegativeForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rating, setRating] = useState(0);
  return (
    <VStack
      id="negativeform"
      bg="#fff"
      p="20px"
      borderRadius="10px"
      w={{ base: "90%", md: "700px" }}
      maxW={{ base: "90%" }}
      textAlign={"center"}
    >
      <Flex
        direction="column"
        alignItems="center"
        padding="35px 0px"
        gap="15px"
      >
        <Box fontWeight="500" fontSize="24px" lineHeight="1em" margin="0">
          How was your experience?
        </Box>
        <Flex wrap="wrap" width="100%" justifyContent="center" gap="20px">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px solid #9a9a9a"
            borderRadius="10px"
            width={{ base: "40%", md: "240px" }}
            paddingTop="15px"
            paddingBottom="10px"
            cursor="pointer"
            id="negative"
          >
            <Image
              src="http://assets.vipflow.co.uk/files/negative-review.png"
              alt="Negative"
              height={{ base: "70px", md: "80px" }}
            />
            <Box>Could Be Better</Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px solid #9a9a9a"
            borderRadius="10px"
            width={{ base: "40%", md: "240px" }}
            paddingTop="15px"
            paddingBottom="10px"
            cursor="pointer"
            id="positive"
          >
            <Image
              src="http://assets.vipflow.co.uk/files/positive-review.png"
              alt="Positive"
              height={{ base: "70px", md: "80px" }}
            />
            <Box>Good Experience</Box>
          </Box>
        </Flex>
      </Flex>
      <VStack w="100%">
        <Box fontWeight="500" fontSize="24px" lineHeight="1em" margin="0">
          How would you rate your experience?
        </Box>
        <StarRating rating={rating} setRating={setRating} />
        <Box fontWeight="500" fontSize="24px" lineHeight="1em" margin="0">
          When?
        </Box>
        <MonthSelect />
      </VStack>
    </VStack>
  );
}
