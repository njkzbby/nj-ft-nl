import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { About } from './components/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Router>
        <NaviBar></NaviBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
