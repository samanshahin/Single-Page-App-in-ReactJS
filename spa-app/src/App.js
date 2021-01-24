import logo from './logo.svg';
import './App.css';
import React from 'react'

import { Navbar } from './components/Navbar';
import { Main } from './components/Main'
import { Footer } from './components/footer';

import { store } from './data/store'

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
