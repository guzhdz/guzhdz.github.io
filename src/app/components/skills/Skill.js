"use client";
//Chakra imports
import {
    Text,
    Image,
    VStack,
    GridItem,
} from "@chakra-ui/react";


export default function Skill({ skill, index }) {
    return (
        <GridItem
            key={index}
            data-state="open"
            opacity={0}
            _open={{
                animation: "slide-in .6s ease-in-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
            }}
        >
            <VStack>
                <Image
                    src={skill.img}
                    alt={skill.name}
                    width="60px"
                    height="60px"
                    objectFit="contain"
                    mb={2}
                />
                <Text fontSize="lg">{skill.name}</Text>
            </VStack>
        </GridItem>
    );
}