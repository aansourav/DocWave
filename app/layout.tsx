import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Provider from "./Provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "DocWave",
    description: "Collaborative Go to Documenting",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: "#3371FF",
                    fontSize: "16px",
                },
            }}
        >
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <Provider>{children}</Provider>
                </body>
            </html>
        </ClerkProvider>
    );
}
