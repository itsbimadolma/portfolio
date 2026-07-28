import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 text-center overflow-hidden">
      {/* Subtle pastel background mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/50 dark:bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-yellow-50/50 dark:bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 bg-gray-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-sm z-10 mx-auto">
        <img src="/Avatar.jpg" alt="Bima Dolma Lama" className="w-full h-full object-cover" />
      </div>
      <p className="bg-white/60 border border-gray-100 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-flex items-center gap-2">
        Hi! I'm Bima Dolma Lama <span className="text-base">👋</span>
      </p>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto z-10 tracking-tight">
        frontend web developer<br /> based in Kathmandu.
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed text-lg z-10">
        I am a frontend developer from Kathmandu, Nepal with 3 years of experience in multiple companies like F1Soft International, Leapfrog Technology and Web Experts Nepal.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10">
        <a href="#contact" className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-300 shadow-md">
          connect with me <ArrowRight size={18} />
        </a>
        <a href="/jamin_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 px-8 py-3.5 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-800 transition duration-300 text-gray-800 dark:text-gray-200 shadow-sm">
          my resume <Download size={18} />
        </a>
      </div>
    </section>
  );
}






