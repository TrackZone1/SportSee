import React from 'react';
import { Activity, Waves, Bike, Dumbbell } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-icon">
           <Activity color="#FF0101" size={32} />
        </div>
        <div className="sidebar-icon">
           <Waves color="#FF0101" size={32} />
        </div>
        <div className="sidebar-icon">
           <Bike color="#FF0101" size={32} />
        </div>
        <div className="sidebar-icon">
           <Dumbbell color="#FF0101" size={32} />
        </div>
      </nav>
      <div className="sidebar-copyright">
        Copyright, SportSee 2026
      </div>
    </div>
  );
};

export default Sidebar;
