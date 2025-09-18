import React from 'react';
import { useState } from 'react';
import { Download, Cpu, Brain, Users, Shield } from 'lucide-react';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const downloadItems = [
    "Download Dragon Tiger Club ",
 "Download 3 Patti Flying Chess", 
 "Download Flying Chess",  
 "Download 3 Patti No1 ", 
 "Download 3 Patti Blue",  
 "Download 3 Patti Gold ", 
 "Download 3 Patti Lucky", 
 "Download Teen Patti Gold",  
 "Download 3 Patti Ludo ", 
 "Download 3 Patti Crown", 
 "Download 3 Patti Teen ", 
 "Download 3 Patti Tiger", 
  ];

  if (currentPage === 'privacy') {
    return <PrivacyPolicy setCurrentPage={setCurrentPage} currentPage={currentPage} />;
  }

  if (currentPage === 'about') {
    return <About setCurrentPage={setCurrentPage} currentPage={currentPage} />;
  }

  if (currentPage === 'contact') {
    return <Contact setCurrentPage={setCurrentPage} currentPage={currentPage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">QuantumLab</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors font-medium ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`transition-colors font-medium ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('privacy')}
                className={`transition-colors font-medium ${currentPage === 'privacy' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`transition-colors font-medium ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Download Buttons Section */}
        <div className="text-center mb-16">
          <div className="grid gap-4 max-w-lg mx-auto">
            {downloadItems.map((item, index) => (
              <button
                key={index}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg 
                         transition-all duration-200 transform hover:scale-105 hover:shadow-lg
                         flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Innovation Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Futuristic AI workspace with robots and digital interfaces"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                A futuristic scene of artificial intelligence robots working with a laptop, managing digital data, 
                automation, and virtual dashboards. The image symbolizes AI-driven innovation, machine learning, 
                and the future of smart technology. The intention improving AI to raise the Standard of Lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Future Development Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Digital handshake representing AI collaboration"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
                Future Development
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                AI Customer Service Testing ensures that chatbots and virtual assistants can handle customer queries 
                accurately, quickly, and in a human-like manner. It involves evaluating natural language understanding, 
                response quality, personalization, and problem-solving efficiency. The goal is to test how well AI systems 
                improve customer experience, reduce response time, and provide consistent support across multiple platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
            <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
            <p className="text-gray-600">Advanced machine learning algorithms for optimal performance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">24/7 intelligent customer service and automated assistance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
            <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">Enterprise-grade security with data protection guarantee</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            Copyright © 2025 QuantumLab | All Rights Are Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
