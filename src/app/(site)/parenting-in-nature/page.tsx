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
        src={"/images/home/dr-coach-banner.webp"}
        alt="Guiding Star Banner"
        width={1920}
        height={456}
        style={{
          objectFit: "cover",
        }}
        className="h-[28vw] w-[100vw] md:h-auto"
      />
      <section className="flex flex-col items-center gap-[4vw] px-[4vw] pt-[4vw] contain-content">
        <Image
          priority
          src={"/images/bg/bg-wave.webp"}
          width={1920}
          height={2345}
          alt="Backgound Wave"
          className="absolute mt-[160vw] h-full w-[100vw] object-cover object-top md:mt-[40vw]"
        />
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <Image
            priority
            src="/images/home/dr-image.webp"
            width={718}
            height={711}
            style={{
              height: "auto",
            }}
            className="z-10 w-[80vw] md:mt-[-5vw] md:w-[40vw]"
            alt="Dr Shane"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src="/images/home/dr-info.webp"
              alt="Dr Shane Info"
              width={740}
              height={427}
              className="z-10 h-auto w-[70vw] md:w-[60vw]"
            />
            <Link href={"/"}>
              <Image
                priority
                src="/images/parents/parents-board.webp"
                alt="Parents' Learning Highlights"
                width={517}
                height={685}
                className="-z-20 h-auto w-[50vw] md:w-[20vw]"
              />
            </Link>
          </div>
        </div>
        <div className="z-10 my-[5vw] flex flex-col items-center gap-[10vw] md:mt-0">
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src="/images/icons/compass-icon.webp"
              alt="Small Compass"
              width={64}
              height={64}
              style={{
                width: "5vw",
                height: "5vw",
              }}
            />
            <Image
              priority
              src="/images/home/st-1.webp"
              alt="Reframing Parents Perspective"
              width={482}
              height={109}
              className="h-auto w-[50vw] md:w-[30vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/images/parents/parents-st-image-1.webp"
              width={496}
              height={495}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="2 Children Walking down a River Path"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src="/images/parents/parents-st-text-1-left.webp"
                alt="Parent Point 1 aligned to left"
                width={924}
                height={528}
                className="hidden h-auto w-[70vw] pr-[5vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src="/images/parents/parents-st-text-1-center.webp"
                alt="Parent Point 2 aligned to center"
                width={742}
                height={831}
                className="flex h-auto w-[70vw] md:hidden md:w-[60vw]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src="/images/icons/compass-icon.webp"
              alt="Small Compass"
              width={64}
              height={64}
              style={{
                width: "5vw",
                height: "5vw",
              }}
            />
            <Image
              priority
              src="/images/home/st-2.webp"
              alt="Strengthening Family Bonds"
              width={354}
              height={98}
              className="h-auto w-[45vw] md:w-[25vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/images/parents/parents-st-image-2.webp"
              width={499}
              height={472}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="Dad lifting up his child"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src="/images/parents/parents-st-text-2-left.webp"
                width={1073}
                height={513}
                alt="Parent Point 2 aligned to left"
                className="hidden h-auto w-[70vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src="/images/parents/parents-st-text-2-center.webp"
                width={764}
                height={746}
                alt="Parent Point 2 aligned to center"
                className="flex h-auto w-[70vw] md:hidden md:w-[60vw]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2vw]">
            <Image
              priority
              src="/images/icons/compass-icon.webp"
              alt="Small Compass"
              width={64}
              height={64}
              style={{
                width: "5vw",
                height: "5vw",
              }}
            />
            <Image
              priority
              src="/images/home/st-3.webp"
              alt="Recognize Positive Intentions"
              width={408}
              height={98}
              className="h-auto w-[45vw] md:w-[25vw]"
            />
          </div>
          <div className="flex flex-col items-center gap-[5vw] md:flex-row">
            <Image
              priority
              src="/images/parents/parents-st-image-3.webp"
              width={510}
              height={467}
              style={{
                height: "auto",
              }}
              className="w-[60vw] md:w-[30vw]"
              alt="A mother with her two children"
            />
            <div className="flex flex-col items-center gap-[5vw]">
              <Image
                priority
                src="/images/parents/parents-st-text-3-left.webp"
                alt="Parent Point 3 aligned to left"
                width={785}
                height={556}
                className="hidden h-auto w-[70vw] pr-[15vw] md:flex md:w-[60vw]"
              />
              <Image
                priority
                src="/images/parents/parents-st-text-3-center.webp"
                alt="Parent Point 3 aligned to center"
                width={755}
                height={602}
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
        src="/images/parents/dr-banner.webp"
        alt="Dr Shane Banner"
        width={1920}
        height={665}
        style={{
          objectFit: "cover",
        }}
        className="h-auto w-[100vw]"
      />
      <section className="mb-[5vw] flex flex-col items-center pt-[10vw]">
        <div className="mb-[1vw] flex flex-col items-center md:flex-row">
          <Image
            priority
            src="/images/parents/n-image.webp"
            width={864}
            height={899}
            style={{
              height: "auto",
            }}
            className="mb-[4vw] mr-[-5vw] mt-[-15vw] w-[60vw] md:w-[40vw]"
            alt="2 Children Walking down a River Path"
          />
          <Image
            priority
            src="/images/parents/n-text-1.webp"
            alt="Dr.Shane Testimonial Text 1"
            width={1035}
            height={613}
            className="hidden h-auto w-[55vw] md:block"
          />
        </div>
        <Image
          priority
          src="/images/parents/n-text-2.webp"
          alt="Dr.Shane Testimonial Text 2"
          width={1673}
          height={612}
          className="hidden h-auto w-[90vw] md:block"
        />
        <Image
          priority
          src="/images/parents/n-text-center.webp"
          alt="Dr.Shane Testimonial"
          width={903}
          height={1516}
          className="h-auto w-[90vw] md:hidden"
        />
        <div className="flex w-full justify-center md:justify-end">
          <Image
            priority
            src="/images/parents/n-signature.webp"
            alt="Dr.Shane Signature"
            width={452}
            height={275}
            className="mb-[5vw] h-auto w-[40vw] md:mb-0 md:mr-[10vw] md:w-[20vw]"
          />
        </div>
      </section>
      <section className="mt-[-10vw] flex flex-col items-center gap-[10vw] p-[4vw] contain-content">
        <Image
          priority
          src={"/images/bg/bg-wave.webp"}
          width={1920}
          height={2345}
          alt="Background Wave"
          className="absolute -z-10 h-full w-[100vw] object-cover object-top"
        />
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src="/images/home/coach-info.webp"
              alt="Coaches Info"
              width={759}
              height={529}
              className="h-auto w-[80vw] md:w-[40vw]"
            />
            <Link href={"/parenting-in-nature"}>
              <Image
                priority
                src="/images/buttons/learn-more-image.webp"
                alt="Learn More Button"
                width={317}
                height={57}
                className="h-auto w-[30vw] md:w-[20vw]"
              />
            </Link>
          </div>
          <Image
            priority
            src="/images/home/coach-image.webp"
            width={684}
            height={692}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Coaches"
          />
        </div>
        <Image
          priority
          src="/images/parents/c-text-left.webp"
          alt="Coaches Points aligned to the left"
          width={1540}
          height={1258}
          className="mb-[5vw] hidden w-[80vw] md:block"
        />
        <Image
          priority
          src="/images/parents/c-text-center.webp"
          alt="Coaches Points aligned to the center"
          width={611}
          height={2207}
          className="mb-[5vw] w-[60vw] md:hidden"
        />
      </section>
      <Image
        priority
        src="/images/parents/c-banner.webp"
        alt="Coaches Banner"
        width={1920}
        height={667}
        style={{
          objectFit: "cover",
        }}
        className="w-[100vw] md:h-auto"
      />
      <Image
        priority
        src="/images/parents/c-desk.webp"
        alt="Coaches Testimony"
        width={1786}
        height={2250}
        className="mt-[-10vw] hidden h-auto p-[5vw] md:block"
      />
      <Image
        priority
        src="/images/parents/c-mob.webp"
        alt="Coaches Testimony"
        width={908}
        height={2796}
        className="mb-[5vw] mt-[-10vw] h-auto p-[5vw] md:hidden"
      />
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

export default ParentingInNature;
