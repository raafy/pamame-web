import WhatsAppLink from "@/assets/icons/whatsapp.png";
import Navigation from "@/components/site/navigation";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Link from "next/link";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-grow select-none flex-col">
      <Navigation />
      <Toaster />
      {children}
      <div className="fixed bottom-4 right-4 z-10 drop-shadow">
        <Link href={"https://wa.link/ax7uc3"} target="_blank">
          <Image
            src={WhatsAppLink}
            alt={"WhatsApp Inquire More"}
            className="h-auto w-[120px] md:w-[200px]"
          />
        </Link>
      </div>
    </main>
  );
};

export default SiteLayout;
