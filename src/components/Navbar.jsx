import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../assets/avatarImage.jpeg";

export default function Navbar() {
  return (
    <div className="flex justify-between text-white">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="" className="h-16 rounded-full" />
        <div className="info">
          <h4 className="text-lg font-bold">Kishan Sheth</h4>
          <h6 className="text-green-500">Online</h6>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <IoMdNotificationsOutline className="text-2xl" />
        <FiMail className="text-2xl" />
        <div className="flex items-center bg-white rounded-lg py-2 px-4">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-60 px-4 border-none focus:outline-none"
          />
          <FaSearch className="text-pink-600" />
        </div>
      </div>
    </div>
  );
}
