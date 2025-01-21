import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import MainPage from './MainPage';
// Import any other components or styles you might have

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the root path "/" to render the Login component */}
        <Route path="/" element={<Login />} />
        {/* Define the "/login" path to also render the Login component */}
        <Route path="/login" element={<Login />} />
        {/* Define the "/signup" path to render the Signup component */}
        <Route path="/signup" element={<Signup />} />
        {/* Define the "/main" path to render the MainPage component */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;