import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToggleMode from "./component/ToggleMode";
import Navbar from "./component/Navbar";
import AnimationOnScroll from "./component/Animation/AnimationOnScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shakeeb Arsalan",
  description: "Shakeeb Arsalan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="dark:bg-[#111]  bg-white min-h-[100vh] relative overflow-hidden">
          {/* <AnimationOnScroll /> */}
          <div
            id="header"
            className="fixed z-[999] top-5 w-fit right-0 pr-[20px]"
          >
            <ToggleMode />
          </div>
          <div className="fixed z-[999] top-1/2 right-0 w-fit translate-y-[-50%] pr-[10px]">
            <Navbar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
