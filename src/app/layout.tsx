import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "MORQENT | Autonomous Energy Intelligence & Digital Twin Platform",
  description:
    "From Isolated Energy Assets to Intelligent, Coordinated and Self-Optimising Energy Networks. AI-powered digital twins, predictive intelligence, and constraint-aware mathematical optimisation.",
  keywords: [
    "Energy Intelligence",
    "Digital Twin",
    "Distributed Energy Resources",
    "DER Coordination",
    "Battery Storage Optimization",
    "Mathematical Optimization",
    "MILP",
    "Multi-Agent AI",
    "Net Zero",
    "MORQENT",
  ],
  authors: [{ name: "MORQENT Platform" }],
  openGraph: {
    title: "MORQENT | Autonomous Energy Intelligence Platform",
    description:
      "Model · Predict · Optimise · Transform. Closed-loop multi-agent digital twin platform for distributed energy assets.",
    url: "https://morqent.energy",
    siteName: "MORQENT",
    images: [
      {
        url: "/assets/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "MORQENT Energy Intelligence & Digital Twin Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORQENT | Autonomous Energy Intelligence",
    description:
      "From Isolated Energy Assets to Intelligent, Coordinated and Self-Optimising Energy Networks.",
    images: ["/assets/hero-banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-space-900 text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
