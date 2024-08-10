import AccommodationBanner from "@/assets/images/home/accommodation-banner.svg";
import Banner4 from "@/assets/images/kids/banner-4.svg";
import Background from "@/assets/images/kids/bg-1.svg";
import HALBanner from "@/assets/images/kids/hal-banner.svg";
import JoinBannerHead from "@/assets/images/kids/join-banner-head.svg";
import Countdown from "@/components/site/countdown";
import JoinGlampingBanner from "@/components/site/join-glamping-banner";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PaMaMe - Little Hero Challenge",
};

const LittleHeroChallenge: React.FC = () => {
  return (
    <article>
      <section>
        <Image
          priority
          src="/kids/kids-hero-banner.svg"
          alt="Hero"
          width={1920}
          height={500}
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className="absolute right-[5vw] top-[24vw] z-10">
          <Countdown headType={2} />
        </div>
      </section>
      <section className="flex flex-col items-center contain-content">
        <Image
          priority
          src={Background}
          alt="Background Image"
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/kids/kids-section-1.svg"
          alt="Section One - Little Hero Exploration"
          width={1920}
          height={1920}
          style={{
            width: "80vw",
            height: "auto",
          }}
          className="mx-[5vw] mb-[10vw] mt-[15vw]"
        />
      </section>
      <Image
        priority
        src={HALBanner}
        alt="Highlight Activities & Learning Banner"
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-[15vw] md:h-auto"
      />
      <section className="flex flex-col items-center contain-content">
        <Image
          priority
          src={Background}
          alt="Background Image"
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/kids/kids-section-2.svg"
          alt="Section Two - Highlight Activities & Learning"
          width={1920}
          height={1920}
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="ml-[5vw] p-[10vw]"
        />
        <JoinGlampingBanner color="yellow" />
      </section>
      <Image
        priority
        src="/kids/kids-kiwi-mushroom-banner.svg"
        alt="Teacher Kiwi & Mushroom"
        width={1920}
        height={500}
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-auto"
      />
      <section className="flex flex-col items-center">
        <Image
          priority
          src={Background}
          alt="Background Image"
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/kids/kids-section-3.svg"
          alt="Section Three - Little Heroes Wilderness Cooking"
          width={1920}
          height={1920}
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="my-[10vw] ml-[-5vw] p-[5vw]"
        />
      </section>
      <Image
        priority
        src={Banner4}
        alt="Coach Wendy Banner"
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-auto"
      />
      <section className="flex flex-col items-center">
        <Image
          priority
          src={Background}
          alt="Background Image"
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/kids/kids-section-4.svg"
          width={1920}
          height={1920}
          alt="Section Four - Little Heroes Wilderness Cooking"
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="p-[5vw]"
        />
        <Image
          priority
          src={JoinBannerHead}
          alt="More Exciting Activities Await You!"
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="z-10 mb-[-12vw]"
        />
      </section>
      <JoinGlampingBanner color="yellow" />
      <Image
        priority
        src={AccommodationBanner}
        alt="Glamping Accommodation Banner"
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-[20vw] md:h-auto"
      />
      <Image
        priority
        src="/home/camp-lu-ying-accommodation.svg"
        alt="Camp Yu Ling Accommodation"
        width={1920}
        height={2649}
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        className="h-[170vw] w-[100vw] md:h-auto"
      />
      <JoinGlampingBanner color="yellow" />
    </article>
  );
};

export default LittleHeroChallenge;
