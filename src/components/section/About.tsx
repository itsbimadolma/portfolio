import { Code2, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">About me</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative shadow-sm">
          <img src="/About.jpg" alt="Bima Dolma Lama" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg">
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-sm dark:hover:shadow-md transition duration-300 bg-white dark:bg-zinc-900/50">
              <Code2 className="mb-4 text-gray-700 dark:text-gray-300" size={24} />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white text-lg">Languages</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">HTML, CSS, JavaScript React Js, Next Js</p>
            </div>
            <div className="border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-sm dark:hover:shadow-md transition duration-300 bg-white dark:bg-zinc-900/50">
              <GraduationCap className="mb-4 text-gray-700 dark:text-gray-300" size={24} />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white text-lg">Education</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">B.Tech in Computer Science</p>
            </div>
            <div className="border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-sm dark:hover:shadow-md transition duration-300 bg-white dark:bg-zinc-900/50">
              <Briefcase className="mb-4 text-gray-700 dark:text-gray-300" size={24} />
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white text-lg">Projects</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Built more than 5 projects</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-gray-700 dark:text-gray-300">Tools I use</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { src: "/vs code.svg", name: "VS-Code" },
                { src: "/gi.svg", name: "Git" },
                { src: "/github.svg", name: "Github" },
                { src: "/linkedin.svg", name: "Linkedin" },
                { src: "/sublime-text.svg", name: "Sublime Text" },
                { src: "/postman.svg", name: "Postman" },
                { src: "/npm.svg", name: "NPM" },
              ].map((tool, i) => (
                <div
                  key={i}
                  title={tool.name}
                  className="w-14 h-14 rounded-xl bg-white dark:bg-zinc-900/50 flex items-center justify-center border border-gray-200 dark:border-zinc-800 hover:scale-110 hover:border-gray-300 dark:hover:border-zinc-700 transition cursor-pointer shadow-sm group"
                >
                  <img src={tool.src} alt={tool.name} className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
