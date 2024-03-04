import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col justify-between items-center px-4 text-xl bg-gradient-to-r from-indigo-300">
        {children}
      </body>
    </html>
  );
}
