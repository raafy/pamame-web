import UnderConstruction from "@/components/site/under-construction";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
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
  openGraph: {
    type: "website",
    url: "https://pamame.com",
    title: "PaMaMe",
    description: "Always accompany, Love abundantly",
    siteName: "PaMaMe",
    images: [
      {
        url: "https://pamame.com/og-image.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PaMaMe",
    description: "Always accompany, Love abundantly",
    site: "@site",
    creator: "@creator",
    images: "https://pamame.com/og-image.png",
  },
};

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({ children }) => {
  const isUnderConstruction =
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true";

  if (isUnderConstruction) {
    return (
      <html lang="en" className={clsx(poppins.variable, beachday.variable)}>
        <body>
          <UnderConstruction />
        </body>
      </html>
    );
  }

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
