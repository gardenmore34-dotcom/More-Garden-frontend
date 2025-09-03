import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductSearch from './ProductSearch';
import { UserCircle, Menu, X } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userInitial } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/auth');
    }
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleCategoryClick = (category) => {
    const formattedCategory = category.toLowerCase();
    navigate(`/type/${formattedCategory}`);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Sticky Header - Logo and Navigation */}
      <nav className="sticky top-0 z-40 flex justify-between items-center px-6 py-4 bg-[#FDFBF7] shadow-md">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-green-700 cursor-pointer"
          onClick={() => navigate('/')}
        >
          🌿 MoreGarden
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {['Plants', 'Seeds', 'Tools', 'Fertilizers', 'Pots'].map((category) => (
            <li
              key={category}
              className="hover:text-green-700 cursor-pointer transition"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
          <li className="hover:text-green-700 cursor-pointer" onClick={() => navigate('/blog')}>
            Blog
          </li>
          <li className="hover:text-green-700 cursor-pointer" onClick={() => navigate('/about')}>
            About Us
          </li>
          <li className="hover:text-green-700 cursor-pointer" onClick={() => navigate('/bulk')}>
            Bulk Products
          </li>
        </ul>

        {/* Desktop Right Side - Search, Profile, Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <ProductSearch />

          {/* Profile Icon */}
          <div
            onClick={handleProfileClick}
            className="cursor-pointer group relative"
            title={isLoggedIn ? 'Profile' : 'Login'}
          >
            {isLoggedIn ? (
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shadow-md transition hover:scale-105">
                {userInitial || <UserCircle className="w-6 h-6" />}
              </div>
            ) : (
              <UserCircle className="w-7 h-7 text-green-700 hover:text-green-900 transition" />
            )}
          </div>

          {/* Cart Icon */}
          <span
            className="cursor-pointer text-xl hover:scale-105 transition"
            onClick={() => navigate('/cart')}
            title="Cart"
          >
            🛒
          </span>
        </div>

        {/* Mobile Right Side - Profile, Cart, Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Profile Icon */}
          <div
            onClick={handleProfileClick}
            className="cursor-pointer p-1 rounded-full hover:bg-green-50 active:bg-green-100 transition-colors duration-200"
            title={isLoggedIn ? 'Profile' : 'Login'}
          >
            {isLoggedIn ? (
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shadow-md">
                {userInitial || <UserCircle className="w-5 h-5" />}
              </div>
            ) : (
              <UserCircle className="w-7 h-7 text-green-700" />
            )}
          </div>

          {/* Mobile Cart Icon */}
          <button
            className="cursor-pointer text-xl p-1 rounded-full hover:bg-green-50 active:bg-green-100 transition-colors duration-200"
            onClick={() => navigate('/cart')}
            title="Cart"
          >
            🛒
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-green-700 hover:bg-green-50 active:bg-green-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Non-sticky Search Bar - Mobile Only */}
      <div className="md:hidden px-6 py-3 bg-[#FDFBF7] shadow-md -mb-1">
        <ProductSearch />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
        
        {/* Slide-in Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-[#FDFBF7] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'translate-x-0' 
              : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-green-25">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🌿</span>
              <span className="text-lg font-bold text-green-700">MoreGarden</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full text-green-700 hover:bg-green-100 active:bg-green-200 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>



          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            {/* Categories */}
            <div className="p-6 space-y-1">
              <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4 px-3">Shop Categories</h3>
              {['Plants', 'Seeds', 'Tools', 'Fertilizers', 'Pots'].map((category, index) => (
                <button
                  key={category}
                  className="group w-full text-left px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 active:bg-green-100 transition-all duration-200 font-medium rounded-xl border border-transparent hover:border-green-100"
                  onClick={() => handleCategoryClick(category)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{category}</span>
                    <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Other Links */}
            <div className="px-6 pb-6 space-y-1">
              <h3 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4 px-3 pt-4 border-t border-green-100">More</h3>
              {[
                { label: 'Blog', path: '/blog' },
                { label: 'About Us', path: '/about' },
                { label: 'Bulk Products', path: '/bulk' }
              ].map((item, index) => (
                <button
                  key={item.label}
                  className="group w-full text-left px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 active:bg-green-100 transition-all duration-200 font-medium rounded-xl border border-transparent hover:border-green-100"
                  onClick={() => handleNavigation(item.path)}
                  style={{ animationDelay: `${(index + 5) * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="p-6 border-t border-green-100 bg-gradient-to-b from-transparent to-green-25">
              <div className="text-center text-sm text-gray-500">
                <p className="font-medium text-green-700 mb-1">Happy Gardening! 🌱</p>
                <p>Find everything for your garden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;