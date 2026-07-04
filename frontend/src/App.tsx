import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SACCO Management System</h1>
        <p>Welcome to the Savings and Credit Cooperative Organization Management System</p>
        <div className="features">
          <div className="feature-card">
            <h3>Member Management</h3>
            <p>Manage member profiles and KYC verification</p>
          </div>
          <div className="feature-card">
            <h3>Savings Tracking</h3>
            <p>Monitor member savings and withdrawals</p>
          </div>
          <div className="feature-card">
            <h3>Loan Processing</h3>
            <p>Handle loan applications and disbursements</p>
          </div>
          <div className="feature-card">
            <h3>Financial Reports</h3>
            <p>Generate comprehensive financial reports</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
