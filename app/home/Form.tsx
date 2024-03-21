import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Heading,
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";
import { Meteors } from "./meteors";
import { FaEye } from "react-icons/fa";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";

export default function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      bg="#121826"
      w={{ base: "90%", md: "450px" }}
      position="relative"
      overflow="hidden"
      borderRadius="15px"
      py="30px"
      px="20px"
      gap="10px"
      mt={{ base: "10px", md: "20px" }}
    >
      <Flex
        textAlign="center"
        lineHeight="1.1em"
        fontSize={{ base: "24px", md: "30px" }}
        fontWeight="700"
        color="white"
      >
        More money, more time
      </Flex>
      <Flex
        textAlign="center"
        lineHeight="1.2em"
        fontSize={{ base: "16px", md: "18px" }}
        fontWeight="500"
        color="white"
        w={{ base: "", md: "" }}
      >
        Reduce overhead, ramp up revenue and provide a superior guest experience
        with our innovative online reservation system.
      </Flex>
      <Box position="relative" mt="10px" onClick={onOpen}>
        <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-5 py-2 text-40 xs:text-[16px] font-medium text-white backdrop-blur-3xl">
            REQUEST ACCESS
          </div>
        </span>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={{ base: "90%", md: "450px" }}>
          <Box w="100%" position="relative">
            <Flex
              cursor="pointer"
              position="absolute"
              right="10px"
              top="10px"
              fontSize="26px"
              onClick={onClose}
            >
              <FiX />
            </Flex>
            <form
              accept-charset="UTF-8"
              action="https://www.formbackend.com/f/9d02de158b2f70bc"
              method="POST"
            >
              <Flex flexDirection="column" gap="10px" px="15px" py="20px">
                <Flex flexDirection="column">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input type="text" id="name" name="name" required />
                </Flex>
                <Flex flexDirection="column">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type="email" id="email" name="email" required />
                </Flex>
                <Flex flexDirection="column">
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <Input type="company" id="company" name="company" required />
                </Flex>
                <Button type="submit">
                  <Flex
                    alignItems="center"
                    lineHeight="1em"
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight="600"
                    gap="5px"
                    w={{ base: "", md: "" }}
                  >
                    <Box boxSize="20px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </Box>
                    REQUEST ACCESS
                  </Flex>
                </Button>
              </Flex>
            </form>
          </Box>
        </ModalContent>
      </Modal>
      <Meteors number={20} />
    </VStack>
  );
}
