import { Features } from "@/components/sections/Home/Features/Features";
import { Hero } from "@/components/sections/Home/Hero/Hero";
import { ShowCase } from "@/components/sections/Home/ShowCase/ShowCase";
import { Navbar } from "@/components/sections/navbar/Navbar";
import { Button } from "@/components/ui/buttons/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-manrope">
        <Hero />
        <ShowCase />
        <Features />
      </main>
    </>
  );
}
