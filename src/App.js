import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashboardPage from './components/DashboardPage';
import SavingsPage from './components/SavingsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/savings" element={<SavingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
