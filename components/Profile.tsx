import React from "react";
import profile_pic from "@/public/siddhesh_profile.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  return (
    <div>
      <div className="">
        <Image src={profile_pic} alt="Siddhesh Profile pic" className="w-60 rounded-full" />
        <div className="font-bold text-white text-[38px]">Siddhesh Sule</div>
        <div className="text-wrap w-96 text-[24px] mt-3 mb-3 text-white">
          Automotive Project Leader & Consultant
        </div>
        <div className="text-wrap w-96 text-[18px] z-10 text-justify">
          Delivering High-Impact Automotive Solutions for German OEMs & Tier-1 Suppliers
        </div>
        <div className="flex mt-3 text-[32px] gap-5 bottom-0">
          <div className="cursor-pointer">
            <Link
              href="https://github.com/siddheshsule"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="hover:scale-125 transition-all hover:text-white" />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/siddhesh-sule/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-125 transition-all hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
