import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth-context";
import { Inter } from "next/font/google";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <main className={inter.className}>
      <AuthProvider>{children}</AuthProvider>
      <Toaster />
    </main>
  );
};

export default AdminLayout;
