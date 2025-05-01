
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from './logo.jpg'; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', dropdown: [
      { name: 'School History', path: '/about#history' },
      { name: 'Principals', path: '/about#principals' },
      { name: 'Vision & Mission', path: '/about#vision' },
    ]},
    { name: 'Academics', path: '/academics' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-blue-600 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
              {/* Replace placeholder with logo image */}
              <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>Shree Valli Matric</h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Excellence in Education</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.path} 
                  className={`${location.pathname === item.path ? 'font-semibold' : 'font-medium'} ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-yellow-300'} transition-colors flex items-center`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? 
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} /> : 
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            }
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-lg overflow-hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.path}
                    className={`block py-3 px-4 hover:bg-gray-100 ${location.pathname === item.path ? 'font-semibold text-primary' : 'text-gray-800'}`}
                    onClick={() => !item.dropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="bg-gray-50 pl-8">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="block py-3 px-4 bg-primary text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;