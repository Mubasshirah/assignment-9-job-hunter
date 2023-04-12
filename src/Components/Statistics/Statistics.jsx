import React from 'react';
import './Statistics.css'
import { PieChart,Pie, Tooltip } from "recharts";
const Statistics = () => {
    const assignments = [
        { name: "Assignment 1", mark: 60 },
        { name: "Assignment 2", mark: 60 },
        { name: "Assignment 3", mark: 60 },
        { name: "Assignment 4", mark: 48 },
        { name: "Assignment 5", mark: 60 },
        { name: "Assignment 6", mark: 30 },
        { name: "Assignment 7", mark: 60 }
      ];
      
    return (
        <div>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="mark"
         
            data={assignments}
           
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Statistics;