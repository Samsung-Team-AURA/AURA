import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import useAuraSocket from './hooks/useAuraSocket';
import './assets/css/App.css';

function App() {
  const { isConnected, auraData, sendVote } = useAuraSocket('ws://localhost:8000/ws/studio');

  return (
    <div className="app-container">
      <Header isConnected={isConnected} />
      <main className="content-wrapper">
        <Dashboard auraData={auraData} sendVote={sendVote} />
      </main>
    </div>
  );
}

export default App;