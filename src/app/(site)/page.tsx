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
          src={"/images/home/home-hero-banner.webp"}
          width={1920}
          height={634}
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
          src={"/images/home/compass-banner.webp"}
          width={953}
          height={314}
          alt="Compass Hero"
          className="h-auto w-[100vw]"
        />
      </section>
      <Image
        priority
        src={"/images/home/glamping-highlights-banner.webp"}
        alt="Glamping Highlights Banner"
        width={1920}
        height={168}
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
            src="/images/home/home-gh-image-1.webp"
            width={493}
            height={324}
            alt="Girl with a bucket full of grapes"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
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
            src={"/images/home/home-gh-text-1.webp"}
            width={309}
            height={241}
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
            src={"/images/home/home-gh-text-2.webp"}
            width={447}
            height={198}
            alt="Parenting Lessons in Nature"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
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
            src="/images/home/home-gh-image-2.webp"
            width={506}
            height={317}
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
            src="/images/home/home-gh-image-3.webp"
            width={496}
            height={312}
            alt="Boy in a forest"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
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
            src={"/images/home/home-gh-text-3.webp"}
            width={474}
            height={238}
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
            src={"/images/home/home-gh-text-4.webp"}
            width={475}
            height={241}
            alt="Be the guiding star they need"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
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
            src="/images/home/home-gh-image-4.webp"
            width={521}
            height={321}
            alt="Dad giving a piggyback to his daughter"
            style={{
              height: "auto",
            }}
            className="w-[50vw] md:w-[30vw]"
          />
        </div>
      </section>
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
      <section className="flex flex-col items-center gap-[4vw] p-[4vw] contain-content">
        <Image
          priority
          src={"/images/bg/bg-wave.webp"}
          width={1920}
          height={2345}
          alt="Background Wave"
          className="absolute -z-10 mt-[30vw] h-full w-[100vw] object-cover object-top"
        />
        <div className="flex flex-col items-center md:flex-row">
          <Image
            priority
            src="/images/home/dr-image.webp"
            width={718}
            height={711}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Dr Shane"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src="/images/home/dr-info.webp"
              alt="Dr Shane Info"
              width={740}
              height={427}
              className="h-auto w-[70vw] md:w-[40vw]"
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
        </div>
        <Image
          priority
          src="/images/home/st-head.webp"
          alt="Sharing Points"
          width={487}
          height={111}
          className="mt-[5vw] h-auto w-[40vw] md:mt-0 md:w-[30vw]"
        />
        <div className="my-[5vw] flex flex-col items-center gap-[5vw] px-[25vw] md:mt-0 md:flex-row md:px-[10vw]">
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
              className="h-auto w-[70vw]"
            />
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
              className="h-auto w-[60vw]"
            />
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
          src="/images/home/st-head.webp"
          alt="Sharing Points"
          width={487}
          height={111}
          className="mt-[5vw] h-auto w-[40vw] md:mt-0 md:w-[30vw]"
        />
        <div className="my-[5vw] flex flex-col items-center gap-[5vw] px-[30vw] md:mt-0 md:flex-row md:px-[10vw]">
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
              src="/images/home/st-4.webp"
              alt="Believe in Power of Words"
              width={383}
              height={88}
              className="h-auto w-[60vw]"
            />
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
              src="/images/home/st-5.webp"
              alt="Value Your Child's Strengths"
              width={383}
              height={92}
              className="h-auto w-[60vw]"
            />
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
              src="/images/home/st-6.webp"
              alt="Empathize with Your Child"
              width={380}
              height={92}
              className="h-auto w-[60vw]"
            />
          </div>
        </div>
        <JoinGlampingBanner color="white" />
      </section>
      <Image
        priority
        src={"/images/home/teacher-coach-banner.webp"}
        alt="Guiding Star Banner"
        width={1920}
        height={488}
        style={{
          objectFit: "cover",
        }}
        className="h-[28vw] w-[100vw] md:h-auto"
      />
      <section className="flex flex-col items-center gap-[4vw] p-[4vw] contain-content">
        <Image
          priority
          src="/images/bg/bg-wave.webp"
          alt="Background Wave"
          width={1920}
          height={1080}
          className="absolute -z-10 mt-[30vw] h-full w-[100vw] object-cover object-top"
        />
        <div className="mb-[5vw] flex flex-col items-center gap-[5vw] md:mb-0 md:flex-row">
          <Image
            priority
            src="/images/home/home-gh-image-5.webp"
            width={713}
            height={454}
            style={{
              height: "auto",
            }}
            className="w-[70vw] md:w-[40vw]"
            alt="Teacher Kiwi and Teacher Mushroom"
          />
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src="/images/home/home-gh-text-5.webp"
              alt="Learning through Play in Nature"
              width={660}
              height={356}
              className="h-auto w-[70vw] md:w-[40vw]"
            />
            <Link href={"/little-hero-challenge"}>
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
        </div>
        <div className="mb-[5vw] flex flex-col-reverse items-center gap-[5vw] md:mb-0 md:flex-row">
          <div className="flex flex-col items-center gap-[5vw]">
            <Image
              priority
              src="/images/home/home-gh-text-6.webp"
              alt="Little Hero Exploration"
              width={659}
              height={432}
              className="h-auto w-[70vw] md:w-[40vw]"
            />
            <Link href={"/little-hero-challenge"}>
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
            src="/images/home/home-gh-image-6.webp"
            width={736}
            height={496}
            style={{
              height: "auto",
            }}
            className="w-[80vw] md:w-[40vw]"
            alt="Little Hero Exploration Image"
          />
        </div>
        <Image
          priority
          src="/images/home/lamp-desk.webp"
          alt="Lamp Info"
          width={1541}
          height={979}
          className="my-[5vw] hidden h-auto w-[60vw] md:block"
        />
        <Image
          priority
          src="/images/home/lamp-mob.webp"
          alt="Lamp Info"
          width={704}
          height={1365}
          className="mb-[5vw] h-auto w-[60vw] md:hidden"
        />
      </section>
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

export default HomePage;
