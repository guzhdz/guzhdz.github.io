//Chakra imports
import {
  Flex
} from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

//Component imports
import Logo from "./Logo"
import NavBar from "./NavBar";
import MenuComponent from "./MenuComponent";


export default function Header() {
  return (
    <Flex w="100%" py={4} px={8}  pos="sticky" top="0" zIndex={1000} bg="black">
      <Logo />

      <NavBar />
      <MenuComponent />
    </Flex>
  );
}