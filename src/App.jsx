import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Admin/Login';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/gatekeeper-v1-9f2" element={<Login />} />
            <Route path="/control-center-8b3" element={<AdminDashboard />} />
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Expertise />
                  <WhyUs />
                  <Projects />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
