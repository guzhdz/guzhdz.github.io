//Chakra imports
import {
    Stack,
    Heading,
    Highlight,
    Text,
    Image,
    Group,
    List
} from "@chakra-ui/react"

//Library imports
import { FaArrowCircleRight } from "react-icons/fa";

export default function Goals() {
    return (
        <Stack py={4}>
            <Heading color="teal.500" size="3xl">Current Goals</Heading>
            <List.Root fontSize="lg" textAlign="justify" variant="plain" mb={6} gap={2}>
                <List.Item>
                    <List.Indicator asChild color="teal.500">
                        <FaArrowCircleRight />
                    </List.Indicator>
                    Learn new things about programming, software development, UI/UX design and everything related to my carrer.
                </List.Item>
                <List.Item>
                    <List.Indicator asChild color="teal.500">
                        <FaArrowCircleRight />
                    </List.Indicator>
                    Design and create high quality apps that users like.
                </List.Item>
                <List.Item>
                    <List.Indicator asChild color="teal.500">
                        <FaArrowCircleRight />
                    </List.Indicator>
                    Attend tech conferences or workshops to network and stay updated.
                </List.Item>
                <List.Item>
                    <List.Indicator asChild color="teal.500">
                        <FaArrowCircleRight />
                    </List.Indicator>
                    Continue to earn certifications that will help me in my carrer.
                </List.Item>
                <List.Item>
                    <List.Indicator asChild color="teal.500">
                        <FaArrowCircleRight />
                    </List.Indicator>
                    Travel to another country (Japan, Italy, Peru, USA).
                </List.Item>
            </List.Root>

            <Group>
                <Image
                    src="/goals-image.png"
                    alt="Programming goals"
                    rounded="md"
                    w="250px"
                    mx="auto"
                />
            </Group>
        </Stack>
    );
}