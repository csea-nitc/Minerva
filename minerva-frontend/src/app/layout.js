import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Minerva - CSED NITC",
  description:
    "The official website of the Department of Computer Science and Engineering NIT Calicut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
