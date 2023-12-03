import React from "react";
import "./page.css";
import ProfilePictureCard from "./component/ProfilePicCard";
export default function Home() {
  return (
    <div className="h-[100vh] relative">
      <div className="fixed w-[100%] h-[200%] bg-[#ffb400] left-[-83%] top-[-50%] rotate-[-15deg]"></div>
      <div className="flex items-center gap-10 h-full">
        <div className="static z-10 flex h-full ml-10 items-center">
          <ProfilePictureCard />
        </div>
        <div className="flex-grow-[1] ">
          <div className="flex justify-center items-center">
            <section className="relative w-1/2">
              <h1 className="uppercase title-heading font-bold text-[2rem] mb-3 ml-[70px] text-[#ffb400]">
                I'm Shakeeb Arsalan.
                <br />
                <span className="dark:text-white text-[#111]">Software Engineer</span>
              </h1>
              <p className="text-[1rem] dark:text-white text-[#111] tracking-wider">
                I'm a Delhi based web designer & front‑end developer focused
                on crafting clean & user‑friendly experiences, I am passionate
                about building excellent software that improves the lives of
                those around me.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
