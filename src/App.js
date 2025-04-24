import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router basename="/DevJihwan/test-repo">
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the test-repo React App!</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>React Application - DevJihwan</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;