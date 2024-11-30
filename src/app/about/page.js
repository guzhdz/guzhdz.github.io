'use client'
//Chakra imports
import {
    Flex,
    Text,
    Tabs,
    Group,
    IconButton,
    Card,
    Link,
    Image,
    Box
} from "@chakra-ui/react"

//Component imports
import Header from "../components/header/Header";
import LoadingPage from "../components/LoadingPage";
import AboutMe from "../components/about/AboutMe";
import Hobbies from "../components/about/Hobbies";
import Goals from "../components/about/Goals";
import Education from "../components/about/Education";
import ParticlesBackground from "../components/ParticlesBackground";

//Context imports
import { useShared } from "../context/SharedContext";

//Library imports
import { BsPersonSquare } from "react-icons/bs";
import { IoGameController, IoSchool } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function About() {
    const { particlesInit, setParticlesInit } = useShared();

    return (
        <Flex
            w="100%"
            minH="100vh"
            direction="column"
            className="dark">
            <ParticlesBackground
                init={particlesInit}
                setInit={setParticlesInit} />

            {!particlesInit && <LoadingPage />}

            {particlesInit && <>
                <Header />

                <Flex
                    w="100%"
                    minH="90vh"
                    align="center"
                    justify="center"
                    direction={{ base: "column", lg: "row" }}
                    py={10}
                    gap={6}
                    overflowX="hidden"
                    px={{ base: "20px", md: "50px", xl: "120px" }}>

                    <Flex
                        direction="column"
                        align="center"
                        w={{ base: "100%", lg: "30%" }}
                        data-state="open"
                        _open={{
                            animation: "slide-in-left 1.1s ease-in-out"
                        }}>
                        <Box mb={2}>
                            <Image
                                src="/photo.png"
                                alt="Gustavo Hernández Cano Photo"
                                rounded="md"
                                h="200px"
                                w="200px"
                                border="4px solid"
                                borderColor="teal.500"
                                p={2}
                                borderRadius="100px"
                                fit="cover"
                                mx="auto"
                            />
                        </Box>
                        <Text fontSize="lg" mb={4}>Gustavo Hernández Cano</Text>

                        <Group gap={6}>
                            <Link
                                href="https://www.linkedin.com/in/guzhdz"
                                target="_blank"
                                title="My LinkedIn profile">
                                <IconButton variant="solid" colorPalette="teal" size="lg">
                                    <FaLinkedin />
                                </IconButton>
                            </Link>
                            <Link
                                href="https://github.com/guzhdz"
                                target="_blank"
                                title="My GitHub profile">
                                <IconButton variant="solid" colorPalette="teal" size="lg">
                                    <FaGithub />
                                </IconButton>
                            </Link>
                            <Link
                                href="https://mail.google.com/mail/?view=cm&to=guzhdz28@gmail.com"
                                target="_blank"
                                title="Send me an email">
                                <IconButton variant="solid" colorPalette="teal" size="lg">
                                    <IoMdMail />
                                </IconButton>
                            </Link>
                        </Group>
                    </Flex>

                    <Card.Root
                        w={{ base: "100%", lg: "70%" }}
                        data-state="open"
                        _open={{
                            animation: "slide-in-right 1.1s ease-in-out"
                        }}>
                        <Card.Body px={8}>
                            <Tabs.Root
                                defaultValue="about"
                                variant="enclosed"
                                size="lg"
                                w="100%"
                                fitted
                                colorPalette="teal">
                                <Tabs.List display="flex" flexWrap="wrap">
                                    <Tabs.Trigger value="about" minW="150px">
                                        <BsPersonSquare />
                                        About me
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="hobbies" minW="150px">
                                        <IoGameController />
                                        Hobbies
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="goals" minW="150px">
                                        <GoGoal />
                                        Goals
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="education" minW="150px">
                                        <IoSchool />
                                        Education
                                    </Tabs.Trigger>
                                    <Tabs.Indicator rounded="l2" />
                                </Tabs.List>

                                <Tabs.Content value="about">
                                    <AboutMe />
                                </Tabs.Content>
                                <Tabs.Content value="hobbies">
                                    <Hobbies />
                                </Tabs.Content>
                                <Tabs.Content value="goals">
                                    <Goals />
                                </Tabs.Content>
                                <Tabs.Content value="education">
                                    <Education />
                                </Tabs.Content>
                            </Tabs.Root>
                        </Card.Body>
                    </Card.Root>
                </Flex>
            </>}
        </Flex>
    );
}