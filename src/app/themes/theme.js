import { createSystem, defaultBaseConfig, defineConfig, defaultConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: {
                    50: { value: "#e3f0f0" },
                    100: { value: "#badbd9" },
                    200: { value: "#90c4c0" },
                    300: { value: "#6caca7" },
                    400: { value: "#599b94" },
                    500: { value: "#4f8a82" },
                    600: { value: "#4a7d76" },
                    700: { value: "#446d67" },
                    800: { value: "#3f5d58" },
                    900: { value: "#31423e" },
                }
            },
        },
        semanticTokens: {
            colors: {
                primary: {
                    solid: { value: "{colors.primary.500}" },
                    contrast: { value: "{colors.primary.900}" },
                    fg: { value: "{colors.primary.700}" },
                    muted: { value: "{colors.primary.100}" },
                    subtle: { value: "{colors.primary.200}" },
                    emphasized: { value: "{colors.primary.300}" },
                    focusRing: { value: "{colors.primary.500}" },
                },
            }
        }
    },
})

export const system = createSystem(defaultBaseConfig, defaultConfig, customConfig)