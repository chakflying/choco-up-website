import type React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import Growth from "@/components/growth";
import SuccessStory from "@/components/success-story";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Choco Up: Growth capital for fast-growing businesses",
  description: "Asia's #1 revenue-based financing and growth platform. Get up to USD 5M with no equity dilution. Apply in minutes and get funded within 48 hours.",
};

/**
 * Home page
 * @returns {React.JSX.Element}
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Growth />
      <SuccessStory />
      <Testimonials />
      <Footer />
    </main>
  );
}
