"use client";
import { Leva } from "leva";
import "./globals.css";
import { Header } from "@/components/layout";

export const metadata = {
  title: "Ha young Kim",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        <Leva />
      </body>
    </html>
  );
}
