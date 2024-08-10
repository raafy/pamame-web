import DrShaneBackground from "@/assets/images/home/bg-1.svg";
import DrShaneTextImage from "@/assets/images/home/dr-shane-info.svg";
import GHText1 from "@/assets/images/home/st-1.svg";
import GHText2 from "@/assets/images/home/st-2.svg";
import GHText3 from "@/assets/images/home/st-3.svg";
import CLetterDesk from "@/assets/images/parent/cl-desk.png";
import CLetterMob from "@/assets/images/parent/cl-mob.png";
import CoachesTextImage from "@/assets/images/parent/ct-1.svg";
import CoachesPointsC from "@/assets/images/parent/ctp-c.svg";
import CoachesPointsL from "@/assets/images/parent/ctp.svg";
import DrShaneSignature from "@/assets/images/parent/dr-shane-signature.svg";
import GHInfoC1 from "@/assets/images/parent/gh-info-center-1.svg";
import GHInfoC2 from "@/assets/images/parent/gh-info-center-2.svg";
import GHInfoC3 from "@/assets/images/parent/gh-info-center-3.svg";
import GHInfoL1 from "@/assets/images/parent/gh-info-left-1.svg";
import GHInfoL2 from "@/assets/images/parent/gh-info-left-2.svg";
import GHInfoL3 from "@/assets/images/parent/gh-info-left-3.svg";
import NeucleusText1 from "@/assets/images/parent/nt-1.svg";
import NeucleusText2 from "@/assets/images/parent/nt-2.svg";
import NeucleusTextCenter from "@/assets/images/parent/nt-center.svg";
import ParentsLearningHighlightsImage from "@/assets/images/parent/sign-board.svg";
import JoinGlampingBanner from "@/components/site/join-glamping-banner";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PaMaMe - Parenting In Nature",
};

