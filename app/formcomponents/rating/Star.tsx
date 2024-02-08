import { HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

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
  size = 35,
}: StarRatingProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <HStack>
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label
            key={index}
            style={{
              color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
            }}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              type="radio"
              name="rating"
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
              style={{ display: "none" }}
            />
            <FaStar cursor="pointer" size={size} />
          </label>
        );
      })}
    </HStack>
  );
};

export default StarRating;
