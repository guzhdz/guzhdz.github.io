'use client'
//React/Next imports
import { useState } from "react";

//Chakra imports
import {
  Flex,
  Text,
  Button,
  Heading,
  Highlight,
  Box,
  Group,
  Image,
  Link
} from "@chakra-ui/react"

//Component imports
import Header from "./components/header/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import LoadingPage from "./components/LoadingPage";

//Context imports
import { useShared } from "./context/SharedContext";

//Library imports
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const {particlesInit, setParticlesInit} = useShared();

  return (
    <Flex w="100%" minH="100%" h="100vh" direction="column" overflowY="hidden">
      <ParticlesBackground
        init={particlesInit}
        setInit={setParticlesInit} />

      {!particlesInit && <LoadingPage />}

      {particlesInit && <>
        <Header />

        <Flex
          w="100%"
          align="center"
          height="100vh"
          px={{ base: "50px", xl: "120px" }}>
          <Flex width={{ base: "100%", md: "50%" }} direction="column"
            height={{ base: "400px", lg: "600px" }}
            justify="center"
            data-state="open"
            _open={{
              animation: "slide-in 1.1s ease-in-out"
            }}>
            <Box>
              <Heading
                size={{ base: "3xl", md: "5xl" }}
                mb={2}
                fontWeight="bold">
                I'm Gustavo Hernández Cano
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} mb={10}>
                <Highlight
                  query="Software Developer Junior"
                  styles={{ px: "0.5", bg: "teal.subtle", color: "teal.fg" }}
                  width="auto">
                  Software Developer Junior, enthusiastic about web development and
                  passionate about learning new technologies.
                </Highlight>
              </Text>

              <Group gap={4}>
                <Link href="/Resume.pdf" target="_blank">
                  <Button colorPalette="teal" size="md">
                    <FaDownload /> Resume
                  </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/guzhdz" target="_blank">
                  <Button colorPalette="teal" size="md" variant="outline">
                    <FaLinkedin /> Linkedin
                  </Button>
                </Link>
              </Group>
            </Box>
          </Flex>

          <Flex
            width="50%"
            justify="flex-end"
            hideBelow="md"
            data-state="open"
            _open={{
              animation: "slide-in 1.1s ease-in-out"
            }}>
            <Image
              src="/main-image.png"
              alt="Gustavo Hernández Cano"
              height={{ base: "400px", lg: "600px" }} />
          </Flex>
        </Flex>
      </>}

    </Flex>
  );
}