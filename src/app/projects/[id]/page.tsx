import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Globe, Code2 } from "lucide-react";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 px-4 max-w-5xl mx-auto">
      <Link href="/#work" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition mb-12 font-medium bg-gray-100 dark:bg-zinc-900 px-6 py-3 rounded-full shadow-sm hover:shadow-md">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>
      
      <div className="bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-3xl shadow-sm overflow-hidden">
        {/* Cover Image Placeholder with Gradient */}
        <div className={`w-full aspect-video ${project.image} relative`}>
           <img src={project.cover} alt={project.title} className="w-full h-full object-cover mix-blend-overlay opacity-80" />
        </div>
        
        <div className="p-8 md:p-12">
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-8">
            {project.title}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl">
              {project.description}
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-5 py-2.5 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-zinc-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100 dark:border-zinc-800">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-sm hover:shadow-md">
              <Globe size={18} /> View Live Project
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition shadow-sm hover:shadow-md">
              <Code2 size={18} /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
