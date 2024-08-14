import { type Metadata } from "next";
import Image from "next/image";
import Countdown from "@/components/site/countdown";

export const metadata: Metadata = {
  title: "PaMaMe - Terms & Conditions",
};

export default function TNCPage() {
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
      </section>
      <section className="mb-[10vw] p-[10vw]">
        <h1 className="mb-4 text-center font-beachday text-3xl font-bold">
          Terms and Conditions
        </h1>
        <p>
          <br />
          1) 活动适合5岁至10岁的儿童
          <br />
          Activities are suitable for kids aged 5 years old to 10 years old.
          <br />
          <br />
          2)
          若遇到恶劣天气或其他无法预计的意外，主办方会启动应急计划，并视当时的情况做出最佳安排后，再另行通知参与者
          <br />
          In the event of adverse weather conditions on the day of event, the
          organizers will implement an emergency plan and make the best possible
          arrangements based on the situation at hand. Participants will be
          notified accordingly.
          <br />
          <br />
          3)
          如果在2024年8月31日或之前提出退款请求，参与者将获得已支付总费用30%退款。
          <br />
          Participants are entitled to a 30% refund of the total fee paid if the
          refund request is made on or before August 31st 2024.
          <br />
          <br />
          从2024年9月1日起，任何退款或理由均不予退款
          <br />
          No refunds will be provided for any requests or reasons made on or
          after September 1st 2024.
          <br />
          <br />
          4) 成功报名者将于2个工作日内通过WhatsApp接获通知信息。
          <br />
          You will be informed of your successful registration via WhatsApp PM
          within 2 working days.
          <br />
          <br />
          5) 收据将在3-5个工作日内通过 WhatsApp 私信发送。
          <br />
          A receipt will be issued within 3-5 working days via WhatsApp PM.
          <br />
          <br />
          6)
          活动门票可转让他人，但须在2024年10月23日之前告知主办方，以获取认可。
          <br />
          Spot transfer allowed with prior notice to organizers, and with
          approval by organizers before October 23rd 2024.
          <br />
        </p>
      </section>
    </article>
  );
}
