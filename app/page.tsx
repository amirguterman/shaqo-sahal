import Nav from "./components/Nav";
import Hero from "./components/Hero";
import IndustryFocus from "./components/IndustryFocus";
import InvestmentOpportunities from "./components/InvestmentOpportunities";
import HowItworks from "./components/HowItworks";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <div className="fixed bg-white dark:bg-gray-950  dark:shadow-gray-900 z-50 top-0 inset-x-0 ">
        <Nav />
      </div>
      <Hero />
      <main className="max-w-7xl mx-auto">
        <IndustryFocus />
        <InvestmentOpportunities />
      </main>

      <HowItworks />
    </div>
  );
}
