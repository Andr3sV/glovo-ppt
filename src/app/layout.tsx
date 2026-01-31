import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glovo Privacy & Compliance Presentation",
  description: "Data Protection, Privacy & Compliance Scenarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-glovo-yellow min-h-screen font-montserrat">
        {children}
      </body>
    </html>
  );
}
