import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { cardText, leftArrow, rightArrow } from "./Data";
export default function PageCarousel() {
  const slides = [
    {
      img: "https://dmj.vipflow.co.uk/wp-content/uploads/2024/03/lucia.jpg",
    },
    {
      img: "https://dmj.vipflow.co.uk/wp-content/uploads/2024/03/lucia2.jpg",
    },
    {
      img: "https://dmj.vipflow.co.uk/wp-content/uploads/2024/03/lucia1.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex flexDirection="column" w="100%" gap="10px">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Flex key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                objectFit="contain"
              />
            </Flex>
          ))}
        </Flex>
        <Box onClick={prevSlide} position="absolute" {...leftArrow}>
          <FaChevronCircleLeft />
        </Box>
        <Box {...rightArrow} onClick={nextSlide} position="absolute">
          <FaChevronCircleRight />
        </Box>
      </Flex>
    </Flex>
  );
}
