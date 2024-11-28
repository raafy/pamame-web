import Image from "next/image";

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-y-4 p-6">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={200}
          height={200}
          className="lg:h-[300px] lg:w-[500px]"
        />
        <h1 className="text-center text-lg font-bold lg:text-4xl">
          This site is under construction. Please check back later.
        </h1>
      </div>
    </div>
  );
};

export default UnderConstruction;
