import React, { useState, useEffect } from 'react';
import './DashboardPage.css'

const DashboardPage = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [userName, setUserName] = useState('');
  const [trustScore, setTrustScore] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }


    fetchUserData()
      .then(userData => {
        setUserName(userData.name);
        const calculatedTrustScore = calculateTrustScore(userData.paymentBehavior);
        setTrustScore(calculatedTrustScore);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = {
          name: 'Allan Oganga',
          paymentBehavior: 'onTime' 
        };
        resolve(userData);
      }, 1000); 
    });
  };


  const calculateTrustScore = (paymentBehavior) => {
    if (paymentBehavior === 'onTime') {
      return 90; 
    } else {
      return 70; 
    }
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="dashboard-section">
        <div className="greeting-message">
          <p>Good {timeOfDay}, {userName}!</p>
          <p>Trust Score: {trustScore}%</p>
        </div>
        <div className="dashboard-card">
          <h3>Savings</h3>
          <p>Your savings balance: $1000</p>
        </div>
        <div className="dashboard-card">
          <h3>Loans</h3>
          <p>Available loan limit: $5000</p>
        </div>
        <div className="dashboard-card">
          <h3>Flexisave</h3>
          <p>Available limit: KES 50,000</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
