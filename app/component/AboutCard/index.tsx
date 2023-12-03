import React from "react";

const Line = () => (
  <div className="h-[2px] border border-[#252525] w-[50px] mt-3" />
);
const AboutCard = () => {
  return (
    <div className="min-w-[200px] border rounded-md  border-[#252525] bg-transparent pt-[20px] pr-[30px] pb-[35px] pl-[40px]">
      <h1 className="text-5xl font-bold mb-3 tracking-wider  text-[#ffb400]  ">
        12<sup className="">+</sup>
      </h1>
      <div className="flex gap-3">
        <Line />
        <div className="flex flex-col gap-1">
          <h2 className="uppercase text-sm">Year of </h2>
          <h2 className="uppercase text-sm ">Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
