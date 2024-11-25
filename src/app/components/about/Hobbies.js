//Chakra imports
import {
    Stack,
    Heading,
    Highlight,
    Text,
    Image,
    Group
} from "@chakra-ui/react"

export default function Hobbies() {
    return (
        <Stack py={4}>
            <Heading color="teal.500" size="3xl">My Hobbies</Heading>
            <Text textAlign="justify" fontSize="lg">
                I enjoy playing video games and watching movies, series, youtube videos, and animations (including animated films,
                shows, and anime). I also love spending time with family and friends, whether it’s playing video
                games together or enjoying board games. I’m passionate about sharing and discussing my hobbies and
                interests, but I also enjoy listening to others talk about the things they love.
            </Text>

            <Text textAlign="justify" mb={6} fontSize="lg">
                <Highlight
                    query={["programming", "coding"]}
                    styles={{ px: "0.5", bg: "teal.subtle", color: "teal.fg" }}
                    width="auto">
                    I love programming and creating apps, fully immersing myself in the process. When coding,
                    I often lose track of time, focusing entirely on bringing ideas to life.
                </Highlight>
            </Text>

            <Group>
                <Image
                    src="/hobbie-image.png"
                    alt="Videogame hobbie"
                    rounded="md"
                    w="280px"
                    mx="auto"
                />
            </Group>
        </Stack>
    );
}