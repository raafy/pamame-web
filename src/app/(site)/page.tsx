import Countdown from "@/components/site/countdown";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <article>
      <section>
        <Image
          priority
          src={
            "https://pamame.sgp1.cdn.digitaloceanspaces.com/images/home-page/banner-hero.webp"
          }
          width={1920}
          height={1920}
          className="h-auto w-full"
          alt="Hero Banner"
        />
        <div className="-mt-[12vw] mr-[7vw] flex flex-col items-end contain-content">
          <Countdown headType={1} />
        </div>
      </section>
    </article>
  );
};

export default HomePage;