const ParentingInNature: React.FC = () => {
  return (
    <article>
      <Image
        priority
        src={"/home/dr-coach-banner.svg"}
        alt="Guiding Star Banner"
        width={1920}
        height={465}
        style={{
          objectFit: "cover",
        }}
        className="h-[28vw] w-[100vw] md:h-auto"
      />
      <section className="flex flex-col items-center gap-[4vw] px-[4vw] pt-[4vw] contain-content">
        <Image
          priority
          src={"/home/bg-1.svg"}
          width={1920}
          height={1920}
          alt="Backgound Wave"
          className="absolute mt-[160vw] h-full w-[100vw] object-cover object-top md:mt-[40vw]"
        />
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <Image
            priority
            src="/home/dr-shane-profile.svg"
            width={717}
            height={710.4}
            quality={100}
            style={{
              height: "auto",
            }}
            className="z-10 w-[80vw] md:mt-[-5vw] md:w-[40vw]"
            alt="Dr Shane"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src={DrShaneTextImage}
              alt="Dr Shane Info"
              className="z-10 h-auto w-[70vw] md:w-[60vw]"
            />
            <Link href={"/"}>
              <Image
                priority
                src={ParentsLearningHighlightsImage}
                alt="Parents' Learning Highlights"
                className="-z-20 h-auto w-[50vw] md:w-[20vw]"
              />
            </Link>
          </div>
        </div>
        <div className="z-10 my-[5vw] flex flex-col items-center gap-[10vw] md:mt-0">
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={GHText1}
              alt="Reframing Parents Perspective"
              className="h-auto w-[40vw] md:w-[30vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/parents/parent-point1-image.svg"
              width={494.3}
              height={494.3}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="2 Children Walking down a River Path"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src={GHInfoL1}
                alt="Parent Point 1 aligned to left"
                className="hidden h-auto w-[70vw] pr-[5vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src={GHInfoC1}
                alt="Parent Point 2 aligned to center"
                className="flex h-auto w-[70vw] md:hidden md:w-[60vw]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={GHText2}
              alt="Strengthening Family Bonds"
              className="h-auto w-[40vw] md:w-[30vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/parents/parent-point2-image.svg"
              width={494.3}
              height={494.3}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="Dad lifting up his child"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src={GHInfoL2}
                alt="Parent Point 1 aligned to left"
                className="hidden h-auto w-[70vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src={GHInfoC2}
                alt="Parent Point 2 aligned to center"
                className="flex h-auto w-[70vw] md:hidden md:w-[60vw]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={GHText3}
              alt="Recognize Positive Intentions"
              className="h-auto w-[40vw] md:w-[30vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/parents/parent-point3-image.svg"
              width={494.3}
              height={494.3}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="A mother with her two children"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src={GHInfoL3}
                alt="Parent Point 1 aligned to left"
                className="hidden h-auto w-[70vw] pr-[15vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src={GHInfoC3}
                alt="Parent Point 2 aligned to center"
                className="flex h-auto w-[70vw] md:hidden md:w-[60vw]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#FADE9A]">
        <JoinGlampingBanner color="white" />
      </div>
      <Image
        priority
        src="/parents/dr-shane-banner.svg"
        alt="Dr Shane Banner"
        width={1920}
        height={666}
        style={{
          objectFit: "cover",
        }}
        className="h-auto w-[100vw]"
      />
      <section className="mb-[5vw] flex flex-col items-center pt-[10vw]">
        <div className="mb-[1vw] flex flex-col items-center md:flex-row">
          <Image
            priority
            src="/parents/neucleus-image.svg"
            width={494.3}
            height={494.3}
            style={{
              height: "auto",
            }}
            className="mb-[4vw] mr-[-5vw] mt-[-15vw] w-[60vw] md:w-[40vw]"
            alt="2 Children Walking down a River Path"
          />
          <Image
            priority
            src={NeucleusText1}
            alt="Parent Point 1 aligned to left"
            className="hidden h-auto w-[55vw] md:block"
          />
        </div>
        <Image
          priority
          src={NeucleusText2}
          alt="Parent Point 1 aligned to left"
          className="hidden h-auto w-[90vw] md:block"
        />
        <Image
          priority
          src={NeucleusTextCenter}
          alt="Parent Point 1 aligned to left"
          className="h-auto w-[90vw] md:hidden"
        />
        <div className="flex w-full justify-center md:justify-end">
          <Image
            priority
            src={DrShaneSignature}
            alt="Parent Point 1 aligned to left"
            className="mb-[5vw] h-auto w-[40vw] md:mb-0 md:mr-[10vw] md:w-[20vw]"
          />
        </div>
      </section>
      <section className="mt-[-10vw] flex flex-col items-center gap-[10vw] p-[4vw] contain-content">
        <Image
          priority
          src={"/home/bg-1.svg"}
          width={1920}
          height={1920}
          alt="Backgound Wave"
          className="absolute -z-10 h-full w-[100vw] object-cover object-top"
        />
        <div className="mt-[10vw] flex flex-col-reverse items-center md:flex-row">
          <Image
            priority
            src={CoachesTextImage}
            alt="Coaches Info"
            className="h-auto w-[80vw] md:w-[50vw]"
          />
          <Image
            priority
            src="/parents/coaches-profile.png"
            width={717}
            height={710.4}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Coaches"
          />
        </div>
        <Image
          priority
          src={CoachesPointsL}
          alt="Coaches Points aligned to the left"
          className="mb-[5vw] hidden w-[80vw] md:block"
        />
        <Image
          priority
          src={CoachesPointsC}
          alt="Coaches Points aligned to the center"
          className="mb-[5vw] w-[60vw] md:hidden"
        />
      </section>
      <Image
        priority
        src="/parents/coaches-banner.svg"
        alt="Coaches Banner"
        width={1920}
        height={666}
        style={{
          objectFit: "cover",
        }}
        className="w-[100vw] md:h-auto"
      />
      <Image
        priority
        src={CLetterDesk}
        alt="Coaches Testimony"
        className="mt-[-10vw] hidden h-auto p-[5vw] md:block"
      />
      <Image
        priority
        src={CLetterMob}
        alt="Coaches Testimony"
        className="mb-[5vw] mt-[-10vw] h-auto p-[5vw] md:hidden"
      />
      <Image
        priority
        src="/home/accommodation-banner.svg"
        alt="Glamping Accommodation"
        width={1920}
        height={500}
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

export default ParentingInNature;
