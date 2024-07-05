import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
  const data = [
    {
      day: "Sun",
      date: "6/9 7:11pm",
      name: "Adobe Creative Suit Monthly Plan",
      status: "Paid",
    },
    {
      day: "Fri",
      date: "6/7 1:11am",
      name: "Amazon Premium Card",
      status: "Paid",
    },
    {
      day: "Mon",
      date: "6/3 3:07pm",
      name: "Sent Payment to Client X",
      status: "Paid",
    },
    {
      day: "Thu",
      date: "5/30 3:00pm",
      name: "Changed Password",
      status: "Account",
    },
  ];
  return (
    <div className="text-white">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">Actividad de clases</h4>
        <BsThreeDots />
      </div>
      <div className="mt-4 relative">
        {data.map((transaction, index) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-2 mb-8">
              <div className="col-span-1">
                <h5 className="font-semibold">{transaction.day}</h5>
                <h6 className="text-sm">{transaction.date}</h6>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="h-3 w-3 bg-red-600 rounded-full"></div>
              </div>
              <div className="col-span-1">
                <h5 className="font-semibold">{transaction.name}</h5>
                <h5 className="text-sm">{transaction.status}</h5>
              </div>
            </div>
          );
        })}
        <div className="absolute top-0 left-1/4 h-full border-l-2 border-dotted border-white"></div>
      </div>
    </div>
  );
}
