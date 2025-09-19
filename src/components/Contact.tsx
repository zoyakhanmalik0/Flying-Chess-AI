import React, { useState } from 'react';
import { MessageCircle, Send, Bot, Mail, Shield, Clock, Brain } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const Contact = ({ setCurrentPage, currentPage }: ContactProps) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm your AI assistant. How can I help you today?"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', text: message }]);

      setTimeout(() => {
        setChatMessages(prev => [
          ...prev,
          {
            type: 'bot',
            text: "Thank you for your message! I've received it and will process your request. Our AI system is designed to provide quick and helpful responses."
          }
        ]);
      }, 1000);

      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
            <MessageCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">
              We Sleep When AI Is Here To Support You.
            </h1>
            <p className="text-blue-100 text-lg">24/7 AI-powered customer assistance</p>
          </div>

          <div className="px-8 py-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AI Contact Bot – Quick Guide
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is it?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The AI Contact Bot is a virtual assistant on our website that lets you send
                    messages and get automated replies safely. It is also integrated with{' '}
                    <button
                      onClick={() => setCurrentPage('home')}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Flying Chess AI
                    </button>{' '}
                    for enhanced support features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Use</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Type your message in the input field ("Type your message...").</li>
                    <li>Click Send or press Enter.</li>
                    <li>Read the reply from the bot in the chat window.</li>
                  </ol>
                </div>

                {/* Notes */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Notes
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No personal info is required (no bank details, ID numbers, etc.).
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Safe to use: we do not collect or store any data.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Replies are automated, confirming that your message was received.
                    </li>
                  </ul>
                </div>

                {/* Email Contact */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    5. Contact Us Outside the Bot
                  </h4>
                  <p className="text-gray-700">
                    If you prefer traditional contact methods, you can reach us via email at:{' '}
                    <a
                      href="mailto:support@quantumlab.ai"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      QuantumLab Customer Service
                    </a>
                  </p>
                </div>

                {/* Tip */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    Tip
                  </h3>
                  <p className="text-gray-700">Use on desktop or mobile for a smooth chat experience.</p>
                </div>
              </div>
            </div>

            {/* AI Chat Bot Interface */}
            <div className="max-w-md mx-auto">
              <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-6 w-6 text-white" />
                    <h3 className="text-white font-semibold">AI Contact Bot</h3>
                  </div>
                </div>

                <div className="h-64 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-purple-600 text-white'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Need More Help?</h3>
                <p className="text-gray-700 mb-4">
                  Our AI system is constantly learning and improving to provide you with the best
                  support experience.
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    24/7 Available
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Secure & Private
                  </div>
                  <div className="flex items-center">
                    <Bot className="h-4 w-4 mr-1" />
                    AI Powered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Contact;
