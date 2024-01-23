import { Features } from "@/components/sections/Home/Features/Features";
import { Hero } from "@/components/sections/Home/Hero/Hero";
import { Navbar } from "@/components/sections/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-manrope">
        <Hero />
        <Features />
      </main>
    </>
  );
}
