import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import MobileNavigation from "@/components/navigation/mobilenav";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: {
    template: "享家蔬果園 | %s",
    default: "享家蔬果園",
  },
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
      <body>
        <div className="w-full h-screen flex flex-col justify-between items-center px-4 text-xl bg-gradient-to-r from-indigo-300 overflow-x-hidden">
          <Navigation />
          <MobileNavigation />
          <main className=" flex flex-row flex-wrap justify-center mb-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
