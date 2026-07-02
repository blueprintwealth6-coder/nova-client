import SectionAnimation from "@/components/SectionAnimation";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AIShowcase from "@/components/AIShowcase";
import Trending from "@/components/Trending";
import VideoFeed from "@/components/VideoFeed";
import CreatorCards from "@/components/CreatorCards";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden relative">
<SectionAnimation>
      <BackgroundGlow />
      </SectionAnimation>
      <SectionAnimation>
      <Navbar />
      </SectionAnimation>
      <SectionAnimation>
      <Hero />
      </SectionAnimation>
      <SectionAnimation>
      <Stats />
      </SectionAnimation>
      <SectionAnimation>
      <Features />
      </SectionAnimation>
      <SectionAnimation>
      <AIShowcase />
      </SectionAnimation>
      <SectionAnimation>
      <Trending />
      </SectionAnimation>
      <SectionAnimation>
      <VideoFeed />
      </SectionAnimation>
      <SectionAnimation>
      <CreatorCards />
      </SectionAnimation>
      <SectionAnimation>
      <Testimonials />
      </SectionAnimation>
      <SectionAnimation>
      <Pricing />
      </SectionAnimation>
      <SectionAnimation>
      <CTA />
      </SectionAnimation>
      <SectionAnimation>
      <FAQ />
      </SectionAnimation>
      <SectionAnimation>
      <Footer />
      </SectionAnimation>
    </main>
  );
}