import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <title>Frontend Mentor | Easybank landing page</title>
      </Head>
      <main>
        <section className="hero bg-[#fafafa]  md:flex md:flex-row-reverse   ">
          <div className="hero-img h-[400px]  w-full md:w-1/2 md:min-h-[625px] relative md:overflow-hidden">
            <Image
              src={"/image-mockups.png"}
              width={1080}
              height={1080}
              className="w-full h-auto absolute md:w-[764px] -top-40  md:-top-[120px] md:left-32 object-cover"
              alt="hero-img"
              priority
            />
          </div>
          <div className="hero-content px-6 mt-8 flex flex-col justify-center items-center md:w-2/5 md:pl-12 md:items-start ">
            <h1 className="main-heading text-dark-blue text-center text-[37px] font-light leading-[42px] md:text-left md:text-[52px] md:leading-[60px]">
              Next generation digital banking!!!!
            </h1>
            <p className="main-para text-center text-light-gray text-sm font-light  leading-5 mt-6 md:text-left md:text-lg md:leading-7 md:pr-24">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="action-btn px-[35px] py-[13px] rounded-full text-sm font-normal leadin-5 text-white mt-[70px] md:text-left md:mt-9">
              Request Invite
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
