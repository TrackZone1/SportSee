import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flame, Beef, Apple, Droplet } from 'lucide-react';
import { getUserInfo, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/api';
import KeyInfoCard from '../../components/KeyInfoCard/KeyInfoCard';
import ActivityBarChart from '../../components/Charts/ActivityBarChart/ActivityBarChart';
import SessionsLineChart from '../../components/Charts/SessionsLineChart/SessionsLineChart';
import PerformanceRadarChart from '../../components/Charts/PerformanceRadarChart/PerformanceRadarChart';
import ScoreRadialChart from '../../components/Charts/ScoreRadialChart/ScoreRadialChart';
import './Dashboard.css';

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [uInfo, uActivity, uSessions, uPerf] = await Promise.all([
          getUserInfo(id),
          getUserActivity(id),
          getUserAverageSessions(id),
          getUserPerformance(id)
        ]);
        setData(uInfo);
        setActivity(uActivity);
        setSessions(uSessions);
        setPerformance(uPerf);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error || !data) return <div className="error">Erreur lors de la récupération des données utilisateur.</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      
      <div className="dashboard-content">
        <section className="dashboard-charts">
          <article className="main-chart">
            <ActivityBarChart data={activity} />
          </article>
          <div className="secondary-charts">
            <article className="secondary-chart-box">
               <SessionsLineChart data={sessions} />
            </article>
            <article className="secondary-chart-box">
              <PerformanceRadarChart data={performance} />
            </article>
            <article className="secondary-chart-box">
              <ScoreRadialChart score={data.score} />
            </article>
          </div>
        </section>

        <aside className="dashboard-aside">
          <KeyInfoCard 
            title="Calories" 
            value={data.keyData.calorieCount} 
            unit="kCal" 
            color="#FF0000" 
            icon={<Flame size={24} />} 
          />
          <KeyInfoCard 
            title="Protéines" 
            value={data.keyData.proteinCount} 
            unit="g" 
            color="#4AB8FF" 
            icon={<Beef size={24} />} 
          />
          <KeyInfoCard 
            title="Glucides" 
            value={data.keyData.carbohydrateCount} 
            unit="g" 
            color="#FDCC0C" 
            icon={<Apple size={24} />} 
          />
          <KeyInfoCard 
            title="Lipides" 
            value={data.keyData.lipidCount} 
            unit="g" 
            color="#FD5181" 
            icon={<Droplet size={24} />} 
          />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
