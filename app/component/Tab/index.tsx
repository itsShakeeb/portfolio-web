"use client";

import React from "react";

import Image from "next/image";
import "./index.css";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils/cn";

interface ITab {
  title: string;
  children: React.JSX.Element;
}
const Tab = (props: ITab) => {
  const { title, children } = props;
  const pathname = usePathname();
  const [, absolutePath] = pathname.split("/");

  return (
    <li
      role="tab"
      className={cn(
        `flex items-center bg-[#2b2a2a] w-[3rem] h-[3rem] justify-center rounded-[100%] p-2 relative list-decimal-[none] link-tab z-[1] text-white`,
        {
          "bg-[#ffb400]":
            pathname === "/" && title === "Home"
              ? true
              : absolutePath === title.toLowerCase(),
        }
      )}
    >
      {children}
      <h2 className="icon-title absolute flex items-center justify-center px-[2rem] top-0 right-0 opacity-0 bg-[#ffb400] h-[3rem] opacity-1 -z-[1]">
        {title}
      </h2>
    </li>
  );
};

export default Tab;
