import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/style/globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
    title: "Cardify",
    description: "Cardify is a modern flashcard application designed to help users learn or memorize things in an organized and interactive way. Think of it as a digital version of those paper flashcards you’d use to study for exams or quizzes, but with smart features.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
