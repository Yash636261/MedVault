import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    admitted: 40,
    discharged: 24,
    amt: 24,
  },
  {
    name: "1",
    admitted: 30,
    discharged: 13,
    amt: 22,
  },
  {
    name: "2",
    admitted: 20,
    discharged: 98,
    amt: 22,
  },
  {
    name: "3",
    admitted: 27,
    discharged: 39,
    amt: 20,
  },
  {
    name: "4",
    admitted: 18,
    discharged: 48,
    amt: 21,
  },
  {
    name: "5",
    admitted: 23,
    discharged: 38,
    amt: 25,
  },
  {
    name: "6",
    admitted: 34,
    discharged: 43,
    amt: 21,
  },
];

function PatientChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="admitted" stroke="#8884d8" fill="#8884d8" />
        <Area
          type="monotone"
          dataKey="discharged"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default PatientChart;
