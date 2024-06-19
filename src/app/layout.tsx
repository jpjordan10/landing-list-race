import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoToTop from "@/components/GoToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "List Race by Jean Jordan",
  description: "Dev:Jean Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
