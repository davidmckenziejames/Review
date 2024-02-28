import { useState } from "react";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import HotelReviewLink from "~/components/HotelReviewLink";
import HotelReview from "~/formcomponents/HotelReview";
import HotelOffer from "~/components/HotelOffer";

// Company Branding & Details
const brandBG = "#201e1f";
const brandAccent = "#b2b078";
const brandLogo = "http://assets.vipflow.co.uk/files/manrake-logo.png";
const companyImage = "http://assets.vipflow.co.uk/files/mandrake-room.jpeg";
const companyName = "The Mandrake";
const companyStreet = "20-21 Newman Street";
const companyCity = "London";
const companyCountry = "United Kingdom";

export default function Mandrake() {
  const [displayComponent, setDisplayComponent] = useState("");
  return (
    <Flex
      h="100vh"
      w="100%"
      justifyContent="start"
      flexDirection="column"
      overflowX="hidden"
    >
      <Box
        bg={brandBG}
        w="100%"
        py="10px"
        color="white"
        borderTop="1px solid"
        borderTopColor={brandAccent}
      >
        <Flex justifyContent="center">
          <Image
            height="70px"
            objectFit="contain"
            width="auto"
            src={brandLogo}
          />
        </Flex>
      </Box>
      <VStack bg="#fff" h="100%">
        {displayComponent === "" && (
          <VStack
            mt="40px"
            id="choice"
            bg="#fff"
            borderRadius="10px"
            w={{ base: "90%", md: "700px" }}
            textAlign={"center"}
          >
            <Flex direction="column" alignItems="center" width="100%">
              <Flex fontWeight="500" mb="25px" fontSize="24px" lineHeight="1em">
                How was your experience?
              </Flex>
              <Flex
                width="100%"
                justifyContent={{ base: "space-between", md: "center" }}
                alignItems="center"
                gap={{ base: "0px", md: "30px" }}
              >
                <Flex
                  id="negative"
                  onClick={() => setDisplayComponent("Review")}
                  flexDirection="column"
                  alignItems="center"
                  border="1px solid"
                  bg="#fff"
                  borderColor="#9a9a9a"
                  borderRadius="10px"
                  width={{ base: "48%", md: "200px" }}
                  py="15px"
                  gap="15px"
                  cursor="pointer"
                  _hover={{
                    borderColor: "#23385b",
                    bg: "#faf2e2",
                  }}
                >
                  <Image
                    src="http://assets.vipflow.co.uk/files/negative-review.png"
                    alt="Negative"
                    height={{ base: "60px", md: "80px" }}
                  />
                  <Flex
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="1em"
                    margin="0"
                  >
                    Could Be Better
                  </Flex>
                </Flex>
                <Flex
                  id="positive"
                  onClick={() => setDisplayComponent("ReviewLink")}
                  flexDirection="column"
                  alignItems="center"
                  border="1px solid"
                  bg="#fff"
                  borderColor="#9a9a9a"
                  borderRadius="10px"
                  width={{ base: "48%", md: "200px" }}
                  py="15px"
                  gap="15px"
                  cursor="pointer"
                  _hover={{
                    borderColor: "#23385b",
                    bg: "#effdea",
                  }}
                >
                  <Image
                    src="http://assets.vipflow.co.uk/files/positive-review.png"
                    alt="Positive"
                    height={{ base: "60px", md: "80px" }}
                  />
                  <Flex
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="1em"
                    margin="0"
                  >
                    Good Experience
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </VStack>
        )}
        {displayComponent === "ReviewLink" && <HotelReviewLink />}
        {displayComponent === "Review" && (
          <HotelReview
            brandBG={brandBG}
            brandAccent={brandAccent}
            companyImage={companyImage}
            companyName={companyName}
            companyStreet={companyStreet}
            companyCity={companyCity}
            companyCountry={companyCountry}
          />
        )}
      </VStack>
      <HotelOffer brandBG={brandBG} brandAccent={brandAccent} />
    </Flex>
  );
}
