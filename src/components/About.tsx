import React from 'react';
import { Target, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Top Section: About SMART Hacks */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-900 px-8 py-20 section-animate"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About SMART Hacks
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                SMART Hacks is a student-led non-profit organization focused on building technical skills, solving real-world problems, and fostering a community of enthusiastic learners through CS and AI.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                We host code camps, hackathons, AI & ML Camps, and other fun technology-related events.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-8 bg-blue-900/30 rounded-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-900/40 backdrop-blur-sm neon-border-blue">
                  <Target className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                  <h3 className="font-semibold text-white mb-3 text-lg">Our Mission</h3>
                  <p className="text-gray-300">Building tomorrow's tech leaders</p>
                </div>

                <div className="text-center p-8 bg-purple-900/30 rounded-xl hover:shadow-2xl transition-all duration-300 hover:bg-purple-900/40 backdrop-blur-sm neon-border-purple">
                  <Trophy className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                  <h3 className="font-semibold text-white mb-3 text-lg">Competitions</h3>
                  <p className="text-gray-300">Local and national coding contests</p>
                </div>

                <div className="text-center p-8 bg-indigo-900/30 rounded-xl hover:shadow-2xl transition-all duration-300 hover:bg-indigo-900/40 backdrop-blur-sm neon-border-indigo">
                  <Lightbulb className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
                  <h3 className="font-semibold text-white mb-3 text-lg">Innovation</h3>
                  <p className="text-gray-300">Real-world problem solving</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-xl backdrop-blur-sm neon-border-blue">
                  <h4 className="font-semibold text-white mb-3 text-xl">50+ Members</h4>
                  <p className="text-gray-300">Active coding community helping to create different passion projects</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 rounded-xl backdrop-blur-sm neon-border-purple">
                  <h4 className="font-semibold text-white mb-3 text-xl">Meetings</h4>
                  <p className="text-gray-300">Online Calls Weekly</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 p-8 rounded-xl backdrop-blur-sm neon-border-indigo">
                  <h4 className="font-semibold text-white mb-3 text-xl">5+ Languages</h4>
                  <p className="text-gray-300">Python, Java, JavaScript & more</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 p-8 rounded-xl backdrop-blur-sm neon-border-green">
                  <h4 className="font-semibold text-white mb-3 text-xl">Open Source</h4>
                  <p className="text-gray-300">Contributing to the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Club / Mission & Core Values */}
      <div className="mb-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are more than just a non-profit; we are a community of innovators, thinkers, and creators passionate about technology's potential to shape the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Mission Statement */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-gray-300 leading-relaxed">
              Our primary mission is to foster a collaborative and inclusive environment where students can explore the vast world of computer science. We aim to bridge the gap between academic theory and real-world application, empowering our members with the skills, confidence, and connections needed to excel in the tech industry. We believe in learning by doing, growing together, and building things that matter.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            {/* Collaboration */}
            <div className="flex items-start p-4 bg-gray-800/30 rounded-lg border border-transparent hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-white">Collaboration</h5>
                <p className="text-gray-400 text-sm">Team up on projects and learn from your peers in a supportive setting.</p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex items-start p-4 bg-gray-800/30 rounded-lg border border-transparent hover:border-green-500/50 transition-all duration-300">
              <div className="p-3 bg-green-500/10 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="m12 15 1.17-2.33a1 1 0 0 0-.34-1.34l-2.33-1.17a1 1 0 0 0-1.34.34L8.5 12Z"/>
                  <path d="M15.08 21.06a10 10 0 0 1-8.4-4.33"/>
                  <path d="M10 22.5a10 10 0 0 1-2.5-19.36"/>
                  <path d="M8.94 2.94a10 10 0 0 1 12.62 5.42"/>
                  <path d="M21.5 12a10 10 0 0 1-10.36 9.94"/>
                  <path d="M3.5 9a10 10 0 0 1 10.14-7.4"/>
                  <path d="M12.5 2.5a10 10 0 0 1 8.06 11.94"/>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-white">Innovation</h5>
                <p className="text-gray-400 text-sm">Experiment with new technologies and bring your creative ideas to life.</p>
              </div>
            </div>

            {/* Personal Growth */}
            <div className="flex items-start p-4 bg-gray-800/30 rounded-lg border border-transparent hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-white">Personal Growth</h5>
                <p className="text-gray-400 text-sm">Develop technical and soft skills that will prepare you for a successful career.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Positions */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Student-Led Internship Applications
            </h3>
            <p className="text-xl text-gray-400">
              Spots are limited, so Please Sign Up as soon as possible!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Developer */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h5 className="text-lg font-semibold text-white">Web Developer</h5>
            </div>

            {/* AI/ML Specialist */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-green-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 2a10 10 0 0 0-2 19.5v-1.5a8 8 0 1 1 4-16.5Z"></path><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
              </div>
              <h5 className="text-lg font-semibold text-white">AI or Machine Learning Specialist</h5>
            </div>

            {/* General Programming */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-yellow-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M9 12l-2 2 2 2"></path><path d="M15 12l2 2-2 2"></path></svg>
              </div>
              <h5 className="text-lg font-semibold text-white">General Programming / CS</h5>
            </div>

            {/* Public Relations */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-pink-500/50 hover:-translate-y-1 transition-all duration-300">
              <div className="p-4 bg-pink-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h5 className="text-lg font-semibold text-white">Public Relations / Social Media</h5>
            </div>

            {/* Marketing */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 lg:col-start-2">
              <div className="p-4 bg-red-500/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="m3 11 18-5v10L3 11z"></path><path d="M21 6v10"></path></svg>
              </div>
              <h5 className="text-lg font-semibold text-white">Marketing / Advertising</h5>
            </div>
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-12 rounded-2xl border border-gray-700 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl opacity-50"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Us?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become a part of our thriving community. Apply now to start your journey of learning, building, and innovating with us.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyKiy_bttvR6HmRrZNLd6PX3PmsZwMa4Iutt9uKVNL7ZHIWA/viewform?usp=header"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;