import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shree Valli Matric</h3>
            <p className="mb-4 text-gray-300">Providing quality education and nurturing young minds.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                <span className="text-gray-300">Ichipalayam, Kodumudi Erode, Tamil Nadu PIN Code: 638151 (INDIA)</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span className="text-gray-300">+91 94897-18060</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span className="text-gray-300">info@riversideacademy.edu</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="text-gray-300">Saturday</p>
                  <p className="text-gray-400">9:00 AM - 12:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Shree Valli Matric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;