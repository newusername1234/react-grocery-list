import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';

function App() {
  return (
    <div>
      <h1>
        My Grocery List:
      </h1>
      <List item="Milk"/>
      <List item="Bread"/>
      <List item="Beer"/>
    </div>
  );
}

export default App;
