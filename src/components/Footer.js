import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '30px', background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#666', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          &copy; {new Date().getFullYear()} Sachin Gaikwad. Made with{' '}
          <FaHeart style={{ color: '#ff4757', animation: 'heartbeat 1.5s ease-in-out infinite' }} /> in India
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
          <Link to="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link>
          <Link to="/about" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>About</Link>
          <Link to="/projects" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</Link>
          <Link to="/contact" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
          <a href="https://github.com/SachinGaikwad2204" target="_blank" rel="noreferrer" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
