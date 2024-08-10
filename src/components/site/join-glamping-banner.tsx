import BackgroundWhite from "@/assets/images/component/join-glamping-banner/bg-white.svg";
import BackgroundYellow from "@/assets/images/component/join-glamping-banner/bg-yellow.svg";
import CampInfo from "@/assets/images/component/join-glamping-banner/camp-lu-ying-info.svg";
import Image from "next/image";
import Countdown from "./countdown";

interface JoinGlampingBannerProps {
  color: string;
}

const JoinGlampingBanner: React.FC<JoinGlampingBannerProps> = ({ color }) => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-4 contain-content">
      <Image
        priority
        src={color === "yellow" ? BackgroundYellow : BackgroundWhite}
        alt="Background Wave"
        className="absolute -z-10 h-full w-[100vw] object-cover object-top"
      />
      <div className="flex items-center gap-[3vw] pt-[14vw]">
        <div className="flex flex-col items-end gap-[2vw]">
          <Image
            priority
            src={CampInfo}
            style={{ width: "40vw", height: "auto" }}
            alt="Info"
          />
        </div>
        <Countdown headType={2} />
      </div>
    </div>
  );
};

export default JoinGlampingBanner;
