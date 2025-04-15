import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaChartLine, FaBell, FaStar, FaClipboardList, FaUsers, FaChartBar } from 'react-icons/fa';
import { MapPin, CheckCircle, Users, Upload, Map, Bell, Star, ClipboardList, BarChart } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-green-100">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center">
          <div className="bg-green-700 rounded-full p-2 mr-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" />
              </svg>
            </motion.div>
          </div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-green-800"
          >
            Swachh Seva
          </motion.h1>
        </div>
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 hover:text-green-700 font-medium cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-6 md:px-12 md:flex items-center justify-between">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
          >
            Swachh Seva:<br />
            Garbage<br />
            Collection<br />
            Tracker
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-700 mb-8"
          >
            Promoting cleanliness and<br />
            effective waste management
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-green-700 text-white py-3 px-6 rounded-full font-medium hover:bg-green-800"
          >
            Report Garbage
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          {/* Placeholder for illustration as per image layout */}
          <div className="relative">
            <div className="h-64 md:h-96 rounded-2xl overflow-hidden bg-green-50">
              {/* City skyline */}
              <div className="absolute bottom-0 right-0 w-full h-3/5">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-0 right-0 w-3/4 h-full flex items-end"
                >
                  {/* Buildings */}
                  <div className="w-12 h-32 bg-green-200 mx-1 rounded-t-md"></div>
                  <div className="w-16 h-40 bg-green-200 mx-1 rounded-t-md"></div>
                  <div className="w-14 h-36 bg-green-200 mx-1 rounded-t-md"></div>
                  <div className="w-10 h-24 bg-green-200 mx-1 rounded-t-md"></div>
                  <div className="w-12 h-44 bg-green-200 mx-1 rounded-t-md"></div>
                </motion.div>
                
                {/* Wind turbine */}
                <div className="absolute bottom-0 right-12 w-10 h-48">
                  <div className="w-2 h-40 bg-green-300 mx-auto"></div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="w-24 h-24 absolute top-0 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="absolute top-1/2 left-1/2 w-24 h-2 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-2 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 rotate-60"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-2 bg-green-400 transform -translate-x-1/2 -translate-y-1/2 rotate-120"></div>
                  </motion.div>
                </div>
              </div>
              
              {/* Trees */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-32 h-32 relative"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full absolute bottom-6 left-4"></div>
                  <div className="w-2 h-12 bg-green-700 absolute bottom-0 left-11"></div>
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-32 h-32 relative"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full absolute bottom-6 left-6"></div>
                  <div className="w-2 h-10 bg-green-700 absolute bottom-0 left-12"></div>
                </motion.div>
              </div>
              
              {/* Clouds */}
              <motion.div
                animate={{ x: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                className="absolute top-4 right-12"
              >
                <div className="bg-white w-16 h-6 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ x: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                className="absolute top-12 left-8"
              >
                <div className="bg-white w-20 h-8 rounded-full"></div>
              </motion.div>
              
              {/* People cleaning */}
              <div className="absolute bottom-0 left-0 right-0 h-24">
                {/* People illustrations */}
                <div className="flex justify-around items-end h-full">
                  {/* Person sweeping */}
                  <motion.div
                    animate={{ rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="relative w-12 h-20"
                  >
                    <div className="w-6 h-12 bg-green-700 rounded-t-lg absolute bottom-0"></div>
                    <div className="w-4 h-6 bg-green-700 absolute bottom-8 left-6 rounded-r-full"></div>
                    <div className="w-1 h-10 bg-green-900 absolute bottom-0 left-8 transform rotate-30"></div>
                  </motion.div>
                  
                  {/* Person with bag */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="relative w-12 h-20"
                  >
                    <div className="w-6 h-12 bg-green-500 rounded-t-lg absolute bottom-0"></div>
                    <div className="w-5 h-8 bg-green-300 absolute bottom-8 right-0 rounded-r-full"></div>
                    <div className="w-4 h-6 bg-gray-400 absolute top-0 right-0 rounded"></div>
                  </motion.div>
                  
                  {/* Person with trash bin */}
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="relative w-16 h-20"
                  >
                    <div className="w-6 h-12 bg-green-600 rounded-t-lg absolute bottom-0"></div>
                    <div className="w-6 h-10 bg-gray-600 absolute bottom-4 right-0 rounded"></div>
                    <div className="w-6 h-1 bg-gray-400 absolute bottom-14 right-0"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-green-800 text-center mb-12"
        >
          Features
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
            >
              <MapPin size={30} className="text-green-700" />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2">Live Tracking</h4>
            <p className="text-gray-600">Track garbage collection vehicles in real-time.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
            >
              <MapPin size={30} className="text-green-700" />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2">Report Spots</h4>
            <p className="text-gray-600">Locate and report garbage spots in your area.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
            >
              <CheckCircle size={30} className="text-green-700" />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2">Cleanliness Status</h4>
            <p className="text-gray-600">Check the cleanliness status of your area.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
            >
              <Users size={30} className="text-green-700" />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2">Volunteer Join</h4>
            <p className="text-gray-600">Join as a volunteer for cleanliness drives.</p>
          </motion.div>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-16 px-6 md:px-12 bg-green-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">For Users</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* User Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-600 mb-4">
                <Upload size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Report Garbage Spot</h4>
              <p className="text-gray-600">Upload image, location (auto-detect via GPS or manually enter), description.</p>
            </motion.div>

            {/* User Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-600 mb-4">
                <Map size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Live Map View</h4>
              <p className="text-gray-600">See active complaints and cleaned areas on an interactive map.</p>
            </motion.div>

            {/* User Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-600 mb-4">
                <Bell size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Status Updates</h4>
              <p className="text-gray-600">"Reported" → "In Progress" → "Cleaned" with real-time notifications.</p>
            </motion.div>

            {/* User Feature 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-600 mb-4">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Feedback & Rating</h4>
              <p className="text-gray-600">After cleanup, users can rate the cleanliness and provide feedback.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* For Municipal Admins Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">For Municipal Admins</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Admin Feature 1 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-50 p-6 rounded-lg shadow-md border border-green-100"
            >
              <div className="text-green-700 mb-4">
                <ClipboardList size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Dashboard</h4>
              <p className="text-gray-600">View all reports, assign to workers, and manage cleanup operations efficiently.</p>
            </motion.div>

            {/* Admin Feature 2 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-50 p-6 rounded-lg shadow-md border border-green-100"
            >
              <div className="text-green-700 mb-4">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Assign Team</h4>
              <p className="text-gray-600">Allocate area to a sanitation worker/team and track their performance and workload.</p>
            </motion.div>

            {/* Admin Feature 3 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-50 p-6 rounded-lg shadow-md border border-green-100"
            >
              <div className="text-green-700 mb-4">
                <BarChart size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Stats Panel</h4>
              <p className="text-gray-600">Number of cleanups done weekly/monthly, pending issues, area performance metrics, etc.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 md:px-12 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-green-800 text-center mb-12"
          >
            How It Works
          </motion.h3>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-500 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:text-right md:pr-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">1. Report</h4>
                  <p>Residents report garbage spots using the app with photos and location.</p>
                </div>
                <div className="hidden md:block h-6 w-6 bg-green-700 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
              </motion.div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Step 2 */}
              <div className="hidden md:block"></div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:pl-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">2. Assign</h4>
                  <p>Municipal admins review reports and assign teams for cleanup.</p>
                </div>
                <div className="hidden md:block h-6 w-6 bg-green-700 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:text-right md:pr-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">3. Clean</h4>
                  <p>Sanitation teams clean the area and mark the task as completed with proof.</p>
                </div>
                <div className="hidden md:block h-6 w-6 bg-green-700 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
              </motion.div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Step 4 */}
              <div className="hidden md:block"></div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:pl-12"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">4. Feedback</h4>
                  <p>Users receive notification and can rate the cleanup quality.</p>
                </div>
                <div className="hidden md:block h-6 w-6 bg-green-700 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-6"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
        {/* Join Us Section */}
        <section className="py-16 px-6 md:px-12 bg-green-800 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-6"
            >
              Join the Swachh Seva Movement
            </motion.h3>
            <p className="mb-10 max-w-3xl mx-auto">
              Be part of the solution for a cleaner India. Together, we can make a difference in our communities by 
              ensuring proper waste management and cleanliness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-green-700 p-6 rounded-lg"
              >
                <div className="text-4xl font-bold mb-2">1200+</div>
                <div>Areas Covered</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-green-700 p-6 rounded-lg"
              >
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div>Reports Resolved</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-green-700 p-6 rounded-lg"
              >
                <div className="text-4xl font-bold mb-2">800+</div>
                <div>Volunteers</div>
              </motion.div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-800 py-3 px-8 rounded-full font-medium hover:bg-green-100"
            >
              Join Us Today
            </motion.button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 md:px-12 bg-green-50">
          <div className="max-w-5xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-green-800 text-center mb-12"
            >
              Contact Us
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
                <p className="text-gray-600 mb-6">
                  Have questions or suggestions? Want to partner with us? Reach out and we'll get back to you as soon as possible.
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">contact@swachhseva.org</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium">+91 1800-SWACHH</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-medium">123 Green Street, New Delhi, India</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                    <FaLinkedinIn />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-semibold mb-4">Send Us a Message</h4>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-32"></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-2">
                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Swachh Seva</h2>
                </div>
                <p className="text-green-100 mb-4">
                  A digital platform to promote cleanliness and efficient waste management across India.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-200 hover:text-white">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-green-200 hover:text-white">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-green-200 hover:text-white">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Download App</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-green-200 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">FAQs</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-green-200 hover:text-white">Report an Issue</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-green-200 mb-4">
                  Subscribe to our newsletter for updates on events and initiatives.
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-green-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none"
                  />
                  <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-green-800 text-center text-green-300 text-sm">
              <p>&copy; {new Date().getFullYear()} Swachh Seva. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
  );
}

export default App;