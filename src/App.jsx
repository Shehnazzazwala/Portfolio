import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop'; // <-- Import the utility

// Import Page Components
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- Add this to handle scroll position */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;