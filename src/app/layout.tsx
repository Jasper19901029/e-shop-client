import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "享家蔬果園",
  description: "享家蔬果園",
  keywords: "享家蔬果園",
  creator: "Jasper",
  applicationName: "享家蔬果園",
  name: "享家蔬果園",
  url: "https://e-shop-client-alpha.vercel.app/",
  alternateName: "享家蔬果園",

  verification: {
    google: "_yCLMbuZEdPmxpQA2eIFUPrzscVsFjjH9XFeRbzQCM4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between items-center overflow-x-hidden px-4 text-sm sm:text-lg lg:text-xl">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

//
