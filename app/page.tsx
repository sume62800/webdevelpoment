import Image from "next/image";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import Servicesme from '@/components/services/servicesme'
import Team from "@/components/team/team";
import SocialProof from "@/components/proof/socialProof";
import Query from "@/components/query/query";
import Heroflippingword from "@/components/hero/heroflippingword";
import { ImagesSliderDemo } from "@/components/hero/imageHero";
import { StickyScrollRevealDemo } from "@/components/services/stickychoices";
import Hero from "@/components/heroSection/hero";
import Aboutsection from "@/components/aboutsection";
import ChooseUS from "@/components/services/chooseus";



export default function Home() {
  return (
    <main className="">
      {/* <HeroSection/> */}
      {/* <Heroflippingword/> */}
      {/* <ImagesSliderDemo/> */}
      <Hero/>
      <Aboutsection/>
      <ServicesSection/>
      <ChooseUS/>
      <Servicesme/>
      {/* <StickyScrollRevealDemo/> */}
      <Query/>
      <Team/>
      <SocialProof/>
      

    </main>
  );
}
