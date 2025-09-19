import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyContact from "./components/StickyContact";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToggleButton from "./components/ScrollToggleButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-app" });

export const metadata = {
  title: "Digital marketing agency Chennai, Best Digital marketing company near me, Ayatiworks",
  description: "Fuel business growth with content-led Digital Marketing Agency Chennai using Content As A Strategy, from ideation to Return on Investment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Add your icons */}
        <link rel="icon" href="/fav-icon.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <Loader />
        <ScrollProgressBar />
        <ScrollToggleButton />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
