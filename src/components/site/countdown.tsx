"use client";

import EmptyBoard from "@/assets/images/countdown/empty-board.svg";
import Head1 from "@/assets/images/countdown/heading-1.svg";
import Head2 from "@/assets/images/countdown/heading-2.svg";
import RegisterNow from "@/assets/images/countdown/register-now-board.svg";
import Image from "next/image";
import Link from "next/link";

interface CountdownProps {
  headType: 1 | 2;
}

const Countdown: React.FC<CountdownProps> = ({ headType }) => {
  // Countdown Logic
  const deadline = new Date("Oct 31, 2024 23:59:59").getTime();
  const now = new Date().getTime();
  const t = deadline - now;
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  return (
    <div className="flex w-fit flex-col items-center justify-center">
      <div className="z-10 flex h-auto w-auto flex-col contain-content">
        <Image
          priority
          src={headType === 1 ? Head1 : Head2}
          alt="Notice Head"
          style={{ width: "25vw" }}
        />
      </div>
      <div className="flex h-auto w-auto flex-col items-center justify-center contain-content">
        <Link href={"/register"}>
          <Image
            priority
            src={RegisterNow}
            alt="Register Now"
            style={{ width: "30vw" }}
          />
        </Link>
      </div>
      <div className="relative -z-10 -mt-[1.5vw] flex w-[80%] flex-col items-center justify-center contain-content">
        <Image
          priority
          src={EmptyBoard}
          alt="Days left Board"
          className="absolute -z-10 h-full w-[100%] object-contain object-top"
        />
        <p className="mt-[2vw] flex flex-col items-end justify-center pb-[5vw] font-aurore text-[2.5vw] text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
          {days} DAYS <br />
          <span className="-mt-[0.5vw] text-[1vw]">LEFT</span>
        </p>
      </div>
    </div>
  );
};

export default Countdown;
