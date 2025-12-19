import "@/app/globals.css";
import Navbar from "@/components/ui/desktop/Navbar";
import Hamburguer from "@/components/ui/mobile/Hamburguer";

export const metadata = {
  title: "Vocatio - Gestión de Personas, Eventos y Donaciones",
  description: "La plataforma más simple para gestionar personas, eventos y donaciones de tu organización",
};

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <html lang="en">
      <head>
        <title>Vocatio - Gestión de Personas, Eventos y Donaciones</title>
      </head>
      <body >
        <header>
          <Hamburguer />
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}


export default PublicLayout;