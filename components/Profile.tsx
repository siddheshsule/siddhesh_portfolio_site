import React from "react";
import profile_pic from "@/public/siddhesh_profile.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  return (
    <div>
      <div className="absolute left-0 ml-12 mt-24 z-10 text-white">
        <Image src={profile_pic} alt="Siddhesh Profile pic" className="w-36" />
        <div className="font-bold text-white text-[38px]">Siddhesh Sule</div>
        <div className="text-wrap w-96 text-[24px] mt-3 mb-3">
          Full-Stack Developer
        </div>
        <div className="text-wrap w-96 text-[18px] z-10 text-justify">
          I build pixel-perfect user interfaces for web2 and web3. Security,
          usability, optimization and maintainability are some of my top
          priorities.
        </div>
        <div className="flex mt-3 text-[32px] gap-3 bottom-0">
          <Link
            href="https://github.com/siddheshsule"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/siddhesh-sule/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
