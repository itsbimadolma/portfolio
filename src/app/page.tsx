import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Services from "@/components/section/Services";
import Work from "@/components/section/Work";
import Testimonials from "@/components/section/Testimonials";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <hr className="w-48 mx-auto border-gray-200 dark:border-zinc-800 my-10" />
      <About />
      <hr className="w-48 mx-auto border-gray-200 dark:border-zinc-800 my-10" />
      <Services />
      <hr className="w-48 mx-auto border-gray-200 dark:border-zinc-800 my-10" />
      <Work />
      <hr className="w-48 mx-auto border-gray-200 dark:border-zinc-800 my-10" />
      <Testimonials />
      <hr className="w-48 mx-auto border-gray-200 dark:border-zinc-800 my-10" />
      <Contact />
    </div>
  );
}


