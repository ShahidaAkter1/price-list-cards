import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    BarChart,
    Bar,
    Cell,
    ReferenceLine,
   
  } from 'recharts';

const Dashboard = () => {

    const students = [
        {
          id: 1,
          name: 'John',
          math: 80,
          physics: 70,
          chemistry: 90
        },
        {
          id: 2,
          name: 'Mary',
          math: 90,
          physics: 85,
          chemistry: 80
        },
        {
          id: 3,
          name: 'Bob',
          math: 70,
          physics: 75,
          chemistry: 60
        },
        {
          id: 4,
          name: 'Sarah',
          math: -85,
          physics: -80,
          chemistry: 90
        },
        {
          id: 5,
          name: 'Alex',
          math: 60,
          physics: 65,
          chemistry: 70
        },
        {
          id: 6,
          name: 'Emma',
          math: 95,
          physics: 90,
          chemistry: 85
        },
        {
          id: 7,
          name: 'Luke',
          math: -75,
          physics: 80,
          chemistry: 70
        },
        {
          id: 8,
          name: 'Sophie',
          math: 90,
          physics: 85,
          chemistry: 80
        },
        {
          id: 9,
          name: 'Jack',
          math: 65,
          physics: 60,
          chemistry: 55
        },
        {
          id: 10,
          name: 'Emily',
          math: 80,
          physics: -85,
          chemistry: 90
        },
        {
          id: 11,
          name: 'Oliver',
          math: 70,
          physics: 75,
          chemistry: 80
        },
        {
          id: 12,
          name: 'Lily',
          math: -85,
          physics: 80,
          chemistry: 75
        }
      ];
      

    return (
        <div>
            
           <div className='simpleChart'>
           <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
                <Line dataKey="physics" stroke="#82ca9d"></Line>
                <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </LineChart>
           </div>
           <div className="barChart">
                <BarChart
                width={1000}
                height={300}
                data={students}
                >
                    <Bar dataKey="physics" fill="#82ca9d"></Bar>
                    <Bar dataKey="math" fill="#8884d8"></Bar>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
           </div>
        </div>
    );
};

export default Dashboard;