import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    data1: 4000,
    data2: 2400,
  },
  {
    data1: 3000,
    data2: 1398,
  },
  {
    data1: 2000,
    data2: 9800,
  },
  {
    data1: 2780,
    data2: 3908,
  },
  {
    data1: 1890,
    data2: 4800,
  },
  {
    data1: 2390,
    data2: 3800,
  },
  {
    data1: 3490,
    data2: 4300,
  },
];

export default function Overview() {
  return (
    <div className="overview h-full w-full text-white">
      <div className="overview__title flex justify-between mb-4">
        <h3>Overview</h3>
        <div className="flex gap-4">
          <button className="rounded-full px-4 py-1">Colocar Aqui lo que quieran</button>
          <button className="rounded-full px-4 py-1 bg-pink-500 text-white">
            Year
          </button>
        </div>
      </div>
    
      <div className="overview__graph h-1/3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 10 }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ee3b3b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ee3b3b11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data1"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data2"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="overview__insights my-4 flex gap-16">
        <div className="insight">
          <h4>Invoices</h4>
          <div className="flex items-center gap-2">
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="insight">
          <h4>Transactions</h4>
          <div className="flex items-center gap-2">
            <h3>737</h3>
            <h4>Completed</h4>
          </div>
        </div>
      </div>
      <div className="overview__expand mt-8 flex justify-center">
        <button className="rounded-full px-16 py-2 bg-pink-500 text-white font-bold border-3 border-pink-500 transition duration-500 ease-in-out hover:bg-white hover:text-pink-500">
          Expand Chart
        </button>
      </div>
    </div>
  );
}
