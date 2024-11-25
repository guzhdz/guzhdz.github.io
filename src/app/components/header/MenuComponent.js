//React/Next imports
import { useRouter } from "next/navigation";

//Chakra imports
import {
    IconButton,
    Box
} from "@chakra-ui/react"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"

//Library imports
import { BiMessageDetail } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

export default function MenuComponent() {
    const router = useRouter();

    const goTo = (path) => {
        router.push(path);
    }
    return (
        <Box ml="auto" hideFrom="md">
            <MenuRoot >
                <MenuTrigger asChild>
                    <IconButton variant="ghost">
                        <IoMenu />
                    </IconButton>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="about" onClick={() => goTo("/about")}>
                        <BiMessageDetail /> About
                    </MenuItem>
                    <MenuItem value="skills">
                        <MdComputer /> Skills
                    </MenuItem>
                    <MenuItem value="projects">
                        <FaCode /> Projects
                    </MenuItem>
                    <MenuItem value="contact">
                        <LuContact2 /> Contact
                    </MenuItem>
                </MenuContent>
            </MenuRoot>
        </Box>
    );
}