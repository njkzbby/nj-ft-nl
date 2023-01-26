import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar/Navibar';
import { Home } from './components/HomePage/Home';
import { Users } from './components/UsersPage/Users';
import { About } from './components/AboutPage/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EmailConfirm } from './components/EmailConfirmPage/EmailConfirm';



function App() {
  return (
    <div className="App">

      <Router>
        <NaviBar></NaviBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/EmailConfirm/" element={<EmailConfirm />} />
          <Route
            path="/p"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
