"use client";

import Dashboard from "./dashboard";
import LoginCard from "./login-card";
import { useAuth } from "@/contexts/auth-context";

const Admin: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  console.log(isAuthenticated);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Dashboard /> : <LoginCard />;
};

export default Admin;
