import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth-context";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main>
      <AuthProvider>{children}</AuthProvider>
      <Toaster />
    </main>
  );
};

export default DashboardLayout;
