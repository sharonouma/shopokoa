import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { BsFillLightningFill, BsCreditCard, BsWallet, BsClockHistory } from 'react-icons/bs';

const DashboardPage = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [userName, setUserName] = useState('');
  const [trustScore, setTrustScore] = useState(0);
  const [savings, setSavings] = useState(0);
  const [loanLimit, setLoanLimit] = useState(0);
  const [flexisaveLimit, setFlexisaveLimit] = useState(0);

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
        setSavings(userData.savings);
        setLoanLimit(userData.loanLimit);
        setFlexisaveLimit(userData.flexisaveLimit);
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
          paymentBehavior: 'onTime',
          savings: 100000, 
          loanLimit: 500000, 
          flexisaveLimit: 50000 
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
          <BsFillLightningFill className="dashboard-icon" />
        </div>
        <div className="dashboard-sections">
          <div className="dashboard-section">
            <h3>Savings</h3>
            <div className="dashboard-card">
              <BsWallet className="dashboard-icon" />
              <p>Your savings balance: KES {savings}</p>
            </div>
          </div>
          <div className="dashboard-section">
            <h3>Loans</h3>
            <div className="dashboard-card">
              <BsCreditCard className="dashboard-icon" />
              <p>Available loan limit: KES {loanLimit}</p>
            </div>
          </div>
          <div className="dashboard-section">
            <h3>Flexisave</h3>
            <div className="dashboard-card">
              <BsClockHistory className="dashboard-icon" />
              <p>Available limit: KES {flexisaveLimit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
