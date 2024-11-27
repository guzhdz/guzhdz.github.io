"use client";
//Chakra imports
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

//Component imports
import Header from "../components/header/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import LoadingPage from "../components/LoadingPage";
import ProjectCard from "../components/projects/ProjectCard";

//Context imports
import { useShared } from "../context/SharedContext";

export default function Projects() {
    const { particlesInit, setParticlesInit } = useShared();
    const projects = [
        {
            title: "ItranForms",
            description:
                "Web application that allows you to create, edit and manage your templates, as allow other users to answer the templates as forms. is similar to Google Forms.",
            techs: [
                "Next.js",
                "React.js (Javascript, CSS, HTML)",
                "GitHub",
                "Node.js",
                "PostgreSQL",
                "Prisma ORM",
                "Chakra UI",
            ],
            image: "/projects/ItranForms.png",
            deploy: "https://itrasition-course-project.onrender.com",
            github: "https://github.com/guzhdz/Itrasition-Course-Project",
            status: "In progress",
        },
        {
            title: "My website",
            description:
                "A comprehensive portfolio showing my skills, personal projects, educational background, and contact information. Created to showcase my potential and connect with future opportunities.",
            techs: [
                "Next.js",
                "React.js (Javascript, CSS, HTML)",
                "GitHub",
                "Chakra UI",
            ],
            image: "/projects/Portfolio.png",
            deploy: "https://guzhdz.github.io/",
            github: "https://github.com/guzhdz/guzhdz.github.io",
            status: "In progress",
        },
        {
            title: "Data Faker",
            description:
                "Web application that allows to generate fake random data based on a seed, the sees as other parameters can be modify by the user to change the generate data.",
            techs: [
                "Next.js",
                "React.js (Javascript, CSS, HTML)",
                "GitHub",
                "Node.js",
                "Material UI.",
            ],
            image: "/projects/DataFaker.png",
            deploy: "https://itrasition-task-5.onrender.com/",
            github: "https://github.com/guzhdz/Itrasition-Task-5",
            status: "Finished",
        },
        {
            title: "Login Page and User Manager",
            description:
                "Web application that allows you to create, edit and manage your templates, as allow other users to answer the templates as forms. is similar to Google Forms.",
            techs: [
                "Next.js",
                "React.js (Javascript, CSS, HTML)",
                "GitHub",
                "Node.js",
                "PostgreSQL",
                "Prisma ORM",
                "Bootstrap",
            ],
            image: "/projects/LoginPage.png",
            deploy: "https://itrasition-task-4.onrender.com/",
            github: "https://github.com/guzhdz/Itrasition-task-4",
            status: "Finished",
        },
        {
            title: "CleverTrip",
            description:
                "Web application that provides a tourist places search system, an artificial intelligence recommendation system, and a trip planner.",
            techs: [
                "Angular (Typescript, Javascript, CSS, HTML)",
                "Firebase",
                "Google Apis",
                "Google Cloud",
                "AWS (Lambda, Api Gateway)",
                "Node.js",
                "GitHub",
                "Figma",
            ],
            image: "/projects/Clevertrip.png",
            deploy: "https://clevertrip-59cb1.web.app/",
            github: "https://github.com/guzhdz/CleverTrip",
            status: "Finished",
        },
        {
            title: "Mini compiler",
            description:
                "Web application that allows to insert base C (programming language) code, it analyses and detects errors, and then compiles the code. Also generates a file with the equivalent assembly code.",
            techs: ["Angular (Typescript, Javascript, SCSS, HTML)", "GitHub", "OOP"],
            image: "/projects/MiniCompiler.png",
            deploy: "https://guzhdz.github.io/minicompilador-page/",
            github: "https://github.com/guzhdz/minicompilador",
            status: "Finished",
        },
    ];

    return (
        <Flex w="100%" minH="100vh" direction="column" className="dark">
            <ParticlesBackground init={particlesInit} setInit={setParticlesInit} />

            {!particlesInit && <LoadingPage />}

            {particlesInit && (
                <>
                    <Header />

                    <Flex
                        w="100%"
                        minH="90vh"
                        direction="column"
                        py={10}
                        px={{ base: "30px", md: "50px", xl: "120px" }}
                    >
                        <Heading
                            size="3xl"
                            mb={10}
                            data-state="open"
                            _open={{
                                animation: "appear 1.1s ease-in-out",
                            }}
                        >
                            My Projects
                        </Heading>

                        <Grid
                            templateColumns={{
                                base: "repeat(auto-fill, minmax(300px, 1fr))",
                                md: "repeat(auto-fill, minmax(400px, 1fr))",
                            }}
                            gap={6}
                            w="100%"
                        >
                            {projects.map((project, index) => (
                                <GridItem
                                    key={index}
                                    data-state="open"
                                    opacity={0}
                                    _open={{
                                        animation: "slide-in .8s ease-in-out",
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: "forwards",
                                    }}
                                >
                                    <ProjectCard project={project} />
                                </GridItem>
                            ))}
                        </Grid>
                    </Flex>
                </>
            )}
        </Flex>
    );
}