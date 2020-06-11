import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
  return (
    <div>
      <h3>Students detail</h3>
      <ol>
        <li>
        <Student name="Hammad" course="Artificial Intelligence"/>
        </li>
        <li>
        <Student name="Bilal" course="Block Chain"/>
        </li>
      </ol>
    </div>
  );
}

export default App;
