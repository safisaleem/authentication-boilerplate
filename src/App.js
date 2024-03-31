import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Application from './Application';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Application />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
