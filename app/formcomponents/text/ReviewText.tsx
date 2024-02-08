import React from "react";
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ReviewText(): JSX.Element {
  const inputBg = useColorModeValue("#fff", "gray.700");

  const countCharacters = (
    element: HTMLInputElement | HTMLTextAreaElement,
    maxChars: number
  ): void => {
    let counterId: string;
    let currentChars: number;

    if (element.id === "writeReview") {
      counterId = "textareaCounter";
    } else if (element.id === "textInput") {
      counterId = "inputCounter";
    } else {
      return;
    }

    const counter = document.getElementById(counterId);
    currentChars = element.value.length;
    if (counter) {
      counter.textContent = `${currentChars}/${maxChars} ${
        element.id === "writeReview" ? "min" : "max"
      } characters`;
    }
  };

  return (
    <VStack spacing={4} alignItems="flex-start" w="100%">
      <Flex flexDirection={"column"} alignItems={"flex-start"} w="100%">
        <Box
          pb="10px"
          fontWeight="500"
          fontSize="20px"
          lineHeight="1em"
          margin="0"
        >
          Title your review
        </Box>
        <Input
          type="text"
          id="textInput"
          placeholder="Enter text here"
          onInput={(e) => countCharacters(e.target as HTMLInputElement, 120)}
          bg={inputBg}
        />
        <Flex
          pt="5px"
          w="100%"
          justifyContent={"flex-end"}
          fontSize="12px"
          id="inputCounter"
        >
          0/120 max characters
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} alignItems={"flex-start"} w="100%">
        <Box
          pb="10px"
          fontWeight="500"
          fontSize="20px"
          lineHeight="1em"
          margin="0"
        >
          Write your review
        </Box>
        <Textarea
          id="writeReview"
          rows={5}
          cols={50}
          maxLength={1000}
          placeholder="The bed was very comfy, the room was..."
          onInput={(e) => countCharacters(e.target as HTMLTextAreaElement, 200)}
          bg={inputBg}
        />
        <Flex
          pt="5px"
          w="100%"
          justifyContent={"flex-end"}
          fontSize="12px"
          id="textareaCounter"
        >
          0/200 min characters
        </Flex>
      </Flex>
    </VStack>
  );
}
