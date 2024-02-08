import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  count?: number;
  size?: number;
}

const StarRating = ({
  rating,
  setRating,
  count = 5,
  size = 40,
}: StarRatingProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <HStack spacing={"2px"}>
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <Radio
              name="rating"
              display="none"
              onChange={() => setRating(ratingValue)}
              value={String(ratingValue)} // Convert to string here
            ></Radio>
            <FaStar cursor="pointer" size={size} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default StarRating;
