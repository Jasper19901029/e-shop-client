import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "e-shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between items-center sm:p-16 text-sm sm:text-xl lg:text-2xl">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

//
