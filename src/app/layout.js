import localFont from "next/font/local";
import "./globals.css";

//Provider imports
import ChakraUIProvider from "./providers/ChakraUIProvider";
import { SharedProvider } from "./context/SharedContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gustavo Hernández Cano",
  description: "Gustavo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraUIProvider>
          <SharedProvider>
            {children}
          </SharedProvider>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
