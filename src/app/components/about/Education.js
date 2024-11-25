//Chakra imports
import {
    Stack,
    Heading,
    Separator,
    Text,
    Image,
    Group
} from "@chakra-ui/react"

export default function Eduacation() {
    return (
        <Stack py={4}>
            <Heading color="teal.500" size="2xl">Computer Engineer</Heading>
            <Text textAlign="justify" fontSize="lg">
                University of Guadalajara
            </Text>
            <Text textAlign="justify" fontSize="lg">
                Aug 2020 - Jun 2024 (Degree procedures)
            </Text>

            <Text textAlign="justify" fontSize="lg">
                I learned the agile methodologies bases, as well as AI/Machine Learning Bases.
                Graduated by academic excellence with a grade point of 97.02 (GPA: 3.85).
            </Text>

            <Separator size="lg" colorPalette="teal" my={2}/>

            <Heading color="teal.500" size="2xl">Software Development Technologist (Degree)</Heading>
            <Text textAlign="justify" fontSize="lg">
                Centro de Enseñanza Tecnológica e Industrial (CETI Colomos)
            </Text>
            <Text textAlign="justify" fontSize="lg">
                Aug 2016 - Jun 2020
            </Text>

            <Text textAlign="justify" mb={4} fontSize="lg">
                I learned the logic programming importance and Data Structures and OOP(Object Oriented Programming) bases.
                Graduated by academic excellence with a grade point of 93.04 (GPA: 3.65)
            </Text>

            <Group>
                <Image
                    src="/education-image.png"
                    alt="Education Image"
                    rounded="md"
                    w="250px"
                    mx="auto"
                />
            </Group>
        </Stack>
    );
}