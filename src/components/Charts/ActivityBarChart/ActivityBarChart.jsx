import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './ActivityBarChart.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const ActivityBarChart = ({ data }) => {
  return (
    <div className="activity-chart">
      <div className="activity-chart-header">
        <h2>Activité quotidienne</h2>
        <div className="activity-legend">
          <span><i className="dot black"></i> Poids (kg)</span>
          <span><i className="dot red"></i> Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data.sessions} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
          <XAxis dataKey="day" tickLine={false} tick={{fill: '#9B9EAC', fontSize: 14}} dy={15} stroke="#DEDEDE" />
          <YAxis yAxisId="kg" dataKey="kilogram" orientation="right" tickLine={false} axisLine={false} tick={{fill: '#9B9EAC', fontSize: 14}} dx={15} domain={['dataMin - 1', 'dataMax + 2']} />
          <YAxis yAxisId="cal" dataKey="calories" orientation="left" hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(196, 196, 196, 0.5)'}} />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} maxBarSize={8} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} maxBarSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityBarChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default ActivityBarChart;
