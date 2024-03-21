import React from "react";
import { Box, Flex, Image, keyframes } from "@chakra-ui/react";

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const imageUrls = [
  "https://assets.vipflow.co.uk/files/savoy.png",
  "https://assets.vipflow.co.uk/files/ushuaia.jpg",
  "https://assets.vipflow.co.uk/files/champneys.jpg",
  "https://assets.vipflow.co.uk/files/ihg.jpg",
  "https://assets.vipflow.co.uk/files/thistle.jpg",
  "https://assets.vipflow.co.uk/files/claridges.jpg",
  "https://assets.vipflow.co.uk/files/hyatt.jpg",
  "https://assets.vipflow.co.uk/files/savoy.png",
  "https://assets.vipflow.co.uk/files/ushuaia.jpg",
  "https://assets.vipflow.co.uk/files/champneys.jpg",
  "https://assets.vipflow.co.uk/files/ihg.jpg",
  "https://assets.vipflow.co.uk/files/thistle.jpg",
  "https://assets.vipflow.co.uk/files/claridges.jpg",
  "https://assets.vipflow.co.uk/files/hyatt.jpg",
  "https://assets.vipflow.co.uk/files/savoy.png",
  "https://assets.vipflow.co.uk/files/ushuaia.jpg",
  "https://assets.vipflow.co.uk/files/champneys.jpg",
  "https://assets.vipflow.co.uk/files/ihg.jpg",
  "https://assets.vipflow.co.uk/files/thistle.jpg",
  "https://assets.vipflow.co.uk/files/claridges.jpg",
  "https://assets.vipflow.co.uk/files/hyatt.jpg",
];

const Marquee = () => {
  return (
    <Box overflow="hidden" py="15px" position="relative" borderBottom={"1px"}>
      <Flex gap={"15px"} animation={`${scroll} 8s linear infinite`}>
        {[...imageUrls, ...imageUrls].map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`image${index + 1}`}
            h="30px"
            mx="10px"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Marquee;
