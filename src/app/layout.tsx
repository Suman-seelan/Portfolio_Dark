// ...existing code...
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PreloaderWrapper from "./PreloaderWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D_a_r_k_l_o_v_3 - A Developer Story",
  description: "Full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable applications and digital solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
