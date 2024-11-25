'use client'

//React/Next imports
import { useRouter } from "next/navigation";

//Chakra imports
import {
    Icon,
    Text,
    Group
} from "@chakra-ui/react"

//Library imports
import { FaLaptopCode } from "react-icons/fa";


export default function Logo() {
    const router = useRouter();

    const goHome = () => {
        router.push("/");
    }

    return (
        <Group onClick={goHome} cursor="pointer">
            <Icon color="teal.500" fontSize="xl">
                <FaLaptopCode />
            </Icon>
            <Text
                fontSize="xl"
                fontWeight="bold">
                Gustavo
            </Text>
        </Group>
    );
}