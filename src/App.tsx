import React, { useState } from 'react';
import { Download, Cpu, Brain, Users, Shield } from 'lucide-react';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // ✅ Direct Google Drive APK link using your File ID
  const downloadItems = [
    { 
      name: "Download Flying Chess",
      link: "https://drive.google.com/uc?export=download&id=1pdWBo09qxlj_IxCCeenqbEnIM9gb0Lro"
    },
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
              <a
                key={index}
                href={item.link}
                download
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg 
                         transition-all duration-200 transform hover:scale-105 hover:shadow-lg
                         flex items-center justify-center space-x-2 no-underline"
              >
                <Download className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ... your AI Innovation, Future Development, Features, Footer remain unchanged ... */}

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
