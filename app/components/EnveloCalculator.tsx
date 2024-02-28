import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
} from "@chakra-ui/react";

export default function EnveloCalculator() {
  const [employees, setEmployees] = React.useState(250);
  const [rooms, setRooms] = useState(100);
  const [sick, setSick] = useState(7);
  const [AirMonitoring, setAirMonitoring] = useState<boolean | null>(null);
  const [Occupancy, setOccupancy] = useState<boolean | null>(null);

  const [savings, setSavings] = useState<number | null>(null); // Change result to savings
  const [sickCost, setSickCost] = useState<number | null>(null);
  // Calculate the number of employees multiplied by 150
  React.useEffect(() => {
    const calculateSavings = () => {
      setSavings(employees * 150 * 0.2);
    };
    calculateSavings();
  }, [employees]);

  const [absence, setAbsence] = useState<number | null>(null); // Change result to savings
  const [showSavings, setShowSavings] = useState(false);
  // Calculate the number of employees multiplied by 150
  React.useEffect(() => {
    const calculateAbsence = () => {
      setAbsence(rooms * 160 * 3);
    };
    calculateAbsence();
  }, [rooms]);
  React.useEffect(() => {
    const calculateSickCost = () => {
      setSickCost(sick * employees * 0.3); // Assuming a cost impact of 30% per sick day per employee
    };
    calculateSickCost();
  }, [sick, employees]);
  const toggleSavings = () => {
    setShowSavings(!showSavings);
  };
  return (
    <Flex
      h="100%"
      w="100%"
      pt="30px"
      pb="20px"
      alignItems={"center"}
      gap="30px"
      flexDirection="column"
    >
      <Flex
        alignItems={"center"}
        fontSize={{ base: "20px", md: "24px" }}
        fontWeight="600"
        lineHeight="1em"
        mb="-10px"
      >
        CALCULATE BUSINESS IMPACT
      </Flex>
      <Flex flexDirection="column" width="90%" gap="20px">
        <Flex flexDirection="column" width="100%">
          <Flex
            mb="10px"
            alignItems={"center"}
            fontSize="16px"
            fontWeight="500"
            lineHeight="1em"
            gap="3px"
          >
            How many employees do you have?{" "}
          </Flex>

          <Slider
            id="employeesr"
            defaultValue={250}
            min={0}
            max={1000}
            onChange={(v) => setEmployees(v)}
            // Do not handle mouse enter/leave events
          >
            <SliderTrack>
              <SliderFilledTrack bg="#74d572" />
            </SliderTrack>
            <SliderThumb height={"30px"} width={"30px"} borderColor={"teal"}>
              <Flex fontWeight="500" fontSize="12px" lineHeight="1em">
                {employees}
              </Flex>
            </SliderThumb>
          </Slider>
          <Flex
            fontSize="12px"
            lineHeight="1em"
            mt="-5px"
            w="100%"
            justifyContent="space-between"
          >
            <Box>1</Box>
            <Box>1000</Box>
          </Flex>
        </Flex>

        <Flex flexDirection="column" width="100%">
          <Flex
            mb="8px"
            alignItems={"center"}
            fontSize="16px"
            fontWeight="500"
            lineHeight="1em"
            gap="3px"
          >
            Average number of sick days per year?
          </Flex>
          <Flex mb="10px" fontSize="12px" fontWeight="300" lineHeight="1em">
            2023 average is 7.8 days per employee (Source: CNS)
          </Flex>
          <Slider
            id="roomsSlider"
            defaultValue={7}
            min={1}
            max={30}
            onChange={(value) => setSick(value)}
          >
            <SliderTrack>
              <SliderFilledTrack bg="#74d572" />
            </SliderTrack>
            <SliderThumb height={"30px"} width={"30px"} borderColor={"teal"}>
              <Flex fontWeight="500" fontSize="12px" lineHeight="1em">
                {sick}
              </Flex>
            </SliderThumb>
          </Slider>
          <Flex
            fontSize="12px"
            lineHeight="1em"
            mt="-5px"
            w="100%"
            justifyContent="space-between"
          >
            <Box>1</Box>
            <Box>30</Box>
          </Flex>
        </Flex>

        <Flex flexDirection="column" width="100%">
          <Flex
            mb="8px"
            alignItems={"center"}
            fontSize="16px"
            fontWeight="500"
            lineHeight="1em"
            gap="3px"
          >
            How many rooms are in your building?{" "}
          </Flex>
          <Flex mb="10px" fontSize="12px" fontWeight="300" lineHeight="1em">
            Offices, meeting rooms, bathrooms etc.
          </Flex>
          <Slider
            id="roomsSlider"
            defaultValue={100}
            min={1}
            max={200}
            onChange={(value) => setRooms(value)}
          >
            <SliderTrack>
              <SliderFilledTrack bg="#74d572" />
            </SliderTrack>
            <SliderThumb height={"35px"} width={"35px"} borderColor={"teal"}>
              <Flex fontWeight="500" fontSize="12px" lineHeight="1em">
                {rooms}
              </Flex>
            </SliderThumb>
          </Slider>
          <Flex
            fontSize="12px"
            lineHeight="1em"
            mt="-5px"
            w="100%"
            justifyContent="space-between"
          >
            <Box>1</Box>
            <Box>200</Box>
          </Flex>
        </Flex>

        <HStack w="100%" justifyContent="space-between" gap="0">
          <Flex id="Air" flexDirection={"column"} w="50%">
            <Flex
              mb="15px"
              alignItems={"center"}
              fontSize="16px"
              fontWeight="500"
              lineHeight="1em"
              gap="3px"
            >
              Did you monitor air quality?
            </Flex>
            <Flex justifyContent="start" gap="10px">
              <Button
                variant={AirMonitoring === true ? "solid" : "outline"}
                colorScheme={AirMonitoring === true ? "green" : undefined}
                onClick={() => setAirMonitoring(true)}
                height="32px"
              >
                Yes
              </Button>
              <Button
                variant={AirMonitoring === false ? "solid" : "outline"}
                colorScheme={AirMonitoring === false ? "red" : undefined}
                onClick={() => setAirMonitoring(false)}
                height="32px"
              >
                No
              </Button>
            </Flex>
            <Flex mt="10px" fontSize="14px" fontWeight="300" lineHeight="1em">
              Pollutants, bacteria, allergens etc.
            </Flex>
          </Flex>

          <Flex id="Occupancy" flexDirection={"column"} w="50%">
            <Flex
              mb="15px"
              alignItems={"center"}
              fontSize="16px"
              fontWeight="500"
              lineHeight="1em"
              gap="3px"
            >
              Did you track building occupancy?
            </Flex>
            <Flex justifyContent="start" gap="10px">
              <Button
                variant={Occupancy === true ? "solid" : "outline"}
                colorScheme={Occupancy === true ? "green" : undefined}
                onClick={() => setOccupancy(true)}
                height="32px"
              >
                Yes
              </Button>
              <Button
                variant={Occupancy === false ? "solid" : "outline"}
                colorScheme={Occupancy === false ? "red" : undefined}
                onClick={() => setOccupancy(false)}
                height="32px"
              >
                No
              </Button>
            </Flex>
            <Flex mt="10px" fontSize="14px" fontWeight="300" lineHeight="1em">
              Empty offices, vacant meeting rooms etc.
            </Flex>
          </Flex>
        </HStack>
        <Flex w="100%">
          <Flex
            onClick={toggleSavings}
            id="calculate"
            w="100%"
            mt="10px"
            bg="#12243c"
            color="#fff"
            fontSize="20px"
            fontWeight="700"
            lineHeight="1em"
            _hover={{ bg: "#74d572" }}
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            py="10px"
            cursor="pointer"
          >
            CALCULATE
          </Flex>
        </Flex>
      </Flex>
      {showSavings && (
        <Flex
          id="savings"
          borderTop="3px solid #74d572"
          w="100%"
          flexDirection={"column"}
          alignItems="center"
          gap="20px"
        >
          <Flex
            display="none"
            mb="40px"
            id="benefits"
            flexDirection="column"
            width="100%"
            gap="20px"
          >
            <Flex
              alignItems={"center"}
              fontSize="16px"
              fontWeight="600"
              lineHeight="1em"
              gap="8px"
            >
              <Image
                height="24px"
                src="http://assets.vipflow.co.uk/files/reduce-cost.png"
              />
              REDUCE ENERGY & ABSENCE COSTS
            </Flex>
            <Flex
              alignItems={"center"}
              fontSize="16px"
              fontWeight="600"
              lineHeight="1em"
              gap="8px"
            >
              <Image
                height="24px"
                src="http://assets.vipflow.co.uk/files/evaluate.png"
              />
              BOOST HEALTH & PERFORMANCE
            </Flex>

            <Flex
              alignItems={"center"}
              fontSize="16px"
              fontWeight="600"
              lineHeight="1em"
              gap="9px"
            >
              <Image
                height="24px"
                src="http://media.djfan.app/images/#74d572-city.png"
              />
              HIT SUSTAINABILITY GOALS
            </Flex>
          </Flex>

          <Flex w="100%" flexDirection={"column"} alignItems="center">
            <Flex
              py="15px"
              bg="#15243a"
              color="#fff"
              w="100%"
              justifyContent="center"
              alignItems={"center"}
              fontSize="20px"
              fontWeight="600"
              lineHeight="1em"
              gap="3px"
            >
              Potential Annual Savings
            </Flex>
            <Flex flexDirection={"column"} alignItems="center" w="90%">
              <Flex
                mt="15px"
                mb="15px"
                alignItems={"center"}
                fontSize="16px"
                fontWeight="500"
                lineHeight="1em"
                w="100%"
              >
                Achieved through increasing energy efficiency, and reducing
                staff absence.
              </Flex>
              <Box
                w="100%"
                mb="10px"
                fontSize="16px"
                fontWeight="500"
                lineHeight="1em"
              >
                £
                <Box as="span" color="#8bd27d">
                  <b>{absence}</b>
                </Box>{" "}
                saved due to reduced staff illess
              </Box>
              <Box
                w="100%"
                mb="10px"
                fontSize="16px"
                fontWeight="500"
                lineHeight="1em"
              >
                £
                <Box as="span" color="#8bd27d">
                  <b>{savings}</b>
                </Box>{" "}
                saved in wasted energy costs
              </Box>
              <Box
                w="100%"
                mb="10px"
                fontSize="16px"
                fontWeight="500"
                lineHeight="1em"
              >
                <Box as="span" color="#8bd27d">
                  <b>{sickCost}</b>
                </Box>{" "}
                fewer sick days
              </Box>
              <Flex
                w="100%"
                alignItems={"center"}
                fontSize="14px"
                fontWeight="400"
                lineHeight="1em"
              >
                Additional benefits include boosted employee productivity &
                wellness, and increased company sustainability.
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" justifyContent="center">
            <Flex
              id="bookademo"
              w="90%"
              mt="0px"
              mb="5px"
              bg="#8bd27d"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              lineHeight="1em"
              _hover={{ bg: "#74d572" }}
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
              py="10px"
              cursor="pointer"
            >
              BOOK A DEMO
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
