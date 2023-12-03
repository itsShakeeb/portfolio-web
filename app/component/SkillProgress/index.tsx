import React from "react";
import "./index.css";
const SkillProgress = () => {
  return (
    <div
      className="custom-radial radial-progress border-[10px] border-[#252525]"
      style={{
        //@ts-ignore
        "--value": "70",
        "--size": "7rem",
        "--thickness": "10px",
        color: "#ffb400",
      }}
      role="progressbar"
    >
      <span className="text-white"> 70%</span>
    </div>
  );
};

export default SkillProgress;
