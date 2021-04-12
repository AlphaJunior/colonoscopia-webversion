import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './Firebase/firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world from react with firebase
         </p>
      </header>
    </div>
  );
}

export default App;
