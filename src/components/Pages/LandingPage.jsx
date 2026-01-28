import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, Bell, BarChart3, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-navColor text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              OEM Vulnerability <span className="text-blue-400">Tracker</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10">
              A comprehensive platform for monitoring, analyzing, and staying ahead of critical security vulnerabilities across your IT and OT infrastructure.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center"
              >
                Go to Dashboard <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navColor text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <Shield size={600} />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why use OEM Vulnerability Tracker?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Built for security teams to streamline vulnerability management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Search className="text-blue-600" size={32} />}
              title="Automated Scraping"
              description="Real-time monitoring of multiple OEM websites to fetch the latest security advisories."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-green-600" size={32} />}
              title="Advanced Analytics"
              description="Visualize trends, severity breakdowns, and impact assessments with interactive charts."
            />
            <FeatureCard 
              icon={<Bell className="text-purple-600" size={32} />}
              title="Smart Alerts"
              description="Get notified immediately when new vulnerabilities affecting your environment are discovered."
            />
            <FeatureCard 
              icon={<Shield className="text-red-500" size={32} />}
              title="Security First"
              description="Enterprise-grade role-based access control and secure data handling for sensitive information."
            />
          </div>
        </div>
      </div>

      {/* About the App Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                About the Application
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The OEM Vulnerability Tracker is designed to bridge the gap between OEM advisory publications and security team response. In today's landscape, keeping track of every CVE and patch across dozens of vendors is a monumental task.
              </p>
              <p className="text-lg text-gray-600">
                Our platform automates this process by scraping official OEM sources, centralizing the data, and providing actionable insights. Whether it's IT equipment or OT industrial controllers, we help you maintain a robust security posture.
              </p>
            </div>
            <div className="lg:w-1/2 bg-navColor p-1 rounded-2xl shadow-2xl overflow-hidden">
               <div className="bg-white rounded-xl p-8 aspect-video flex items-center justify-center border-4 border-gray-100">
                  <div className="text-center">
                    <Shield size={80} className="text-blue-600 mx-auto mb-4 animate-pulse" />
                    <span className="text-2xl font-bold text-navColor">Secure Monitoring System</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 OEM Vulnerability Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow transition-transform hover:-translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
