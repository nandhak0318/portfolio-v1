import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nandha Kumar's Portfolio",
  description: "Portfolio of nandhakumar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{'cursor':'none'}} className={`${inter.className} bg-pale-skin custom-bg`}>
        {children}
        </body>
    </html>
  );
}
