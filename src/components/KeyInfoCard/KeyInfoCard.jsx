import React from 'react';
import PropTypes from 'prop-types';
import './KeyInfoCard.css';

const KeyInfoCard = ({ title, value, unit, icon, color }) => {
  return (
    <div className="key-info-card">
      <div className="card-icon" style={{ backgroundColor: `${color}1A`, color: color }}>
        {icon}
      </div>
      <div className="card-text">
        <h3>{value}{unit}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

KeyInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};

export default KeyInfoCard;
