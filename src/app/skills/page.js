"use client";
//Chakra imports
import {
  Flex,
  Text,
  Heading,
  Image,
  VStack,
  Grid,
  GridItem,
  Stack
} from "@chakra-ui/react";

//Component imports
import Header from "../components/header/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import LoadingPage from "../components/LoadingPage";
import SkillCategory from "../components/skills/SkillCategory";

//Context imports
import { useShared } from "../context/SharedContext";

export default function Skills() {
  const { particlesInit, setParticlesInit } = useShared();
  const skillsFrontend = [
    {
      name: "HTML",
      img: "/skills/html.png",
    },
    {
      name: "JavaScript",
      img: "/skills/js.png",
    },
    {
      name: "CSS",
      img: "/skills/css.png",
    },
    {
      name: "TypeScript",
      img: "/skills/ts.png",
    },
    {
      name: "React",
      img: "/skills/react.png",
    },
    {
      name: "Next.js",
      img: "/skills/nextjs.png",
    },
    {
      name: "Angular.js",
      img: "/skills/angular.png",
    },
    {
      name: "Vue.js",
      img: "/skills/vue.png",
    },
    {
      name: "Bootstrap",
      img: "/skills/bootstrap.png",
    },
    {
      name: "Material UI",
      img: "/skills/materialui.png",
    },
    {
      name: "Chakra UI",
      img: "/skills/chakra.png",
    },
    {
      name: "Ionic",
      img: "/skills/ionic.png",
    }
  ];
  const skillsBackend = [
    {
      name: "Node.js",
      img: "/skills/nodejs.png",
    },
    {
      name: "Firebase",
      img: "/skills/firebase.png",
    },
    {
      name: "PostgreSQL",
      img: "/skills/postgre.png",
    },
    {
      name: "MySQL",
      img: "/skills/mysql.png",
    },
    {
      name: "Prisma ORM",
      img: "/skills/prisma.png",
    },
    {
      name: "Python",
      img: "/skills/python.png",
    }
  ];
  const otherSkills = [
    {
      name: "Python",
      img: "/skills/python.png",
    },
    {
      name: "C/C++",
      img: "/skills/c++.png",
    },
    {
      name: "VSCode",
      img: "/skills/vscode.png",
    },
    {
      name: "GitHub",
      img: "/skills/github.png",
    },
    {
      name: "AWS",
      img: "/skills/aws.png",
    },
    {
      name: "Google Cloud",
      img: "/skills/google-cloud.png",
    },
    {
      name: "Figma",
      img: "/skills/figma.png",
    },
    {
      name: "Scrum",
      img: "/skills/scrum.png",
    },
    {
      name: "Data structures",
      img: "/skills/datastruct.png",
    },
    {
      name: "AI Bases",
      img: "/skills/ai.png",
    }
  ];

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
            direction="column"
            px={{ base: "30px", md: "50px", xl: "120px" }}
            py={10}
          >
            <Heading
              size="3xl"
              mb={10}
              data-state="open"
              _open={{
                animation: "appear 1.1s ease-in-out",
              }}
            >
              My Skills
            </Heading>

            <SkillCategory name="Frontend" skills={skillsFrontend} />

            <SkillCategory name="Backend & Database" skills={skillsBackend} />

            <SkillCategory name="Other Skills" skills={otherSkills} last={true} />
          </Flex>
        </>
      )}
    </Flex>
  );
}
