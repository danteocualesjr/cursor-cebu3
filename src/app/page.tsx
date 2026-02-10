import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Speakers from "@/components/Speakers";
import GetInvolved from "@/components/GetInvolved";
import Opportunities from "@/components/Opportunities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Events />
        <Gallery />
        <Speakers />
        <GetInvolved />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
