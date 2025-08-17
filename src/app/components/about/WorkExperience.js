//Chakra imports
import {
    Stack,
    Heading,
    Separator,
    Text,
    Image,
    Group
} from "@chakra-ui/react"

export default function WorkExperience() {
    return (
        <Stack py={4}>
            <Heading color="teal.500" size="2xl">Oracle</Heading>
            <Text textAlign="justify" fontSize="lg">
                Member of Technical Staff (Software Developer 1)
            </Text>
            <Text textAlign="justify" fontSize="lg">
                January 2025 - Currently working
            </Text>

            <Text textAlign="justify" fontSize="lg">
                Functions: Support, management, fix bugs, build UI testing, and develop new functionalities for 
                Oracle Cloud Infastructure service (Web Frontend). On-call shifts to fix and attend customer 
                issues and applications alarms.
            </Text>

            <Text textAlign="justify" fontSize="lg" mb={6}>
                Used technology: Javascript, CSS, HTML, SASS, Typescript, Git,
                Bitbucket, Jira, Oracle JET, Oracle Cloud Infrastructure.
            </Text>

            <Group>
                <Image
                    src="/oracle-image.jpg"
                    alt="Oracle MDC"
                    rounded="md"
                    w="250px"
                    mx="auto"
                />
            </Group>
        </Stack>
    );
}