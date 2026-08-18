import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import PlanBuilder from "@/components/PlanBuilder";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSecurity from "@/components/TrustSecurity";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Features />
        <PlanBuilder />
        <Pricing />
        <Testimonials />
        <FAQ />
        <TrustSecurity />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
