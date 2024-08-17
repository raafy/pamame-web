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
          src="/images/kids/hero-banner.webp"
          alt="Kids Hero Banner"
          width={4028}
          height={1404}
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
          width={4028}
          height={5824}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/s1.webp"
          alt="Section One - Little Hero Exploration"
          width={3761}
          height={4673}
          style={{
            width: "80vw",
            height: "auto",
          }}
          className="mx-[5vw] mb-[10vw] mt-[15vw]"
        />
      </section>
      <Image
        priority
        src="/images/kids/highlights-banner.webp"
        alt="Highlight Activities & Learning Banner"
        width={4028}
        height={614}
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
          width={4028}
          height={5824}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/s2.webp"
          alt="Section Two - Highlight Activities & Learning"
          width={3797}
          height={4553}
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
        src="/images/kids/teacher-banner.webp"
        alt="Teacher Kiwi & Mushroom"
        width={4028}
        height={1425}
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
          width={4028}
          height={5824}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/s3.webp"
          alt="Section Three - Little Heroes Wilderness Cooking"
          width={3697}
          height={3778}
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="my-[10vw] ml-[-5vw] p-[5vw]"
        />
      </section>
      <Image
        priority
        src="/images/kids/coach-banner.webp"
        alt="Coach Wendy Banner"
        width={4028}
        height={1416}
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
          width={4028}
          height={5824}
          className="absolute -z-10 h-auto w-auto object-cover object-top"
        />
        <Image
          priority
          src="/images/kids/s4.webp"
          width={3298}
          height={3565}
          alt="Section Four - Little Heroes Wilderness Cooking"
          style={{
            width: "100vw",
            height: "auto",
          }}
          className="p-[5vw]"
        />
        <Image
          priority
          src="/images/kids/join-head.webp"
          alt="More Exciting Activities Await You!"
          width={4028}
          height={974}
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
