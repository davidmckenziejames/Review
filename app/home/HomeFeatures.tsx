import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { FiEye, FiX } from "react-icons/fi";
interface Feature {
  title: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    title: "Engaging Booking Questions",
    imageUrl: "http://media.djfan.app/images/questions.jpg",
  },
  {
    title: "Purchases Bottle Upfront",
    imageUrl: "http://media.djfan.app/images/bottles.jpg",
  },
  {
    title: "Streamlined Checkout",
    imageUrl: "http://media.djfan.app/images/pay.jpg",
  },
];

export default function HomeFeatures() {
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
      background=" linear-gradient(to top, #cc208e 0%, #6713d2 100%);"
      py="30px"
    >
      <Heading color="#fff">Key Features</Heading>
      <Flex
        flexWrap="wrap"
        rowGap={{ base: "15px", md: "25px" }}
        p="20px"
        w="100%"
        maxW="1200px"
        justifyContent="space-between"
      >
        {features.map((feature) => (
          <VStack
            key={feature.title}
            className="featureCard"
            w={{ base: "100%", md: "48%" }}
            bg="#111"
            border="1px solid #111"
            borderRadius="10px"
            overflow="hidden"
            gap="0"
            position="relative"
          >
            <Box
              color="#fff"
              position="absolute"
              right="5px"
              top="5px"
              onClick={() => handleOpen(feature)}
              bg="#4b2bc0"
              p="5px"
              rounded="full"
              cursor="pointer"
            >
              <FiEye />
            </Box>

            <Image src={feature.imageUrl} />
            <Flex
              borderTop="1px solid #fff"
              w="100%"
              py="10px"
              color="#fff"
              justify="center"
              fontWeight="600"
            >
              {feature.title}
            </Flex>
          </VStack>
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
