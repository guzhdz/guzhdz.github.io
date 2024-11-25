'use client'
//Chakra imports
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { ThemeProvider } from "next-themes"
import { system } from "../themes/theme";

//Theme imports
//import theme from "../theme/theme.js";

export default function ChakraUIProvider({ children }) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider>
                {children}
            </ColorModeProvider>
        </ChakraProvider>
    );
}