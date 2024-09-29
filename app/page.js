import Image from "next/image";
import Hero from "./components/hero";
import Nav from "./components/nav";
import airbnblogo from './res/airbnb_logo.svg'
import googlelogo from './res/google_logo.svg'
import microsoftlogo from './res/microsoft_logo.svg'
import fedexlogo from './res/fedex_logo.svg'
import amazonlogo from './res/amazon_logo.svg'

export default function Home() {
  return (
    <div className="w-full min-h-screen md:w-[76.18056%] mx-auto">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
      </main>
      <footer className="w-full h-32 grid grid-cols-5 justify-center items-center">
        <Image src={airbnblogo} alt="airbnb logo" width={104} height={32} />
        <Image src={googlelogo} alt="airbnb logo" width={96} height={32} />
        <Image src={microsoftlogo} alt="airbnb logo" width={123} height={32} />
        <Image src={fedexlogo} alt="airbnb logo" width={101} height={32} />
        <Image src={amazonlogo} alt="airbnb logo" width={104} height={32} />
      </footer>
    </div>
  );
}
