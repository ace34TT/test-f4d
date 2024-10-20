// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from '../app/ClientLayout';
import {ThemeProvider} from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "F4D",
  description: "French4 Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <ClientLayout>{children}</ClientLayout>
      </ThemeProvider>
      </body>
    </html>
  );
}