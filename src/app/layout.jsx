import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollControls from "./components/ScrollControls";
import StickyContact from "./components/StickyContact";

const inter = Inter({ subsets: ["latin"], variable: "--font-app" });

export const metadata = {
  title: "Ayatiworks",
  description: "Next.js + Tailwind v4 starter with scroll UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
        <ScrollControls />
      </body>
    </html>
  );
}
