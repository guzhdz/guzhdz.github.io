'use client'
//Chakra imports
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../themes/theme";

export default function ChakraUIProvider({ children }) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider forcedTheme="dark">
                {children}
            </ColorModeProvider>
        </ChakraProvider>
    );
}