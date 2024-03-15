import type { Metadata } from "next";
import cn from 'classnames';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI content app dashboard",
  description: "A dashboard for interacting with backend apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-gray-200')}>{children}</body>
    </html>
  );
}
