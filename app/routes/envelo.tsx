"use client";

import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import EnveloCalculator from "~/components/EnveloCalculator";

export default function Envelo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "28px", md: "50px" })}
          >
            Transform your workplace with smart technology
          </Text>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "18px", md: "24px" })}
          >
            Envelo’s smart technology seamlessly combines occupancy and air
            quality data that empowers you to reduce costs, minimise energy
            consumption, optimise your spaces, and promote a healthy working
            environment for all.
          </Text>
          <Button onClick={onOpen} gap="4px">
            <svg
              width={20}
              height={20}
              viewBox="0 0 0.6 0.6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.1.125v.35A.025.025 0 0 0 .125.5h.35"
                stroke="#111"
                strokeWidth={0.05}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M.45.225.325.35.262.287.175.375"
                stroke="#111"
                strokeWidth={0.05}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ROI CALCULATOR
          </Button>

          <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent maxW={{ base: "90%", md: "600px" }}>
              <Box
                onClick={onClose}
                position="absolute"
                top="15px"
                right="15px"
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
              <EnveloCalculator />
            </ModalContent>
          </Modal>
        </Stack>
      </VStack>
    </Flex>
  );
}
