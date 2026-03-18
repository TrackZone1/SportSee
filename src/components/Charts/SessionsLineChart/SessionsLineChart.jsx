import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './SessionsLineChart.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="sessions-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

const SessionsLineChart = ({ data }) => {
  return (
    <div className="sessions-chart">
      <h2>Durée moyenne des<br/>sessions</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data.sessions} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            axisLine={false} 
            tick={{fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12}} 
            dy={10} 
          />
          <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 20']} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line 
            type="natural" 
            dataKey="sessionLength" 
            stroke="white" 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 4, strokeWidth: 2, stroke: 'white', fill: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionsLineChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default SessionsLineChart;
