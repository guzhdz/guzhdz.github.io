//Chakra imports
import {
    Card,
    Image,
    Badge,
    Group,
    Link,
    Button
} from "@chakra-ui/react"

//Library imports
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
    const getStatusColor = (status) => {
        switch (status) {
            case "In progress":
                return "blue";
            case "Finished":
                return "green";
            default:
                return "gray";
        }
    }

    return (
        <Card.Root h={"100%"}>
            <Image
                src={project.image}
                alt="Project image"
                h="250px"
                borderTopRadius="md"
            />
            <Card.Body>
                <Card.Title color="teal.500" mb={4}>{project.title}</Card.Title>
                <Group mb={6}>
                    {project.deploy && <Badge colorPalette="teal">Deployed</Badge>}
                    <Badge colorPalette={getStatusColor(project.status)}>{project.status}</Badge>
                </Group>

                <Card.Description textAlign="justify" mb={4}>
                    {project.description}
                </Card.Description>
                <Card.Description mb={6}>
                    Technologies: {project.techs.join(", ")}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                {project.deploy && <Link
                    href={project.deploy}
                    target="_blank"
                    title="Page link">
                    <Button colorPalette="teal" size="sm">
                        <LuExternalLink />
                        View
                    </Button>
                </Link>}

                <Link
                    href={project.github}
                    target="_blank"
                    title="GitHub link">
                    <Button variant="outline" colorPalette="teal" size="sm">
                        <FaGithub />
                        GitHub
                    </Button>
                </Link>
            </Card.Footer>
        </Card.Root>
    );
}