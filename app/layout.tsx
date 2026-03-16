import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Liow Digital — AI-Powered Websites for Local Businesses",
  description: "Liow Digital builds modern websites with AI chatbots and automation for local businesses in McKinney, TX and beyond. Custom web design, SEO, and lead generation.",
  keywords: "AI websites, web design McKinney TX, chatbot integration, local business websites, Liow Digital, Nathan Liow",
  authors: [{ name: "Nathan Liow" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}