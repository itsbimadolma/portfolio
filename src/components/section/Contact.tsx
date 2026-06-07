import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto relative overflow-hidden">
      {/* Subtle pastel background mesh */}
      <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] bg-pink-50/50 dark:bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-50/50 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-12 relative z-10">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">Connect with me</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6">Get in touch</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          I'd love to hear from you! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <form className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700 transition shadow-sm placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700 transition shadow-sm placeholder:text-gray-400"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Your message"
          className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-zinc-700 transition shadow-sm placeholder:text-gray-400 resize-none"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-300 shadow-md font-medium group"
          >
            Send message <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </section>
  );
}
