import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Instrument_Sans, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import Footer from "@/components/shared/footer";
import Dock from "@/components/shared/dock";

const katsumi = localFont({
  src: "/fonts/KATSUMI.ttf",
  variable: "--font-katsumi",
});

const drip = localFont({
  src: "/fonts/adrip1.ttf",
  variable: "--font-drip",
});

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// const koushikiSans = localFont({
//   src: [
//     {
//       path: "/fonts/KoushikiSans-Thin.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "/fonts/KoushikiSans-Light.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/fonts/KoushikiSans-Regular.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-KoushikiSans",
// });

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
      <body className={`${jakartaSans.className} ${instrumentSans.className} ${poppins.className}  ${katsumi.className} ${drip.className}  font-poppins antialiased`}>
        <Dock />
        {children}
        <Footer />
      </body>
    </html>
  );
}
