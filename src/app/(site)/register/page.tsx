import RegisterForm from "@/components/site/register-form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PaMaMe - Register Now",
};

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-center">
      <Image
        src="/images/reg/reg-banner.webp"
        alt={"Glamping Banner"}
        width={1277}
        height={521}
        className="h-auto w-full"
        priority
      />
      <div className="relative mt-[20px] h-auto w-full contain-content">
        <div className="flex flex-col items-center p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
