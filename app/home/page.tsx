import React from "react";
import ProfilePictureCard from "../component/ProfilePicCard";

const Home = () => {
  return (
    <div className="h-[100vh] relative">
      <div className="fixed w-[100%] -z-[1] h-[200%] bg-[#ffb400] left-[-83%] top-[-50%] rotate-[-15deg]"></div>
      <div className="flex justify-between items-center gap-10 h-full">
        <div className="flex h-full ml-10 items-center">
          <ProfilePictureCard />
        </div>
        <div>
          I'M STEVE MILNER. WEB DESIGNER I'm a Tunisian based web designer &
          front‑end developer focused on crafting clean & user‑friendly
          experiences, I am passionate about building excellent software that
          improves the lives of those around me.
        </div>
      </div>
    </div>
  );
};

export default Home;
