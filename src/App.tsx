import React from 'react';
import reactLogo from './logo.svg';
import electronLogo from './electron.png';
import tsLogo from './typescript.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo-container'>
          <img src={electronLogo} className='App-logo-2' alt='electron-logo' />
          <img src={reactLogo} className='App-logo' alt='react-logo' />
          <img src={tsLogo} className='App-logo-2' alt='ts-logo' />
        </div>
        <p>Electron, React, and Typescript boilerplate.</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
