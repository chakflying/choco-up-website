import type React from "react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import Growth from "@/components/growth";
import SuccessStory from "@/components/success-story";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

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
