import SideBar from "@/components/layout/SideBar";

export default function RootLayout({
    children,
}: Readonly<Children>) {
    return (
        <div className='flex'>
            <SideBar />
            {children}
        </div>
    );
}