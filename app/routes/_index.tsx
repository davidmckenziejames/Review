import { Flex } from "@chakra-ui/react";
import HomeHero from "~/home/HomeHero";
import HomePreFeatures from "~/home/HomePreFeatures";
import HomeFooter from "~/home/HomeFooter";
import Marquee from "~/home/marquee";
import Features from "~/home/Features";
import Example from "~/home/Example";

export default function ReviewHome() {
  return (
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column" bg="#fff">
      <HomeHero />
      <Marquee />
      <Example />
      <Features />
      <HomePreFeatures />
      <HomeFooter />
    </Flex>
  );
}
