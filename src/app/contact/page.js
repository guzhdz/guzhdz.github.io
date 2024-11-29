"use client";
//Chakra imports
import {
    Flex,
    Heading,
    Image,
    Stack,
    Button,
    Link
} from "@chakra-ui/react";

//Component imports
import Header from "../components/header/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import LoadingPage from "../components/LoadingPage";

//Context imports
import { useShared } from "../context/SharedContext";

//Library imports
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaDownload } from "react-icons/fa";

export default function Contact() {
    const { particlesInit, setParticlesInit } = useShared();
    const contacts = [
        {
            name: "guzhdz28@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&to=guzhdz28@gmail.com",
            icon: <IoMdMail />,
            title: "Send me an email"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/guzhdz",
            icon: <FaLinkedin />,
            title: "Connect with me on Linkedin"
        },
        {
            name: "GitHub",
            link: "https://github.com/guzhdz",
            icon: <FaGithub />,
            title: "Check out my GitHub profile"
        },
        {
            name: "+55 3312199949",
            link: "tel:+553312199949",
            icon: <FaPhoneAlt />,
            title: "Call me"
        },
        {
            name: "Resume",
            link: "/Resume.pdf",
            icon: <FaDownload />,
            title: "Download my resume"
        }
    ]
    return (
        <Flex
            w="100%"
            minH="100vh"
            direction="column"
            className="dark"
        >
            <ParticlesBackground init={particlesInit} setInit={setParticlesInit} />

            {!particlesInit && <LoadingPage />}

            {particlesInit && (
                <>
                    <Header />

                    <Flex
                        w="100%"
                        minH="90vh"
                        align="center"
                        justify="center"
                        direction="column"
                        px={{ base: "30px", md: "50px", xl: "120px" }}
                        py={10}
                    >
                        <Heading
                            size="3xl"
                            mb={2}
                            data-state="open"
                            _open={{
                                animation: "appear 1.1s ease-in-out",
                            }}
                        >
                            Contact me
                        </Heading>

                        <Image
                            src="/contact-image.png"
                            alt="Contact image"
                            height="300px"
                            mb={4}
                            data-state="open"
                            _open={{
                                animation: "appear 1.1s ease-in-out",
                            }}/>

                        <Stack gap={8}>
                            {contacts.map((contact, index) => (
                                <Link
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    title={contact.title}
                                    opacity={0}
                                    data-state="open"
                                    _open={{
                                        animation: "slide-in 1.1s ease-in-out",
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: "forwards",
                                    }}>
                                    <Button size="xl" borderRadius="full" colorPalette="teal" variant="surface" w={"300px"}>
                                        {contact.icon}
                                        {contact.name}
                                    </Button>
                                </Link>
                            ))}
                        </Stack>

                    </Flex>
                </>
            )}
        </Flex>
    );
}
