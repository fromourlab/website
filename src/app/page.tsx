import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
