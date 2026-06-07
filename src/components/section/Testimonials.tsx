import { Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    text: "Bima is an exceptional frontend developer. She transformed our vision into a stunning reality with an incredible eye for detail.",
  },
  {
    name: "Mark Williams",
    role: "Product Manager",
    text: "Working with Bima was a breeze. Her technical skills combined with a strong design sense make her an invaluable asset to any team.",
  },
  {
    name: "Emily Chen",
    role: "Design Lead",
    text: "I was blown away by the quality of the UI implementation. The animations and responsiveness are top-notch.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">Client words</p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">Testimonials</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-8 rounded-3xl shadow-sm hover:shadow-md dark:hover:shadow-xl transition duration-300 relative group flex flex-col justify-between h-full">
            <Quote className="text-gray-100 dark:text-zinc-800/80 absolute top-6 right-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" size={64} />
            <p className="text-gray-600 dark:text-gray-300 mb-8 relative z-10 leading-relaxed pt-2">"{t.text}"</p>
            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center border-2 border-white dark:border-zinc-700 shadow-sm">
                <User size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
