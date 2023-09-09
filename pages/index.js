import Head from "next/head";
import Image from "next/image";

const featureData = [
  {
    featureImgUrl: "/icon-online.svg",
    featureHeading: "Online Banking",
    featurContent:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    featureImgUrl: "/icon-budgeting.svg",
    featureHeading: "Simple Budgeting",
    featurContent:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    featureImgUrl: "/icon-onboarding.svg",
    featureHeading: "Fast Onboarding",
    featurContent:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    featureImgUrl: "./icon-api.svg",
    featureHeading: "Open API",
    featurContent:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

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
        <section className="hero bg-white  md:flex md:flex-row-reverse min-h-screen md:overflow-hidden   ">
          <div className="hero-img h-[400px]  w-full md:w-1/2 md:min-h-[675px] relative ">
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
        <section className="easybank-feature bg-[#fafafa] px-6 py-16 md:px-48 md:py-24">
          <h2 className="section-heading text-center text-dark-blue text-3xl font-light leading-9 md:text-left md:text-4xl md:leading-10">
            Why choose Easybank?
          </h2>
          <p className="section-para text-center text-light-gray text-sm font-light  leading-5 mt-6 md:text-left md:text-lg md:leading-7 md:w-3/5 md:mt-10 ">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className="feature-container mt-16 md:flex md:justify-center items-center">
            {featureData.map((item, index) => {
              return (
                <div className="feature-card" key={index}>
                  <div className="card-img flex flex-col justify-center items-center p-4 md:items-start">
                    <Image
                      src={item.featureImgUrl}
                      width={1080}
                      height={1080}
                      className="w-[72px] h-[72px]"
                      alt="feature-icon"
                    />
                    <h3 className="card-heading text-dark-blue text-xl font-light leading-6 mt-8 md:mt-12">
                      {item.featureHeading}
                    </h3>
                    <p className="card-content text-center text-light-gray text-sm font-light leading-5 mt-2 md:text-left md:mt-8">
                      {item.featurContent}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
