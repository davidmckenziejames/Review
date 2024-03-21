import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FiEye, FiUsers, FiX } from "react-icons/fi";
interface Feature {
  title: string;
  imageUrl: string;
  Month: string;
  startDate: string;
  startTime: string;
  startMonth: string;
  startYear: string;
  days: string;
  capacity: string;
  price: string;
}

const features: Feature[] = [
  {
    title: "THEORY DAYSKIPPER CLASSROOM",
    imageUrl: "http://media.djfan.app/images/questions.jpg",
    Month: "FEB",
    startTime: "10:00",
    startDate: "05",
    startMonth: "FEBRUARY",
    startYear: "2024",
    days: "4",
    capacity: "4",
    price: "100",
  },
  {
    title: "THEORY DAYSKIPPER CLASSROOM",
    imageUrl: "http://media.djfan.app/images/questions.jpg",
    Month: "FEB",
    startTime: "10:00",
    startDate: "05",
    startMonth: "FEBRUARY",
    startYear: "2024",
    days: "4",
    capacity: "4",
    price: "100",
  },
];

export default function Courses() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFeature, setCurrentFeature] = useState<Feature | null>(null);

  const handleOpen = (feature: Feature) => {
    setCurrentFeature(feature);
    onOpen();
  };

  return (
    <Flex
      w="100%"
      alignItems="center"
      flexDirection="column"
      background=" linear-gradient(to top, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);"
      py="30px"
    >
      <Heading color="#fff">Courses</Heading>
      <Flex
        flexWrap="wrap"
        rowGap={{ base: "15px", md: "25px" }}
        p="20px"
        w="100%"
        maxW="800px"
        justifyContent="space-between"
      >
        {features.map((feature) => (
          <HStack
            key={feature.title}
            className="featureCard"
            w={{ base: "100%", md: "100%" }}
            bg="#fff"
            border="1px solid #111"
            borderRadius="10px"
            overflow="hidden"
            gap="25px"
            position="relative"
            color="#111"
            fontWeight="500"
            lineHeight="1em"
            px="15px"
            py="10px"
            justifyContent="space-between"
          >
            <Flex flexDirection="column" gap="10px">
              <Flex alignItems="center" gap="8px">
                <Flex
                  color="#3d70f6"
                  border="2px solid #3d70f6"
                  borderRadius="8px"
                  p="4px"
                  fontSize="20px"
                  fontWeight="600"
                >
                  {feature.Month}
                </Flex>
                <Flex fontSize="20px" fontWeight="600">
                  {feature.title}
                </Flex>
              </Flex>
              <Flex alignItems="center" gap="10px">
                <Flex alignItems="center">
                  <FiUsers style={{ marginRight: "5px" }} /> Capacity:{" "}
                  {feature.capacity}
                </Flex>
                <Flex>Price: £{feature.price}</Flex>
              </Flex>
              <Flex alignItems="center" fontSize="14px" gap="15px">
                <Flex gap="4px">
                  <Flex fontWeight="600">Start:</Flex>
                  <Flex gap="5px">
                    <Flex>{feature.startTime}</Flex>
                    <Flex>{feature.startDate}</Flex>
                    <Flex>{feature.startMonth}</Flex>
                    <Flex>{feature.startYear}</Flex>
                  </Flex>
                </Flex>
                <Flex gap="4px">
                  <Flex>End:</Flex>
                  <Flex gap="5px">
                    <Flex>{feature.startTime}</Flex>
                    <Flex>{feature.startDate}</Flex>
                    <Flex>{feature.startMonth}</Flex>
                    <Flex>{feature.startYear}</Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              fontWeight="600"
              fontSize="20px"
              lineHeight="1em"
              bg="navy"
              color="#fff"
              p="8px"
              borderRadius="8px"
            >
              {" "}
              BOOK NOW
            </Flex>
          </HStack>
        ))}
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={{ base: "95%", md: "800px" }}
          borderRadius={"8px"}
          overflow={"hidden"}
        >
          <Flex position="relative">
            {currentFeature && <Image src={currentFeature.imageUrl} />}
            <Box
              color="#fff"
              position="absolute"
              right="10px"
              top="10px"
              bg="#4b2bc0"
              p="5px"
              rounded="full"
              cursor="pointer"
              onClick={onClose}
            >
              <FiX />
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
