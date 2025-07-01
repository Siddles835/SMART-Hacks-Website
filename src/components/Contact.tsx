
import React from 'react';
import { Mail, Heart, Github, Instagram, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 px-8 py-20 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in joining us or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-10">
            <div className="flex items-center space-x-6 p-8 bg-gray-800/50 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-gray-700 neon-border-blue">
              <div className="w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-xl mb-2">Email Us</h3>
                <a 
                  href="mailto:redmondcsclub@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                >
                  redmondcsclub@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-10 shadow-sm backdrop-blur-sm border border-gray-700 neon-border-purple">
              <h3 className="font-semibold text-white mb-6 text-xl">Connect With Us</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Follow us on social media and stay updated with the latest news, events, and coding tips!
              </p>
              <div className="flex space-x-6">
                <button className="p-4 bg-purple-900/50 text-purple-400 rounded-lg hover:bg-purple-800/50 transition-colors">
                  <Instagram className="h-6 w-6" />
                </button>
                <button className="p-4 bg-gray-700/50 text-gray-400 rounded-lg hover:bg-gray-600/50 transition-colors">
                  <Github className="h-6 w-6" />
                </button>
                <button className="p-4 bg-blue-900/50 text-blue-400 rounded-lg hover:bg-blue-800/50 transition-colors">
                  <Code className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white neon-border-blue">
            <h3 className="text-3xl font-bold mb-8">Ready to Start Coding?</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg">Weekly meetings every Thursday at 3:30 PM</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg">All skill levels welcome</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg">Free workshops and mentorship</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-lg">Amazing community of peers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-gray-700">
          <p className="text-gray-400 flex items-center justify-center text-lg">
            © 2025 Redmond High School CS Club. Designed with 
            <Heart className="h-5 w-5 text-red-400 mx-2" />
            and TailwindCSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
