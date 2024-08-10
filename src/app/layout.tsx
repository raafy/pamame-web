import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

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
};

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(poppins.variable, beachday.variable, aurore.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="w-dvw min-h-dvh">{children}</body>
    </html>
  );
};

export default RootLayout;
