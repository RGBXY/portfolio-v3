import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import localFont from "next/font/local";
import { Instrument_Sans, Montserrat } from "next/font/google";
import Footer from "@/components/shared/footer";

const katsumi = localFont({
  src: "/fonts/KATSUMI.ttf",
  variable: "--font-katsumi",
});

const koushikiSans = localFont({
  src: [
    {
      path: "/fonts/KoushikiSans-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/KoushikiSans-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/KoushikiSans-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-KoushikiSans",
});

const instrumentSans = Instrument_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derren Amadeo",
  description: "Portfolio Derren Amadeo Hermawan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${katsumi.className} ${koushikiSans.className} ${instrumentSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
