import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: "400",
  variable: "--font-ovo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bima Dolma - Portfolio",
  description: "Welcome to my portfolio! I'm Bima Dolma, a passionate software developer specializing in web development. Explore my projects, skills, and experience to see how I can bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${ovo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
