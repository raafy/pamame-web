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
          src="/images/kids/kids-hero-banner.webp"
          alt="Kids Hero Banner"
          width={1007}
          height={351}
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
          src="/images/bg/kids-bg.webp"
          alt="Background Image"
          width={1007}
          height={1456}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/kids-s1.webp"
          alt="Section One - Little Hero Exploration"
          width={941}
          height={1169}
          style={{
            width: "80vw",
            height: "auto",
          }}
          className="mx-[5vw] mb-[10vw] mt-[15vw]"
        />
      </section>
      <Image
        priority
        src="/images/kids/kids-highlights-banner.webp"
        alt="Highlight Activities & Learning Banner"
        width={1007}
        height={154}
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-[15vw] md:h-auto"
      />
      <section className="flex flex-col items-center contain-content">
        <Image
          priority
          src="/images/bg/kids-bg.webp"
          alt="Background Image"
          width={1007}
          height={1456}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/kids-s2.webp"
          alt="Section Two - Highlight Activities & Learning"
          width={950}
          height={1139}
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
        src="/images/kids/kids-teacher-banner.webp"
        alt="Teacher Kiwi & Mushroom"
        width={1007}
        height={357}
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-auto"
      />
      <section className="flex flex-col items-center">
        <Image
          priority
          src="/images/bg/kids-bg.webp"
          alt="Background Image"
          width={1007}
          height={1456}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/kids-s3.webp"
          alt="Section Three - Little Heroes Wilderness Cooking"
          width={925}
          height={945}
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="my-[10vw] ml-[-5vw] p-[5vw]"
        />
      </section>
      <Image
        priority
        src="/images/kids/kids-coach-banner.webp"
        alt="Coach Wendy Banner"
        width={1007}
        height={354}
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-auto"
      />
      <section className="flex flex-col items-center">
        <Image
          priority
          src="/images/bg/kids-bg.webp"
          alt="Background Image"
          width={1007}
          height={1456}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/kids-s4.webp"
          width={825}
          height={892}
          alt="Section Four - Little Heroes Wilderness Cooking"
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="p-[5vw]"
        />
        <Image
          priority
          src="/images/kids/kids-join-head.webp"
          alt="More Exciting Activities Await You!"
          width={1007}
          height={350}
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="z-10 mb-[-14vw]"
        />
      </section>
      <JoinGlampingBanner color="yellow" />
      <Image
        priority
        src={"/images/home/accommodation-banner.webp"}
        width={1920}
        height={213}
        alt="Glamping Accommodation"
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-[20vw] md:h-auto"
      />
      <section className="p-[5vw]">
        <Image
          priority
          src="/images/home/camp-info-image.webp"
          alt="Camp Yu Ling Accommodation"
          width={1311}
          height={2443}
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          className="h-[170vw] w-[100vw] md:h-auto"
        />
      </section>
      <JoinGlampingBanner color="yellow" />
    </article>
  );
};

export default LittleHeroChallenge;
