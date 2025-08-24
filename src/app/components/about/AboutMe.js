//Chakra imports
import {
    Stack,
    Heading,
    Highlight,
    Text,
    Image,
    Group
} from "@chakra-ui/react"

export default function AboutMe() {
    return (
        <Stack py={4}>
            <Heading color="teal.500" size="3xl">A little about me</Heading>
            <Text textAlign="justify" fontSize="lg">
                <Highlight
                    query={["Computer Engineering", "Software Development Technologist", "Software Developer 1", "Oracle"]}
                    styles={{ px: "0.5", bg: "teal.subtle", color: "teal.fg" }}
                    width="auto">
                    I am an ex - Software Developer 1 at Oracle, Computer Engineering graduate and Software Development Technologist, aspiring to 
                    Web FullStack Developer.  With knowledge in technologies like JavaScript, HTML, CSS, Node.js, React, Vue and Angular. 
                    I  am passionate about learning new technological tools and applying them to create functional, high-quality and amazing applications.
                    I am committed to efficient solutions, continuous learning, and team collaboration to bring real value to projects.
                </Highlight>
            </Text>

            <Text textAlign="justify" mb={6} fontSize="lg">
                <Highlight
                    query="Javascript"
                    styles={{ px: "0.5", bg: "teal.subtle", color: "teal.fg" }}
                    width="auto">
                    Javascript is my favorite programming language!!
                </Highlight>
            </Text>


            <Group>
                <Image
                    src="/about-image.jpg"
                    alt="Gustavo Hernández Cano Photo"
                    rounded="md"
                    h="200px"
                    w="400px"
                    fit="cover"
                    mx="auto"
                />
            </Group>
        </Stack>
    );
}