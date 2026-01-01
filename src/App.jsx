import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NeoVillaPage from './pages/NeoVillaPage';
import ViswaVillaPage from './pages/ViswaVillaPage';
import RetroVillaPage from './pages/RetroVillaPage';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/neo-villa" element={<NeoVillaPage />} />
          <Route path="/viswa-villa" element={<ViswaVillaPage />} />
          <Route path="/retro-villa" element={<RetroVillaPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;