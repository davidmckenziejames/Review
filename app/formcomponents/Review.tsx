import {
  Flex,
  Button,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  useDisclosure,
  Spinner,
  Textarea,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import MonthSelect from "~/formcomponents/date/MonthSelect";
import StarRating from "~/formcomponents/rating/Star";
import ReviewTips from "./modal/ReviewTips";
type TravellerOption = "Business" | "Couples" | "Family" | "Friends" | "Solo";

// Array of traveller types
const travellers: TravellerOption[] = [
  "Business",
  "Couples",
  "Family",
  "Friends",
  "Solo",
];

const questionStyle = {
  pb: "15px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "1em",
  margin: "0",
};

export default function Review() {
  const inputBg = useColorModeValue("#fff", "gray.700");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const countCharacters = (
    element: HTMLInputElement | HTMLTextAreaElement,
    maxChars: number
  ): void => {
    let counterId: string;
    let currentChars: number;

    if (element.id === "writeReview") {
      counterId = "textareaCounter";
    } else if (element.id === "textInput") {
      counterId = "inputCounter";
    } else {
      return;
    }

    const counter = document.getElementById(counterId);
    currentChars = element.value.length;
    if (counter) {
      counter.textContent = `${currentChars}/${maxChars} ${
        element.id === "writeReview" ? "min" : "max"
      } characters`;
    }
  };
  const [rating, setRating] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTraveller, setSelectedTraveller] = useState<
    TravellerOption | ""
  >("");

  const handleTravellerClick = (traveller: TravellerOption) => {
    setSelectedTraveller(traveller);
  };
  const triggerFilePicker = () => {
    fileInputRef.current?.click(); // Programmatically click the hidden file input
  };
  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true); // Start loading

    // Simulate an async operation like a form submission
    setTimeout(() => {
      // After 4 seconds, stop loading and redirect to '/thankyou'
      setIsLoading(false);
      navigate("/thankyou");
    }, 4000);
  };
  return (
    <>
      <VStack
        bg="#fff"
        mt="20px"
        pt="20px"
        px={{ base: "10px", md: "20px" }}
        pb="60px"
        borderRadius="10px"
        w={{ base: "90%", md: "700px" }}
        textAlign={"center"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          w="100%"
          gap="30px"
          pb="70px"
        >
          <Flex
            w="100%"
            alignItems="center"
            border="1px solid #9a9a9a"
            borderRadius="10px"
            p="15px"
            gap="15px"
          >
            <Image
              height="80px"
              src="http://assets.vipflow.co.uk/files/new-holgate.jpg"
            />
            <Flex flexDirection="column">
              <Flex
                pb="10px"
                fontWeight="600"
                fontSize="20px"
                lineHeight="1em"
                margin="0"
              >
                New Holgate
              </Flex>
              <Flex
                pb="6px"
                fontWeight="400"
                fontSize="16px"
                lineHeight="1em"
                margin="0"
              >
                106-108 Holgate Road
              </Flex>
              <Flex
                fontWeight="400"
                fontSize="16px"
                lineHeight="1em"
                margin="0"
              >
                York, United Kingdom
              </Flex>
            </Flex>
          </Flex>
          <Flex
            fontWeight="600"
            fontSize={{ base: "26px", md: "30px" }}
            lineHeight="1em"
            margin="0"
          >
            Tell us, how was your stay?
          </Flex>
          <Flex id="rating" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>How would you rate your experience?</Flex>
            <StarRating rating={rating} setRating={setRating} />
          </Flex>

          <Flex id="month" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>When did you visit?</Flex>
            <MonthSelect />
          </Flex>

          <Flex id="who" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>Who did you travel with?</Flex>
            <Flex flexWrap={"wrap"} columnGap="15px" rowGap="15px">
              {travellers.map((traveller) => (
                <Flex
                  key={traveller}
                  textAlign="center"
                  lineHeight="1em"
                  fontWeight="500"
                  padding="10px 15px"
                  borderWidth="2px"
                  color={selectedTraveller === traveller ? "#332FA1" : "#111"}
                  borderColor={
                    selectedTraveller === traveller ? "#332FA1" : "#C5C5C5"
                  }
                  borderRadius="10px"
                  _hover={{
                    borderColor: "#332FA1",
                    color: "#332FA1",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTravellerClick(traveller)}
                >
                  {traveller}
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex id="reviewtitle" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>Title your review</Flex>
            <Input
              type="text"
              id="textInput"
              placeholder="Enter text here"
              onInput={(e) =>
                countCharacters(e.target as HTMLInputElement, 120)
              }
              bg={inputBg}
            />
            <Flex
              pt="5px"
              w="100%"
              justifyContent={"flex-end"}
              fontSize="12px"
              id="inputCounter"
            >
              0/120 max characters
            </Flex>
          </Flex>

          <Flex id="reviewtext" flexDirection={"column"} w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Flex {...questionStyle}>Write your review</Flex>
              <ReviewTips />
            </HStack>
            <Textarea
              id="writeReview"
              rows={5}
              cols={50}
              maxLength={1000}
              placeholder="The bed was very comfy, the room was..."
              onInput={(e) =>
                countCharacters(e.target as HTMLTextAreaElement, 200)
              }
              bg={inputBg}
            />
            <Flex
              pt="5px"
              w="100%"
              justifyContent={"flex-end"}
              fontSize="12px"
              id="textareaCounter"
            >
              0/200 min characters
            </Flex>
          </Flex>
          <Flex
            id="photos"
            flexDirection={"column"}
            w="100%"
            onClick={triggerFilePicker}
          >
            <Flex {...questionStyle}>
              Add some photos
              <Box fontSize={"14px"} ml="5px" fontWeight={"400"}>
                (optional)
              </Box>
            </Flex>
            <VStack
              id="uploadtrigger"
              w="100%"
              py="40px"
              gap="5px"
              bg="#ececec"
              cursor="pointer"
            >
              <Input
                ref={fileInputRef}
                type="file"
                id="upload"
                name="upload_images"
                multiple
                accept="image/*"
                display="none"
              />
              <svg
                width="40"
                height="40"
                viewBox="0 0 1.2 1.2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.1.3A.2.2 0 0 1 .3.1h.6a.2.2 0 0 1 .2.2v.6a.2.2 0 0 1-.2.2H.3A.2.2 0 0 1 .1.9V.3Z"
                  stroke="#000"
                  stroke-width=".1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  stroke="#000"
                  stroke-width=".1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M.55.425A.125.125 0 0 1 .425.55.125.125 0 0 1 .3.425a.125.125 0 0 1 .25 0zm.176.206L.3 1.1h.607A.193.193 0 0 0 1.1.907V.9c0-.023-.009-.032-.025-.05L.873.63a.1.1 0 0 0-.148 0Z"
                />
              </svg>
              <Flex
                fontWeight="500"
                fontSize="16px"
                lineHeight="1em"
                margin="0"
              >
                Click to add photos
              </Flex>
            </VStack>
          </Flex>

          <Flex id="fullname" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>Full Name</Flex>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleFullNameChange}
              bg={inputBg}
            />
          </Flex>

          <Flex id="email" flexDirection={"column"} w="100%">
            <Flex {...questionStyle}>Email Address</Flex>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              bg={inputBg}
            />
          </Flex>
          <Flex id="terms" w="100%">
            <Text lineHeight="1.6em" textAlign="left" fontSize={"16px"}>
              <Checkbox size="lg" display={"inline"} mr="6px" bottom="-3px" />I
              certify that this review is based on my own experience and is my
              genuine opinion of this hotel, and that I have no personal or
              business relationship with this establishment.
            </Text>
          </Flex>
          <Flex id="submitcontainer" w="100%" justifyContent={"flex-end"}>
            <Flex
              id="submit"
              onClick={handleClick}
              w="100%"
              alignItems={"center"}
              gap="10px"
              justifyContent={"center"}
              cursor="pointer"
              lineHeight="1em"
              fontSize={"22px"}
              bg="#111"
              color={"#fff"}
              py="15px"
              borderRadius="15px"
              fontWeight="600"
            >
              CONTINUE
              <svg
                width={22}
                height={22}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n     .line-arrow-right1{animation: line-arrow-right1-fly 3s infinite ease-in-out;}\n     @keyframes line-arrow-right1-fly{\n         0% { transform: translate3d(-200px, 0, 0);}\n         30% {transform: translate3d(0px, 0, 0);}\n         40% {transform: translate3d(-4px, 0, 0);}\n         50% {transform: translate3d(0px, 0, 0);}\n         70% {transform: translate3d(-4px, 0, 0);}\n         100% {transform: translate3d(240px, 0, 0);}\n     }\n     @media (prefers-reduced-motion: reduce) {\n         .line-arrow-right1 {\n             animation: none;\n         }\n     }\n    ",
                  }}
                />
                <path
                  className="line-arrow-right1 stroke1"
                  d="M4 51.0081H94M94 51.0081L58.1525 15M94 51.0081L58.1525 86.25"
                  stroke="rgba(255,255,255,1)"
                  strokeWidth="5px"
                  strokeLinecap="round"
                  style={{ animationDuration: "3s" }}
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
      {isLoading && (
        <VStack
          id="loading"
          position={"fixed"}
          height="100%"
          width="100%"
          justifyContent="center"
          bottom={0}
          left={0}
          bg="#ffffffc9"
          zIndex="10"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            width="100px"
            height="100px"
          />
        </VStack>
      )}
    </>
  );
}
