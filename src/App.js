import React from 'react';
// import Testing from './components/testing';
import Header from './components/Header';
import GamesList from './components/GamesList';
import TestBox from './components/Testbox';

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <Header />
        <GamesList />
        {/* <TestBox /> */}
      </div>
    </div>
  );
}

export default App;
