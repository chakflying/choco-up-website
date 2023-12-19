import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Choco Up",
  description: "Choco Up Website",
};

/**
 * Root Layout component of the website
 * @returns {React.JSX.Element} - Root element
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
