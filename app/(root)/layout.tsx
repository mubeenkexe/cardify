import Header from "@/components/layout/Header";

export default function RootLayout({
    children,
}: Readonly<Children>) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}