import React from 'react';
import { Brain, Gamepad2, Target, Lightbulb, Cpu, Users } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const About = ({ setCurrentPage, currentPage }: AboutProps) => {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
            <Brain className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">About QuantumLab</h1>
            <p className="text-blue-100 text-lg">Where AI meets Gaming Innovation</p>
          </div>
          
          <div className="px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img 
                  src="https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="AI and gaming technology fusion"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our groundbreaking approach centers on the synergy between Artificial Intelligence and the Gaming realm. 
                  We see games as more than mere pastimes; they are dynamic 'living labs' for technology's advancement.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="border-l-4 border-blue-500 pl-8">
                <div className="flex items-center mb-4">
                  <Gamepad2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">AI Training in Flying Chess</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Presently, our AI is undergoing intensive training and validation within the strategic landscape of{" "}
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Flying Chess AI
                  </button>. 
                  Here, it carefully studies player actions, adapts to new strategies, and continuously 
                  improves its decision-making processes.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  By recreating real game situations, the AI learns to respond adaptively and intelligently, 
                  gaining insights into reasoning, problem-solving, and creativity similar to human players.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Engagement</h4>
                    <p className="text-gray-600">Making games more engaging through intelligent AI systems</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fair Play</h4>
                    <p className="text-gray-600">Ensuring fair and balanced experiences for all players</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge Factor</h4>
                    <p className="text-gray-600">Adding more challenge and strategic depth to games</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-8">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Beyond Gaming Applications</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  This training not only improves gameplay but also opens doors to wider applications of AI, 
                  from better customer engagement to advanced automation across industries.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Customer Engagement</h5>
                    <p className="text-gray-600 text-sm">Improving customer experiences with AI-driven insights</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Automation</h5>
                    <p className="text-gray-600 text-sm">Streamlining processes across different industries</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  We are building a future where AI and gaming grow together, creating systems that 
                  entertain, teach, and inspire. The meeting point of Artificial Intelligence and Gaming 
                  is the foundation of our innovation.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Symbiotic Innovation</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Games are not only entertainment—they are also powerful platforms for 
                  learning, experimentation, and innovation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our goal is to create a partnership between AI and gaming that produces smarter, 
                  more adaptive systems that inspire and engage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
