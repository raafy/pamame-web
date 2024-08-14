import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

interface RootLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

const beachday = localFont({
  src: "../assets/fonts/beachday.ttf",
  display: "swap",
  variable: "--font-beachday",
});

const aurore = localFont({
  src: "../assets/fonts/aurore-grotesque.otf",
  display: "swap",
  variable: "--font-aurore",
});

export const metadata: Metadata = {
  title: "PaMaMe",
  description: "Always accompany, Love abundantly",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(poppins.variable, beachday.variable, aurore.variable)}
    >
      <body>{children}</body>
      <Script
        defer
        src="https://pamame.com/stats/script.js"
        data-website-id="9035ba62-6e0a-42f0-bab9-bb372f62d5b8"
      />
    </html>
  );
};

export default RootLayout;
