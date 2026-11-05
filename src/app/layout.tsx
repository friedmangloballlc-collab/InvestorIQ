import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pitch Capital | AI-Powered Fundraising Platform",
  description:
    "An AI fundraising platform. Create investor-ready pitch decks in 90 seconds, match with relevant investors, and close deals securely.",
  keywords: [
    "AI fundraising",
    "pitch deck generator",
    "investor matching",
    "venture capital",
    "startup funding",
    "capital raising",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
