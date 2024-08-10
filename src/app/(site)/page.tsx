import LearnMoreButtonImage from "@/assets/images/component/learn-more.svg";
import SmallCompassSeparatorImage from "@/assets/images/component/small-compass.svg";
import DrShaneBackground from "@/assets/images/home/bg-1.svg";
import CoachesTextImage from "@/assets/images/home/coaches-info.svg";
import DrShaneTextImage from "@/assets/images/home/dr-shane-info.svg";
import GHText5 from "@/assets/images/home/gh-text-5.svg";
import GHText6 from "@/assets/images/home/gh-text-6.svg";
import LampImageDesktop from "@/assets/images/home/lamp-desktop.svg";
import LampImageMobile from "@/assets/images/home/lamp-mobile.svg";
import SharingPoints from "@/assets/images/home/sharing-topics.svg";
import ST1 from "@/assets/images/home/st-1.svg";
import ST2 from "@/assets/images/home/st-2.svg";
import ST3 from "@/assets/images/home/st-3.svg";
import ST4 from "@/assets/images/home/st-4.svg";
import ST5 from "@/assets/images/home/st-5.svg";
import ST6 from "@/assets/images/home/st-6.svg";
import Countdown from "@/components/site/countdown";
import JoinGlampingBanner from "@/components/site/join-glamping-banner";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PaMaMe - Home",
};

