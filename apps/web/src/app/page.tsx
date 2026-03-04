import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { Philosophy } from "@/components/philosophy";
import { Testimonials } from "@/components/testimonials";
import { Metrics } from "@/components/metrics";
import { InstagramGrid } from "@/components/instagram-grid";
import { FooterCta } from "@/components/footer-cta";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Philosophy />
      <Testimonials />
      <Metrics />
      <InstagramGrid />
      <FooterCta />
      <Footer />
      <ChatBot />
    </>
  );
}
