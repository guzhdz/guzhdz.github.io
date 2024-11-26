'use client'
//React/Next imports
import NextLink from "next/link"

//Chakra imports
import {
    Button,
    Group,
    Link
} from "@chakra-ui/react"

//Library imports
import { FaHome } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";

export default function NavBar() {
    return (
        <Group ml="auto" hideBelow="md">
            <Link asChild>
                <NextLink href="/">
                    <Button variant="ghost" size="lg">
                        <FaHome /> Home
                    </Button>
                </NextLink>
            </Link>
            <Link asChild>
                <NextLink href="/about">
                    <Button variant="ghost" size="lg">
                        <BiMessageDetail /> About
                    </Button>
                </NextLink>
            </Link>
            <Button variant="ghost" size="lg">
                <MdComputer /> Skills
            </Button>
            <Link asChild>
                <NextLink href="/projects">
                    <Button variant="ghost" size="lg">
                        <FaCode /> Projects
                    </Button>
                </NextLink>
            </Link>
            <Button variant="ghost" size="lg">
                <LuContact2 /> Contact
            </Button>
        </Group>
    );
}