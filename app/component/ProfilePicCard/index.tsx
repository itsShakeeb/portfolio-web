import Image from "next/image";
import React from "react";

const ProfilePictureCard = () => {
  return (
    <div className="min-h-[80vh] bg-[#000] w-[500px] justify-center rounded-[40px] p-2 pb-4  flex items-end  ">
      <Image
        src={"/asset/ProfileImage.png"}
        alt="profileImg"
        width={400}
        height={500}
        className="object-cover w-auto h-auto"
        // style={{height:'70vh'}}
      />
    </div>
  );
};

export default ProfilePictureCard;
