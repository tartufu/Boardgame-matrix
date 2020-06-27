import React from 'react';
// import Testing from './components/testing';
import Header from './components/Header';
import GamesList from './components/GamesList';

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <Header />
        <GamesList />
      </div>
    </div>
  );
}

export default App;
