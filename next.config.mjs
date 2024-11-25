/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    output: "export",  // <=== enables static exports
    distDir: 'dist',
};

export default nextConfig;
