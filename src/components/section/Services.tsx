"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services, type Service } from "@/lib/data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedService]);

  return (
    <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">What I offer</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">My services</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          I am a frontend developer from Kathmandu with a passion for creating beautiful and functional user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setSelectedService(s)}
            className="border border-gray-100 dark:border-zinc-800 p-8 rounded-2xl hover:shadow-md dark:hover:shadow-xl transition duration-300 bg-white dark:bg-zinc-900/50 group cursor-pointer shadow-sm flex flex-col h-full"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${s.bg} ${s.color}`}>
              <s.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{s.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{s.desc}</p>
            <button className="flex items-center gap-2 text-sm font-medium group-hover:text-gray-900 dark:group-hover:text-white text-gray-400 dark:text-gray-500 transition mt-auto">
              Read more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-zinc-800 transition shadow-sm"
              >
                <X size={20} />
              </button>

              {selectedService.image && (
                <div className="w-full h-48 sm:h-56 relative bg-gray-100 dark:bg-zinc-900">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="p-8 md:p-10 text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${selectedService.bg} ${selectedService.color}`}>
                  <selectedService.icon size={40} />
                </div>
                <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-6">{selectedService.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {selectedService.fullDescription}
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-sm w-full md:w-auto"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

