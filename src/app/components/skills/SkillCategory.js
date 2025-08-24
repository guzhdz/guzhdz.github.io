"use client";
//Chakra imports
import {
    Heading,
    Grid,
    Stack
} from "@chakra-ui/react";

//Component imports
import Skill from "./Skill";


export default function SkillCategory({ name, skills, last = false }) {
    return (

        <Stack mb={ last ? 0 : 20}>
            <Heading size="xl" mb={4} color="teal.500"
                data-state="open"
                _open={{
                    animation: "appear 1.1s ease-in-out",
                }}>
                {name}
            </Heading>
            <Grid
                templateColumns={{
                    base: "repeat(auto-fill, minmax(100px, 1fr))",
                    md: "repeat(auto-fill, minmax(150px, 1fr))",
                }}
                gap={10}
                w="100%"
            >
                {skills.map((skill, index) => (
                    <Skill key={index} skill={skill} index={index} />
                ))}
            </Grid>
        </Stack>
    );
}