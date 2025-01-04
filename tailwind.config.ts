import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4F46E5",
                    light: "#6366F1",
                    dark: "#3730A3",
                },
                secondary: {
                    DEFAULT: "#10B981",
                    light: "#34D399",
                    dark: "#047857",
                },
                neutral: {
                    light: "#F9FAFB",
                    DEFAULT: "#E5E7EB",
                    dark: "#6B7280",
                },
                danger: {
                    DEFAULT: "#EF4444",
                    light: "#F87171",
                    dark: "#B91C1C",
                },
                warning: {
                    DEFAULT: "#F59E0B",
                    light: "#FBBF24",
                    dark: "#B45309",
                },
                info: {
                    DEFAULT: "#3B82F6",
                    light: "#60A5FA",
                    dark: "#1D4ED8",
                },
                background: {
                    light: "#FFFFFF",
                    muted: "#F3F4F6",
                    dark: "#1F2937",
                },
                text: {
                    primary: "#111827",
                    secondary: "#4B5563",
                    accent: "#4F46E5",
                    muted: "#9CA3AF",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
