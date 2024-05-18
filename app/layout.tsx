import type { Metadata } from "next";
import "./globals.css"; 
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Libor Hroza", // title of tab in browser
  description: "Taking your climbing to the next level", // description of website

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