const HomePage: React.FC = () => {
  return (
    <article>
      <section>
        <Image
          priority
          src={"/home/banner-hero.webp"}
          width={1920}
          height={1920}
          className="h-auto w-full"
          alt="Hero Banner"
        />
        <div className="-mt-[12vw] mr-[7vw] flex flex-col items-end contain-content">
          <Countdown headType={1} />
        </div>
      </section>
      <section className="flex items-center justify-center gap-[2vw] px-[10vw] pb-[5vw] md:px-[20vw]">
        <Image
          priority
          src={"/home/compass.webp"}
          width={1920}
          height={1080}
          alt="Compass Hero"
          className="h-auto w-[100vw]"
        />
      </section>
      <Image
        priority
        src={"/home/glamping-highlights-banner.webp"}
        alt="Glamping Highlights Banner"
        width={1920}
        height={1080}
        style={{
          width: "100vw",
          objectFit: "cover",
        }}
        className="h-[20vw] md:h-auto"
      />
      <section className="my-[10vw] flex flex-col items-center gap-[10vw] p-[4vw] md:my-0 md:gap-[4vw]">
        <div className="flex flex-col items-center gap-[2vw] contain-content md:flex-row">
          <Image
            priority
            src="/home/girl-grape-basket.svg"
            width={492.3}
            height={323.2}
            alt="Girl with a bucket full of grapes"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
          <Image
            priority
            src={SmallCompassSeparatorImage}
            alt="Small Compass"
            style={{
              width: "5vw",
              height: "5vw",
            }}
          />
          <Image
            priority
            src={"/home/gh-text-1.webp"}
            width={1920}
            height={1080}
            quality={100}
            alt="Learning Through Play"
            style={{
              height: "auto",
            }}
            className="w-[50vw] px-[5vw] md:w-[30vw]"
          />
        </div>
        <div className="mb-[5vw] flex flex-col-reverse items-center gap-[2vw] contain-content md:mb-0 md:flex-row">
          <Image
            priority
            src={"/home/gh-text-2.webp"}
            quality={100}
            width={1920}
            height={1080}
            alt="Parenting Lessons in Nature"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
          <Image
            priority
            src={SmallCompassSeparatorImage}
            alt="Small Compass"
            style={{
              width: "5vw",
              height: "5vw",
            }}
          />
          <Image
            priority
            src="/home/family-near-tree.svg"
            width={492.3}
            height={323.2}
            quality={100}
            alt="Family gathered around a small plant"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
        </div>
        <div className="mb-[5vw] flex flex-col items-center gap-[2vw] contain-content md:mb-0 md:flex-row">
          <Image
            priority
            src="/home/boy-forest.svg"
            width={492.3}
            height={323.2}
            quality={100}
            alt="Boy in a forest"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
          <Image
            priority
            src={SmallCompassSeparatorImage}
            alt="Small Compass"
            style={{
              width: "5vw",
              height: "5vw",
            }}
          />
          <Image
            priority
            src={"/home/gh-text-3.svg"}
            quality={100}
            width={1920}
            height={1080}
            alt="Little Hero Exploration"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
        </div>
        <div className="mb-[5vw] flex flex-col-reverse items-center gap-[2vw] contain-content md:mb-0 md:flex-row">
          <Image
            priority
            src={"/home/gh-text-4.webp"}
            width={1920}
            height={1080}
            alt="Be the guiding star they need"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
          <Image
            priority
            src={SmallCompassSeparatorImage}
            alt="Small Compass"
            style={{
              width: "5vw",
              height: "5vw",
            }}
          />
          <Image
            priority
            src="/home/piggyback-dad-daughter.svg"
            width={492.3}
            height={323.2}
            quality={100}
            alt="Family gathered around a small plant"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
        </div>
      </section>
      <Image
        priority
        src={"/home/dr-coach-banner.svg"}
        alt="Guiding Star Banner"
        width={1920}
        height={465}
        quality={100}
        style={{
          objectFit: "cover",
        }}
        className="h-[28vw] w-[100vw] md:h-auto"
      />
      <section className="flex flex-col items-center gap-[4vw] p-[4vw] contain-content">
        <Image
          priority
          src={"/home/bg-1.svg"}
          width={1920}
          height={1080}
          alt="Background Wave"
          className="absolute -z-10 mt-[30vw] h-full w-[100vw] object-cover object-top"
        />
        <div className="flex flex-col items-center md:flex-row">
          <Image
            priority
            src="/home/dr-shane-profile.svg"
            width={717}
            height={710.4}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Dr Shane"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src={DrShaneTextImage}
              alt="Dr Shane Info"
              className="h-auto w-[70vw] md:w-[40vw]"
            />
            <Link href={"/parenting-in-nature"}>
              <Image
                priority
                src={LearnMoreButtonImage}
                alt="Learn More Button"
                className="h-auto w-[30vw] md:w-[20vw]"
              />
            </Link>
          </div>
        </div>
        <Image
          priority
          src={SharingPoints}
          alt="Sharing Points"
          className="mt-[5vw] h-auto w-[20vw] md:mt-0 md:w-[10vw]"
        />
        <div className="my-[5vw] flex flex-col items-center gap-[5vw] px-[30vw] md:mt-0 md:flex-row md:px-[10vw]">
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST1}
              alt="Reframing Parents Perspective"
              className="h-auto w-[60vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST2}
              alt="Strengthening Family Bonds"
              className="h-auto w-[50vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST3}
              alt="Recognize Positive Intentions"
              className="h-auto w-[60vw]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-[4vw] bg-[#FADE9A] contain-content">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src={CoachesTextImage}
              alt="Coaches Info"
              className="h-auto w-[80vw] md:w-[40vw]"
            />
            <Link href={"/parenting-in-nature"}>
              <Image
                priority
                src={LearnMoreButtonImage}
                alt="Learn More Button"
                className="h-auto w-[30vw] md:w-[20vw]"
              />
            </Link>
          </div>
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
          src={SharingPoints}
          alt="Sharing Points"
          className="mt-[5vw] h-auto w-[20vw] md:mt-0 md:w-[10vw]"
        />
        <div className="my-[5vw] flex flex-col items-center gap-[5vw] px-[30vw] md:mt-0 md:flex-row md:px-[10vw]">
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST4}
              alt="Believe in Power of Words"
              className="h-auto w-[60vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST5}
              alt="Value Your Child's Strengths"
              className="h-auto w-[60vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src={ST6}
              alt="Empathize with Your Child"
              className="h-auto w-[60vw]"
            />
          </div>
        </div>
        <JoinGlampingBanner color="white" />
      </section>
      <Image
        priority
        src={"/home/kids-teacher-banner.svg"}
        alt="Guiding Star Banner"
        width={1920}
        height={465}
        style={{
          objectFit: "cover",
        }}
        className="h-[28vw] w-[100vw] md:h-auto"
      />
      <section className="flex flex-col items-center gap-[4vw] p-[4vw] contain-content">
        <Image
          priority
          src="/home/bg-1.svg"
          alt="Background Wave"
          width={1920}
          height={1080}
          className="absolute -z-10 mt-[30vw] h-full w-[100vw] object-cover object-top"
        />
        <div className="mb-[5vw] flex flex-col items-center gap-[5vw] md:mb-0 md:flex-row">
          <Image
            priority
            src="/home/teacher-kiwi-mushroom.svg"
            width={717}
            height={710.4}
            style={{
              height: "auto",
            }}
            className="w-[70vw] md:w-[40vw]"
            alt="Teacher Kiwi and Teacher Mushroom"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src={GHText5}
              alt="Learning through Play in Nature"
              className="h-auto w-[70vw] md:w-[40vw]"
            />
            <Link href={"/little-hero-challenge"}>
              <Image
                priority
                src={LearnMoreButtonImage}
                alt="Learn More Button"
                className="h-auto w-[30vw] md:w-[20vw]"
              />
            </Link>
          </div>
        </div>
        <div className="mb-[5vw] flex flex-col-reverse items-center gap-[5vw] md:mb-0 md:flex-row">
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src={GHText6}
              alt="Little Hero Exploration"
              className="h-auto w-[70vw] md:w-[40vw]"
            />
            <Link href={"/little-hero-challenge"}>
              <Image
                priority
                src={LearnMoreButtonImage}
                alt="Learn More Button"
                className="h-auto w-[30vw] md:w-[20vw]"
              />
            </Link>
          </div>
          <Image
            priority
            src="/home/little-hero-image.svg"
            width={717}
            height={710.4}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Little Hero Exploration Image"
          />
        </div>
        <Image
          priority
          src={LampImageDesktop}
          alt="Lamp Info"
          className="my-[5vw] hidden h-auto w-[60vw] md:block"
        />
        <Image
          priority
          src={LampImageMobile}
          alt="Lamp Info"
          className="mb-[5vw] h-auto w-[60vw] md:hidden"
        />
      </section>
      <Image
        priority
        src={"/home/accommodation-banner.svg"}
        width={1080}
        height={1080}
        alt="Glamping Accommodation"
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

export default HomePage;
