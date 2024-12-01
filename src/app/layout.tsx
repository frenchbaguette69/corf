import React from "react";
import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.css";
import "../app/styles/meanmenu.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/flaticon.css";
import "../../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../app/styles/style.css";
import "../app/styles/responsive.css";
import "./globals.css";
 
import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import AosAnimation from "@/components/Layouts/AosAnimation";

// For all body text font
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

// For all heading font
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "rTMS Kliniek - Innovatieve Behandelingen voor Mentale Gezondheid",
  description: "Ontdek veilige en effectieve behandelingen voor depressie en angst met rTMS therapie bij rTMS Kliniek. Professionele zorg en bewezen resultaten.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${roboto.variable}`}>
      <body>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
