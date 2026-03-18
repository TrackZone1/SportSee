import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './ScoreRadialChart.css';

const ScoreRadialChart = ({ score }) => {
  const data = [{ name: 'score', value: score * 100 }];
  
  return (
    <div className="score-chart">
      <h2>Score</h2>
      <div className="score-label">
        <span className="score-value">{score * 100}%</span>
        <br/>de votre<br/>objectif
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="50%" cy="50%" 
          innerRadius="70%" outerRadius="80%" 
          barSize={10} 
          data={data} 
          startAngle={90} 
          endAngle={90 + (score * 360)}
        >
          <circle cx="50%" cy="50%" fill="white" r="70%"></circle>
          <RadialBar minAngle={15} background={{fill: '#FBFBFB'}} clockWise dataKey="value" cornerRadius={10} fill="#FF0000" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreRadialChart.propTypes = {
  score: PropTypes.number.isRequired
};

export default ScoreRadialChart;
