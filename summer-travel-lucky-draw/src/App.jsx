import Hero from "./components/Hero";
import LuckyWheel from "./components/LuckyWheel";
import PrizeCards from "./components/PrizeCards";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";

export default function App() {
  return (
    <div className="app">
      <Hero />

      <section className="section">
        <LuckyWheel />
      </section>

      <section className="section">
        <PrizeCards />
      </section>

      <section className="section">
        <FAQ />
      </section>

      <CTASection />
    </div>
  );
}