import DashboardNavigation from "@/components/admin/dashboard-navigation";
import clsx from "clsx";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div
      className={clsx("flex w-full flex-col md:flex-row", poppins.className)}
    >
      <DashboardNavigation />
      {children}
    </div>
  );
};

export default DashboardLayout;
