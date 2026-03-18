import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './PerformanceRadarChart.css';

const PerformanceRadarChart = ({ data }) => {
  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{fontSize: 12}} />
          <Radar name="Performance" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceRadarChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default PerformanceRadarChart;
