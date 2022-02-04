import * as React from 'react';
import AppContent from '../components/AppContent';
import Header from '../components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import RegistrationComponent from '../components/registration/Registration.component'

class App extends React.Component {
  public render() {
    return (
      <Router>
      <div className="body">
        
        <Routes>
          <Route path="/" element={<AppContent/>} />
          <Route path="/registration" element={<RegistrationComponent/>} />
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
