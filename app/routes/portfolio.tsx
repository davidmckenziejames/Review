import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
export default function Portfolio() {
  const [selectedPest, setSelectedPest] = useState("");

  const handlePestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPest(event.target.value);
  };
  const [currentSlide, setCurrentSlide] = useState(Array(pests.length).fill(0));

  const prevSlide = (index: number) => {
    setCurrentSlide(
      currentSlide.map((slide, i) =>
        i === index
          ? slide === 0
            ? pests[i].slides.length - 1
            : slide - 1
          : slide
      )
    );
  };

  const nextSlide = (index: number) => {
    setCurrentSlide(
      currentSlide.map((slide, i) =>
        i === index
          ? slide === pests[i].slides.length - 1
            ? 0
            : slide + 1
          : slide
      )
    );
  };
  return (
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column" bg="#fff">
      <Box bg="#0e243e" w="100%" p={4} color="white" borderTop="1px solid #fff">
        <Flex justifyContent="center">
          <Image
            height={{ base: "20px", md: "24px" }}
            src="https://dynopest.co.uk/wp-content/uploads/2023/07/dyno-white.png"
          />
        </Flex>
      </Box>
      <Flex w="100%" h="100%" flexDirection="column" bg="#fff" gap="20px">
        <Text>Portfolio</Text>
        <Text>DJfan</Text>
        <Text>VIPflow</Text>
        <Text>ReviewFlow</Text>

        <Text>Pricing Table</Text>
      </Flex>
    </Flex>
  );
}
