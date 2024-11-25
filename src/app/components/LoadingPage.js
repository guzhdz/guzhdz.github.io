//Chakra imports
import {
    Flex,
    Spinner
} from "@chakra-ui/react"

export default function LoadingPage() {
    return (
        <Flex
            w="100%"
            align="center"
            justify="center"
            minH="100vh">
            <Spinner
                size="xl"
                color="colorPalette.500"
                colorPalette="teal" />
        </Flex>
    );
}