import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Suheb Ahmed",
  description: "Suheb ahmed - Product Designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
