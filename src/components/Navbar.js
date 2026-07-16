import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', transition: 'all 0.3s ease', boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, #64f4ab, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '2px' }} onClick={closeMenu}>
            SG
          </Link>
        </div>
        
        <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', padding: '5px 0', borderBottom: location.pathname === '/' ? '2px solid #64f4ab' : 'none' }} onClick={closeMenu}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', padding: '5px 0', borderBottom: location.pathname === '/about' ? '2px solid #64f4ab' : 'none' }} onClick={closeMenu}>About</Link>
          <Link to="/skills" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', padding: '5px 0', borderBottom: location.pathname === '/skills' ? '2px solid #64f4ab' : 'none' }} onClick={closeMenu}>Skills</Link>
          <Link to="/projects" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', padding: '5px 0', borderBottom: location.pathname === '/projects' ? '2px solid #64f4ab' : 'none' }} onClick={closeMenu}>Projects</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', padding: '5px 0', borderBottom: location.pathname === '/contact' ? '2px solid #64f4ab' : 'none' }} onClick={closeMenu}>Contact</Link>
        </div>
        
        <button onClick={toggleMenu} style={{ display: 'none', color: '#fff', fontSize: '1.8rem', cursor: 'pointer', background: 'none', border: 'none' }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
