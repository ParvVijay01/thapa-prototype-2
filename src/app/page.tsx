import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PopularDelights from "@/components/sections/PopularDelights";
import FindUsPromo from "@/components/sections/FindUsPromo";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-background-light">
      <Header variant="A" />
      <Hero />
      <Features />
      <PopularDelights />
      <FindUsPromo />
      <Footer variant="A" />
    </main>
  );
}
