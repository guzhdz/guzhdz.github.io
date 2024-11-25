'use client'

//React imports
import { useState, useEffect, useMemo } from "react";

//Chakra imports
import {
    Box
} from "@chakra-ui/react"

//Library imports
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ init, setInit }) {
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#111111",
                },
                image: "linear-gradient(to bottom, #111111, #27272a)",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#14b8a6",
                },
                links: {
                    color: "#14b8a6",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "edge",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Box
                pos="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={-1}>
                <Particles
                    id="tsparticles"
                    init={loadSlim}
                    options={options}
                />
            </Box>
        );
    }

    return <></>;
};