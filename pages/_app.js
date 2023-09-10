import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${public_sans.variable} font-public-sans`}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
