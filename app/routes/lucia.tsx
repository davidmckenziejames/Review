import { useState } from "react";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import RestaurantReviewLink from "~/components/RestaurantReviewLink";
import RestaurantOffer from "~/components/RestaurantOffer";
import RestaurantReview from "~/formcomponents/RestaurantReview";

// Company Branding & Details
const brandBG = "#201e1f";
const brandAccent = "#d5839b";
const brandLogo = "http://assets.vipflow.co.uk/files/lucia-logo.png";
const companyImage = "http://assets.vipflow.co.uk/files/lucia-room.jpg";
const companyName = "Lucia York";
const companyStreet = "13 Swinegate Court East";
const companyCity = "York";
const companyCountry = "United Kingdom";

export default function Lucia() {
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
        py="15px"
        color="white"
        borderTop="1px solid"
        borderTopColor={brandAccent}
        bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.luciawinebar.co.uk/wp-content/uploads/2021/05/lucia-york-header-image.jpg')`}
        bgPosition={"center"}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex justifyContent="center">
          <Image
            height="40px"
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
        {displayComponent === "ReviewLink" && <RestaurantReviewLink />}
        {displayComponent === "Review" && (
          <RestaurantReview
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
      <RestaurantOffer brandBG={brandBG} brandAccent={brandAccent} />
    </Flex>
  );
}
