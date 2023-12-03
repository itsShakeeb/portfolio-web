import Link from "next/link";
import React from "react";
import Tab from "../Tab";
import Blog from "@/public/asset/Blog.icon";
import Home from "@/public/asset/Home.icon";
import Person from "@/public/asset/Person.icon";
import Portfolio from "@/public/asset/Portfolio.icon";
import Email from "@/public/asset/Email.icon";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col gap-3 justify-center items-end dark:text-white text-black">
      <Link href={"/"}>
        <Tab title="Home">
          <Home />
        </Tab>
      </Link>
      <Link href={"/about"}>
        <Tab title="About">
          <Person />
        </Tab>
      </Link>
      <Link href={"/portfolio"}>
        <Tab title="Portfolio">
          <Portfolio />
        </Tab>
      </Link>
      <Link href={"/contact"}>
        <Tab title="Contact">
          <Email />
        </Tab>
      </Link>
      <Link href={"/blog"}>
        <Tab title="Blog">
          <Blog />
        </Tab>
      </Link>
    </nav>
  );
};

export default Navbar;
