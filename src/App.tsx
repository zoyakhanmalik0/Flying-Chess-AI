import React, { useEffect, useState } from 'react';
import { Download, Cpu, Brain, Users, Shield, Home, Info, ShieldCheck, Mail } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Auto-download when component mounts
  useEffect(() => {
    // Start download automatically after a short delay
    const timer = setTimeout(() => {
      startAutoDownload();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const startAutoDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const progressInterval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsDownloading(false);
          setDownloadComplete(true);
          
          // Trigger actual download after simulation
          setTimeout(() => {
            handleDownload("https://flyingchess.com/?from_gameid=8418021&channelCode=8307610");
          }, 500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const downloadItems = [
    { name: "Download Flying Chess", link: "https://flyingchess.com/?from_gameid=8418021&channelCode=8307610" },
    { name: "Download 3 Patti Flying Chess", link: "https://flyingchess.com/?from_gameid=8290235&channelCode=100000" },
    { name: "Download 3 Patti No1", link: "https://flyingchess.com/?from_gameid=8165172&channelCode=100000" },
    { name: "Download 3 Patti Blue", link: "https://flyingchess.com/?from_gameid=8290235&channelCode=100000" },
    { name: "Download 3 Patti Gold", link: "https://flyingchess.com/?from_gameid=8165172&channelCode=100000" },
    { name: "Download 3 Patti Lucky", link: "https://flyingchess.com/?from_gameid=8418021&channelCode=8307610" },
    { name: "Download Teen Patti Gold", link: "https://flyingchess.com/?from_gameid=8165172&channelCode=100000" },
    { name: "Download 3 Patti Ludo", link: "https://flyingchess.com/?from_gameid=8418021&channelCode=8307610" },
    { name: "Download 3 Patti Crown", link: "https://flyingchess.com/?from_gameid=8290235&channelCode=100000" },
  ];

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Privacy Policy Component
  const PrivacyPolicy = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-700">
            <p>Last updated: December 2024</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p>We collect information to provide better services to all our users. This includes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Device information</li>
              <li>Log information</li>
              <li>Location information</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // About Component
  const About = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About QuantumLab</h1>
          <div className="prose prose-lg text-gray-700">
            <p>QuantumLab is at the forefront of AI innovation, developing cutting-edge solutions that transform how people interact with technology.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Our Mission</h2>
            <p>To create intelligent systems that enhance human capabilities and improve quality of life through advanced AI technologies.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What We Do</h2>
            <p>We specialize in machine learning, natural language processing, and computer vision to build solutions that matter.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Component
  const Contact = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <div className="prose prose-lg text-gray-700">
            <p>We'd love to hear from you. Get in touch with us through the following methods:</p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-600" />
                <span>Email: contact@quantumlab.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'privacy') return <PrivacyPolicy />;
  if (currentPage === 'about') return <About />;
  if (currentPage === 'contact') return <Contact />;

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
                className="transition-colors font-medium text-gray-700 hover:text-blue-600"
              >
                About
              </button>
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="transition-colors font-medium text-gray-700 hover:text-blue-600"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="transition-colors font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Auto Download Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {downloadComplete ? 'Download Complete!' : 'Downloading Flying Chess...'}
            </h2>
            
            {isDownloading && (
              <div className="max-w-md mx-auto">
                <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
                <p className="text-gray-600">Preparing your download... {downloadProgress}%</p>
              </div>
            )}
            
            {downloadComplete && (
              <div className="text-green-600 mb-6">
                <p className="text-lg">Your download should start automatically. If it doesn't, click the button below.</p>
              </div>
            )}
            
            <button
              onClick={() => handleDownload("https://flyingchess.com/?from_gameid=8418021&channelCode=8307610")}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg 
                       transition-all duration-200 transform hover:scale-105 hover:shadow-lg
                       flex items-center justify-center space-x-2 mx-auto"
            >
              <Download className="h-5 w-5" />
              <span>{downloadComplete ? 'Download Again' : 'Download Now'}</span>
            </button>
          </div>

          {/* Additional Download Buttons */}
          <div className="grid gap-4 max-w-lg mx-auto">
            {downloadItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleDownload(item.link)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg 
                         transition-all duration-200 transform hover:scale-105 hover:shadow-lg
                         flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="AI Innovation"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Experience the future of gaming with Flying Chess - where traditional board games meet cutting-edge AI technology. 
                Our intelligent systems ensure smooth gameplay, smart opponents, and an immersive experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="AI Collaboration"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
                Smart Gaming Experience
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our AI-powered gaming platform adapts to your skill level, providing challenging gameplay while ensuring 
                an enjoyable experience for players of all levels. Advanced algorithms analyze gameplay patterns to 
                deliver personalized gaming experiences.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Opponents</h3>
              <p className="text-gray-600">Play against intelligent AI that learns and adapts to your strategy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiplayer</h3>
              <p className="text-gray-600">Connect with players worldwide in real-time matches</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Gaming</h3>
              <p className="text-gray-600">Protected gaming environment with fair play guarantees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            Copyright © 2025 QuantumLab | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
