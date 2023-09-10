import Head from "next/head";
import Image from "next/image";

// Data for features and articles
const featureData = [
  {
    featureImgUrl: "/icon-online.svg",
    featureHeading: "Online Banking",
    featurContent:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    alt: "icon-online",
  },
  {
    featureImgUrl: "/icon-budgeting.svg",
    featureHeading: "Simple Budgeting",
    featurContent:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    alt: "icon-budgeting",
  },
  {
    featureImgUrl: "/icon-onboarding.svg",
    featureHeading: "Fast Onboarding",
    featurContent:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    alt: "icon-onboarding",
  },
  {
    featureImgUrl: "./icon-api.svg",
    featureHeading: "Open API",
    featurContent:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    alt: "icon-api",
  },
]; // Feature data including images, headings, and content

const articleData = [
  {
    articleImg: "/image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    alt: "money image",
  },
  {
    articleImg: "/image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    alt: "restaurant",
  },
  {
    articleImg: "/image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    alt: "plane",
  },
  {
    articleImg: "/image-confetti.jpg",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    alt: "confetti",
  },
]; // Article data including images, authors, titles, and content

// Define the Home component
export default function Home() {
  return (
    <>
      <Head>
        {/* Set the page title and favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>Frontend Mentor | Easybank landing page</title>
      </Head>
      <main>
        {/* Hero section */}
        <section className="hero bg-white md:flex md:flex-row-reverse min-h-screen md:overflow-hidden">
          {/* Hero image */}
          <div className="hero-img h-[400px] w-full md:w-1/2 md:min-h-[675px] relative">
            {/* Image component from Next.js */}
            <Image
              src={"/image-mockups.png"}
              width={1080}
              height={1080}
              className="w-full h-auto absolute md:w-[764px] -top-40 md:-top-[120px] md:left-32 object-cover"
              alt="hero-img"
              priority
            />
          </div>
          {/* Hero content */}
          <div className="hero-content px-6 mt-8 flex flex-col justify-center items-center md:w-2/5 md:pl-12 md:items-start">
            {/* Heading */}
            <h1 className="main-heading text-dark-blue text-center text-[37px] font-light leading-[42px] md:text-left md:text-[52px] md:leading-[60px]">
              Next generation digital banking
            </h1>
            {/* Paragraph */}
            <p className="main-para text-center text-light-gray text-sm font-light leading-5 mt-6 md:text-left md:text-lg md:leading-7 md:pr-24">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            {/* Button */}
            <button className="action-btn px-[35px] py-[13px] rounded-full text-sm font-normal leadin-5 text-white mt-[70px] md:text-left md:mt-9 hover:opacity-50 transition-opacity ease-in-out duration-300">
              Request Invite
            </button>
          </div>
        </section>

        {/* Easybank feature section */}
        <section className="easybank-feature bg-[#fafafa] px-6 py-16 md:px-48 md:py-24">
          {/* Section heading */}
          <h2 className="section-heading text-center text-dark-blue text-3xl font-light leading-9 md:text-left md:text-4xl md:leading-10">
            Why choose Easybank?
          </h2>
          {/* Section paragraph */}
          <p className="section-para text-center text-light-gray text-sm font-light leading-5 mt-6 md:text-left md:text-lg md:leading-7 md:w-3/5 md:mt-10">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          {/* Feature cards */}
          <div className="feature-container mt-16 md:flex md:justify-center items-center">
            {featureData.map((item, index) => {
              return (
                <div className="feature-card" key={index}>
                  {/* Feature image */}
                  <div className="card-img flex flex-col justify-center items-center p-4 md:items-start">
                    {/* Image component for features */}
                    <Image
                      src={item.featureImgUrl}
                      width={1080}
                      height={1080}
                      className="w-[72px] h-[72px]"
                      alt={item.alt}
                      priority
                    />
                    {/* Feature heading */}
                    <h3 className="card-heading text-dark-blue text-xl font-light leading-6 mt-8 md:mt-12">
                      {item.featureHeading}
                    </h3>
                    {/* Feature content */}
                    <p className="card-content text-center text-light-gray text-sm font-light leading-5 mt-2 md:text-left md:mt-8">
                      {item.featurContent}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Latest Articles section */}
        <section className="article bg-white px-6 py-16 md:px-48 md:py-24">
          {/* Section heading */}
          <h2 className="section-heading text-dark-blue text-3xl font-light leading-9">
            Latest Articles
          </h2>
          {/* Article cards */}
          <div className="article-container space-y-8 mt-6 md:mt-9 md:flex md:space-y-0 md:gap-x-[30px]">
            {articleData.map((item, index) => {
              return (
                <div className="article-card shadow-md" key={index}>
                  {/* Article image */}
                  <Image
                    src={item.articleImg}
                    width={1080}
                    height={1080}
                    className="w-full h-[200px]"
                    alt=""
                  />
                  {/* Article content */}
                  <div className="card-content p-[30px]">
                    <span className="author text-[10px] font-light leading-3 text-light-gray">
                      {item.author}
                    </span>
                    {/* Article title */}
                    <h3 className="article-heading text-lg font-light leading-5 text-dark-blue mt-3 hover:text-[#31d35c] cursor-pointer transition-colors ease-in-out duration-300">
                      {item.title}
                    </h3>
                    {/* Article content */}
                    <p className="article-content text-xs text-light-gray leading-[18px] mt-2">
                      {item.content}
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
