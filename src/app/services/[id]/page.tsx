import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id.toString() }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen py-32 px-4 max-w-4xl mx-auto">
      <Link href="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition mb-12 font-medium bg-gray-100 dark:bg-zinc-900 px-6 py-3 rounded-full shadow-sm hover:shadow-md">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      
      <div className="bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 p-8 md:p-12 rounded-3xl shadow-sm">
        <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 shadow-sm ${service.bg} ${service.color}`}>
          <Icon size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6">
          {service.title}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
            {service.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
