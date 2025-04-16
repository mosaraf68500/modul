import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const marks = [
    { student_id: 1, name: "Alice", physics: 85, chemistry: 90, math: 88 },
    { student_id: 2, name: "Bob", physics: 92, chemistry: 85, math: 91 },
    { student_id: 3, name: "Charlie", physics: 78, chemistry: 82, math: 80 },
    { student_id: 4, name: "David", physics: 88, chemistry: 86, math: 92 },
    { student_id: 5, name: "Eva", physics: 95, chemistry: 91, math: 93 },
    { student_id: 6, name: "Frank", physics: 80, chemistry: 78, math: 85 },
    { student_id: 7, name: "Grace", physics: 91, chemistry: 94, math: 90 },
    { student_id: 8, name: "Hank", physics: 70, chemistry: 72, math: 75 },
    { student_id: 9, name: "Ivy", physics: 77, chemistry: 80, math: 78 },
    { student_id: 10, name: "Jack", physics: 89, chemistry: 87, math: 90 }
  ];
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const ResultChart = () => {
    return (
        
       <div>
        <h1>Result chart</h1>
        <LineChart width={800} height={500} data={marks}>
        <XAxis dataKey={"name"}></XAxis>
        
        <Line type="monotone" dataKey={"physics"}></Line>
        <Line type="monotone" dataKey={"math"} stroke='red'></Line>
        <Line type="monotone" dataKey={"chemistry"} stroke='green'></Line>
        </LineChart>

        <div>
        <BarChart width={1000} height={400} data={data} barSize={29}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
        </div>
       </div>
    );
};

export default ResultChart;