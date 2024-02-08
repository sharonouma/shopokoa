import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RegisterBusinessPage from './components/RegisterBusinessPage';
import DashboardPage from './components/DashboardPage';
import SavingsPage from './components/SavingsPage';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterBusinessPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/savings" component={SavingsPage} />
        <Route component={NotFound} /> 
      </div>
    </Router>
  );
}

export default App;
