import React from "react";
import ActivityLog from "./ActivityLog";

import Navbar from "./Navbar";
import Overview from "./Overview";



export default function DashboardApp() {
  return (
    <div className="w-full h-full p-8 bg-[rgba(6,7,15,0.938)] backdrop-blur-lg">
      <Navbar />
      <div className="grid grid-cols-4 gap-8 mt-8">
        <div className="col-span-3 flex flex-col gap-12">
     
        
        
        </div>
        <div className="col-span-1 flex flex-col gap-12">
          <Overview />
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}
