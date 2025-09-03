import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { loginUser, registerUser } from '../api/authAPI';
import { getUserIdFromToken } from '../utils/authUtils';
import home0 from '../assets/Home0.png';
import { Mail, Lock, User, Leaf, Loader2, AlertCircle } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const { setIsLoggedIn, setUserInitial } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Clear general error when user makes changes
    if (generalError) {
      setGeneralError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError('');
    
    try {
      if (isLogin) {
        const data = await loginUser({ email: formData.email, password: formData.password });
        localStorage.setItem('token', data.token);
        const userId = getUserIdFromToken();
        localStorage.setItem('userId', userId);
        
        setIsLoggedIn(true);
        setUserInitial(data.user.name.charAt(0).toUpperCase());

        alert('✅ Logged in successfully');
        navigate('/');
      } else {
        await registerUser(formData);
        alert('✅ Registered successfully, please log in');
        setIsLogin(true);
        setFormData({ name: '', email: '', password: '' });
      }
    } catch (err) {
      console.error('Auth error:', err);
      
      if (err.response?.status === 400 && err.response?.data) {
        const errorData = err.response.data;
        
        // Handle validation errors
        if (errorData.message === 'Validation failed' && errorData.errors) {
          const fieldErrors = {};
          errorData.errors.forEach(error => {
            // Extract field name from error message or use a mapping
            if (error.msg.includes('email')) {
              fieldErrors.email = error.msg;
            } else if (error.msg.includes('Password')) {
              fieldErrors.password = error.msg;
            } else if (error.msg.includes('Name')) {
              fieldErrors.name = error.msg;
            } else {
              // If we can't determine the field, show as general error
              setGeneralError(error.msg);
            }
          });
          setErrors(fieldErrors);
        } else {
          // Handle other 400 errors
          setGeneralError(errorData.message || 'Validation failed');
        }
      } else if (err.response?.data?.message) {
        // Handle other API errors
        setGeneralError(err.response.data.message);
      } else {
        // Handle network or other errors
        setGeneralError(err.message || 'An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    alert('🌐 Google Login clicked — integrate your OAuth logic here!');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setGeneralError('');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-[#F0FDF4] to-green-200 px-4">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full transition-all duration-300">
        {/* Left Hero Image - Updated to use home0 */}
        <div className="hidden md:block md:w-1/2 relative">
          <img 
            src={home0} 
            alt="Garden Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <Leaf className="mx-auto text-green-700" size={32} />
            <h2 className="text-2xl font-bold text-green-800 mt-2">
              {isLogin ? 'Welcome Back 🌿' : 'Create an Account 🌱'}
            </h2>
            <p className="text-sm text-gray-500">
              {isLogin ? 'Login to explore our garden goodies!' : 'Join our green community!'}
            </p>
          </div>

          {/* General Error Message */}
          {generalError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
              <AlertCircle size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{generalError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3 text-green-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                    errors.name 
                      ? 'border-red-300 focus:ring-red-400 bg-red-50' 
                      : 'border-gray-300 focus:ring-green-400'
                  }`}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-green-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                  errors.email 
                    ? 'border-red-300 focus:ring-red-400 bg-red-50' 
                    : 'border-gray-300 focus:ring-green-400'
                }`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-green-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                  errors.password 
                    ? 'border-red-300 focus:ring-red-400 bg-red-50' 
                    : 'border-gray-300 focus:ring-green-400'
                }`}
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  {isLogin ? 'Logging in...' : 'Registering...'}
                </>
              ) : (
                isLogin ? 'Login' : 'Register'
              )}
            </button>
          </form>

          <div className="mt-5">
  <p className="text-center text-sm text-gray-500 mb-3">Or continue with</p>
  <button
    onClick={handleGoogleLogin}
    className="w-full flex items-center justify-center border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition disabled:opacity-50"
    disabled={loading}
  >
    {/* Google SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-2"
      viewBox="0 0 488 512"
    >
      <path
        fill="#4285F4"
        d="M488 261.8c0-17.4-1.6-34-4.7-50.1H249v94.8h134.6c-5.8 31-23 57.2-49 74.6l79.2 61.5c46.4-42.7 74.2-105.6 74.2-180.8z"
      />
      <path
        fill="#34A853"
        d="M249 492c66.7 0 122.6-22 163.5-59.5l-79.2-61.5c-22 15-50 23.9-84.3 23.9-64.8 0-119.6-43.7-139.2-102.5l-81.9 63.3C68.9 435.4 151.9 492 249 492z"
      />
      <path
        fill="#FBBC05"
        d="M109.8 292.4c-4.6-13.9-7.2-28.6-7.2-43.7s2.6-29.8 7.2-43.7l-81.9-63.3C9.6 166.1 0 206.9 0 248.7c0 41.8 9.6 82.6 27.9 116.9l81.9-63.2z"
      />
      <path
        fill="#EA4335"
        d="M249 97.9c36.3 0 68.8 12.5 94.5 37l70.7-70.7C371.6 24.4 315.7 0 249 0 151.9 0 68.9 56.6 27.9 131.8l81.9 63.3C129.4 141.6 184.2 97.9 249 97.9z"
      />
    </svg>
    Continue with Google
  </button>
</div>

          <p className="text-sm text-center mt-6 text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={toggleAuthMode}
              className="text-green-700 hover:underline font-medium transition disabled:opacity-50"
              disabled={loading}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;