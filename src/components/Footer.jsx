import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const navigate = useNavigate();

  const toggleDropdown = (section) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavigation = (path) => {
    navigate(path);
    console.log(`Navigating to: ${path}`);
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="hover:text-green-400 transition">Contact Us</a></li>
                <li><a href="/blog" className="hover:text-green-400 transition">Plant Care Tips</a></li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Our Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/type/plants" className="hover:text-green-400 transition">Plants</a></li>
                <li><a href="/type/tools" className="hover:text-green-400 transition">Garden Tools</a></li>
                <li><a href="/type/seeds" className="hover:text-green-400 transition">Seeds</a></li>
                <li><a href="/type/fertilizers" className="hover:text-green-400 transition">Fertilizers</a></li>
                <li><a href="/type/pots" className="hover:text-green-400 transition">Pots & Planters</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Customer Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    WhatsApp Support
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-green-400 transition">
                    Call Support
                  </a>
                </li>
                <li><a href="/contact" className="hover:text-green-400 transition">Get Help</a></li>
              </ul>
            </div>

            {/* Contact Info & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Address:</strong><br />
                <a
                  href="https://www.google.com/maps?q=Manjari+Farm,+Opp+Shewalewadi+Jakat+Naka,+Pune-Solapur+Road,+Manjari,+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Manjari Farm, Opp. Shewalewadi Jakat Naka,<br />
                  Pune-Solapur Road, Manjari, Pune, Maharashtra.
                </a>
              </p>
              <p className="text-sm mb-1">
                <strong>Phone:</strong>{' '}
                <a href="tel:+919876543210" className="hover:text-green-400 transition">
                  +91 9876543210
                </a>
              </p>
              <p className="text-sm mb-4">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:pritam@moregardensindia.com"
                  className="text-green-400 hover:underline"
                >
                  pritam@moregardensindia.com
                </a>
              </p>

              <h3 className="text-lg font-semibold mb-3 text-white">Connect With Us</h3>
              <div className="flex space-x-4 text-xl">
                <a 
                  href="https://www.facebook.com/PritamMore5555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Follow us on Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://www.instagram.com/moregardenspune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Follow us on Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.youtube.com/@MoreGardensPune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Subscribe to our YouTube channel"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Dropdown Style */}
          <div className="md:hidden space-y-4">
            
            {/* About Us Dropdown */}
            <div className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-white">About Us</h3>
                {openDropdowns.about ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openDropdowns.about && (
                <ul className="mt-3 space-y-2 text-sm pl-4">
                  <li><a href="/contact" className="hover:text-green-400 transition">Contact Us</a></li>
                  <li><a href="/blog" className="hover:text-green-400 transition">Plant Care Tips</a></li>
                </ul>
              )}
            </div>

            {/* Our Products Dropdown */}
            <div className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-white">Our Products</h3>
                {openDropdowns.products ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openDropdowns.products && (
                <ul className="mt-3 space-y-2 text-sm pl-4">
                  <li><a href="/type/plants" className="hover:text-green-400 transition">Plants</a></li>
                  <li><a href="/type/tools" className="hover:text-green-400 transition">Garden Tools</a></li>
                  <li><a href="/type/seeds" className="hover:text-green-400 transition">Seeds</a></li>
                  <li><a href="/type/fertilizers" className="hover:text-green-400 transition">Fertilizers</a></li>
                  <li><a href="/type/pots" className="hover:text-green-400 transition">Pots & Planters</a></li>
                </ul>
              )}
            </div>

            {/* Customer Support Dropdown */}
            <div className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleDropdown('support')}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold text-white">Customer Support</h3>
                {openDropdowns.support ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openDropdowns.support && (
                <ul className="mt-3 space-y-2 text-sm pl-4">
                  <li>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition"
                    >
                      WhatsApp Support
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919876543210" className="hover:text-green-400 transition">
                      Call Support
                    </a>
                  </li>
                  <li><a href="/contact" className="hover:text-green-400 transition">Get Help</a></li>
                </ul>
              )}
            </div>

            {/* Contact Information - Always Visible on Mobile */}
            <div className="pt-2">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Address:</strong><br />
                <a
                  href="https://www.google.com/maps?q=Manjari+Farm,+Opp+Shewalewadi+Jakat+Naka,+Pune-Solapur+Road,+Manjari,+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Manjari Farm, Opp. Shewalewadi Jakat Naka,<br />
                  Pune-Solapur Road, Manjari, Pune, Maharashtra.
                </a>
              </p>
              <p className="text-sm mb-1">
                <strong>Phone:</strong>{' '}
                <a href="tel:+919876543210" className="hover:text-green-400 transition">
                  +91 9876543210
                </a>
              </p>
              <p className="text-sm mb-4">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:pritam@moregardensindia.com"
                  className="text-green-400 hover:underline"
                >
                  pritam@moregardensindia.com
                </a>
              </p>

              <h3 className="text-lg font-semibold mb-3 text-white">Connect With Us</h3>
              <div className="flex space-x-6 text-2xl justify-center">
                <a 
                  href="https://www.facebook.com/PritamMore5555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Follow us on Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://www.instagram.com/moregardenspune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Follow us on Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.youtube.com/@MoreGardensPune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Subscribe to our YouTube channel"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© 2025 MyGarden. All rights reserved.</p>
          {/* Payment Methods */}
          <div className="flex items-center space-x-4">
            {/* Visa */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 750 471"
              className="h-8 w-auto filter transition duration-300"
            >
              <rect width="750" height="471" fill="white" rx="8" />
              <path fill="#1A1F71" d="M278 318l34-165h55l-34 165h-55zM507 157c-11-4-27-7-47-7-51 0-86 27-87 65 0 28 26 44 46 53 21 10 28 16 27 25 0 13-16 19-31 19-20 0-31-3-48-10l-7-3-7 47c12 6 34 11 57 11 54 0 89-27 89-68 0-23-13-40-44-55-18-9-30-15-30-24s10-17 31-17c18 0 30 4 40 8l5 2 8-46zM636 153h-43c-13 0-23 4-28 17l-83 191h59s10-26 13-32h72c2 8 7 32 7 32h52l-49-208zm-74 128c5-13 24-61 24-61-1 1 5-13 8-22l4 19s11 46 13 55h-49zM225 153l-54 113-6-34c-11-39-46-81-85-102l49 177h58l86-154h-48z"/>
            </svg>

            {/* Mastercard */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 504 315"
              className="h-8 w-auto filter transition duration-300"
            >
              <rect width="504" height="315" fill="white" rx="8" />
              <circle cx="200" cy="157" r="90" fill="#EB001B" />
              <circle cx="304" cy="157" r="90" fill="#F79E1B" />
              <path fill="#FF5F00" d="M229 87h46v140h-46z" />
            </svg>

            {/* American Express */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 750 471"
              className="h-8 w-auto filter transition duration-300"
            >
              <rect width="750" height="471" fill="#2E77BC" rx="8" />
              <path
                fill="white"
                d="M150 320h60l15-35h80l15 35h63l-80-170h-71l-82 170zm97-63l27-62 27 62h-54zM440 150h-56v170h56c45 0 75-30 75-85 0-55-30-85-75-85zm0 130h-21v-90h21c22 0 40 18 40 45 0 28-18 45-40 45z"
              />
            </svg>

            {/* Razorpay */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2500 2500"
              className="h-8 w-auto filter transition duration-300"
            >
              <rect width="2500" height="2500" fill="white" rx="8" />
              <path
                fill="#0C59A4"
                d="M1132 1952h-362l662-1392h362l-662 1392zM1750 560h362l-935 1880h-362l935-1880z"
              />
            </svg>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          <button
            onClick={() => handleNavigation('/')}
            className="flex flex-col items-center space-y-1 p-2 text-green-700 hover:text-green-900"
          >
            <div className="w-6 h-6 flex items-center justify-center">🏠</div>
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button
            onClick={() => handleNavigation('/type/plants')}
            className="flex flex-col items-center space-y-1 p-2 text-green-700 hover:text-green-900"
          >
            <div className="w-6 h-6 flex items-center justify-center">🌿</div>
            <span className="text-xs font-medium">Plants</span>
          </button>
          
          <button
            onClick={() => handleNavigation('/cart')}
            className="flex flex-col items-center space-y-1 p-2 text-green-700 hover:text-green-900"
          >
            <div className="w-6 h-6 flex items-center justify-center">🛒</div>
            <span className="text-xs font-medium">Cart</span>
          </button>
          
          <button
            onClick={() => handleNavigation('/profile')}
            className="flex flex-col items-center space-y-1 p-2 text-green-700 hover:text-green-900"
          >
            <div className="w-6 h-6 flex items-center justify-center">👤</div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
