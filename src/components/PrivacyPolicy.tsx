import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Calendar, Brain } from 'lucide-react';

interface PrivacyPolicyProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const PrivacyPolicy = ({ setCurrentPage, currentPage }: PrivacyPolicyProps) => {
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
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">Your privacy is our top priority</p>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At QuantumLab, we are committed to protecting your privacy and ensuring a secure,
                anonymous experience for all our users. This Privacy Policy applies to our platform,
                including{' '}
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Flying Chess AI
                </button>
                , and outlines our practices regarding data collection and user privacy.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Lock className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">1. Commitment to Non-Collection</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We explicitly state that QuantumLab does not collect, store, or process any form of
                    personal data from its visitors or users. Your engagement with our platform is entirely anonymous.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">2. No Data Requirements</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Access to and use of our services on QuantumLab requires no submission of personal
                    identification or sensitive information. We do not solicit, record, or retain details
                    such as financial account information, national identification numbers, or any other
                    personally identifiable data.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">3. Secure and Anonymous Experience</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our platform is designed for safe and anonymous utilization. We do not request
                    information that could compromise your security, violate ethical guidelines, or
                    contravene any legal or regulatory frameworks.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-3">
                    <FileText className="h-6 w-6 text-orange-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing Practices</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    As we do not collect any user data, there is no user data to share with any third parties.
                    Our operations are entirely data-agnostic.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Eye className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">5. Absence of Tracking Technologies</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    QuantumLab does not employ cookies, web beacons, trackers, or any similar technologies
                    that monitor user activity or gather personal details.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">6. Policy Updates</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    This Privacy Statement may be revised periodically. Any amendments will be published
                    on this page, accompanied by a revised effective date.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy or our privacy practices,
                  please feel free to contact us through our website.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
