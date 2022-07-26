import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import PrimaryNavbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <main>
        <div className='App-header'>
          <PrimaryNavbar /> 
        </div>
        <div>
              <Routes>
                <Route path="/" element={<Home />}/>

              </Routes>  
        </div>
      </main>
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;
