import "@/app/globals.css";

import SideBar from "@/components/ui/desktop/Sidebar";
import MobileSidebar from "@/components/ui/mobile/Sidebar";

export const metadata = {
    title: "Vocatio - Panel de Control",
    description: "Plataforma de gestión para organizaciones",
};

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <html lang="es">
            <head>
                <title>Vocatio - Panel de Control</title>
            </head>
            <body>
                {/* Desktop Sidebar */}
                <div className="desktop-only">
                    <SideBar />
                </div>

                {/* Mobile Sidebar */}
                <div className="mobile-only">
                    <MobileSidebar />
                </div>

                {children}
            </body>
        </html>
    );
}


export default UserLayout;