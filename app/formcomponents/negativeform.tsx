import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import MonthSelect from "~/formcomponents/date/MonthSelect";
import StarRating from "~/formcomponents/rating/Star";
export default function NegativeForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rating, setRating] = useState(0);
  return (
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
  );
}
