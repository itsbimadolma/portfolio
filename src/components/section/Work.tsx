"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, X, Code2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="work" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">My portfolio</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">My latest work</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-900 aspect-video shadow-sm cursor-pointer"
          >
            {/* Project Image */}
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={project.id <= 2}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Floating label matching the image */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-5 shadow-lg flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{project.category}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{project.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center border border-gray-100 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
                <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="inline-flex items-center gap-2 border border-gray-200 dark:border-zinc-700 px-8 py-3.5 rounded-full text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-900 transition duration-300 font-medium group shadow-sm"
          >
            Show more <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-zinc-800 transition shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full aspect-video relative">
                <Image
                  src={selectedProject.cover}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">{selectedProject.category}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-6">{selectedProject.title}</h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technologies used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <a href={selectedProject.liveUrl} className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-sm">
                    <Globe size={18} /> View Live
                  </a>
                  <a href={selectedProject.githubUrl} className="flex items-center gap-2 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition shadow-sm">
                    <Code2 size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
