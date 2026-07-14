import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sabbir-azim.github.io"),
  title: { default: "Sabbir Azim | Generative AI Engineer", template: "%s | Sabbir Azim" },
  description: "Generative AI Engineer building production voice agents, multi-agent systems, RAG pipelines and full-stack AI products.",
  keywords: ["Generative AI Engineer", "Agentic AI", "Voice AI", "RAG", "LangGraph", "FastAPI", "Next.js", "Bangladesh"],
  authors: [{ name: "Sabbir Azim" }],
  creator: "Sabbir Azim",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", title: "Sabbir Azim | Generative AI Engineer", description: "Production-minded agentic AI, voice systems and RAG products.", siteName: "Sabbir Azim", images: [{ url: "/og-sabbir-azim.png", width: 1536, height: 1024, alt: "Sabbir Azim - Generative AI Engineer" }] },
  twitter: { card: "summary_large_image", title: "Sabbir Azim | Generative AI Engineer", description: "Production-minded agentic AI, voice systems and RAG products.", images: ["/og-sabbir-azim.png"] },
  icons: { icon: "/og-sabbir-azim.png", shortcut: "/og-sabbir-azim.png" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t||p}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
