import React from "react";
import { GeistSans, GeistMono } from "@/fonts"; // adjust path if needed
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Components Demo - Premium Design System",
  description:
    "Experience beautiful glassmorphism effects, smooth animations, and premium UI components",
  generator: "v0.app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
