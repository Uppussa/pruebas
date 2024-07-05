import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

export default function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
    },
    {
      title: "Account",
      icon: MdAccountCircle,
    },
    {
      title: "Settings",
      icon: AiFillSetting,
    },
  ];

  return (
    <div className="sidebar w-[350px] bg-gray-800 text-white">
      <div className="brand bg-black h-9 flex justify-center items-center">
        <h2 className="font-black tracking-wider">
          Fun<span className="text-pink-600 font-black">val</span>
        </h2>
      </div>
      <div className="mt-8 ml-auto">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Cyan to blue
</span>
</button>
</div>
    </div>
  );
}
