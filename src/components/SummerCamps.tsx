import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const SummerCamps = () => {
  const camps = [
    {
      title: 'Basic Python Camp',
      date: 'July 14-18 (9 AM - 1 PM)',
      description: 'Learn Python fundamentals with fun projects. Great for beginners—no experience required!',
      icon: '🐍',
      color: 'from-yellow-400 to-orange-500',
      level: 'Beginner',
      neonClass: 'neon-border-blue'
    },
    {
      title: 'Intermediate Python Camp',
      date: 'July 21-25 (9 AM - 1 PM)',
      description: 'Learn Advanced Python like Stacks, Sets, Graphs, Algorithms, and OOP in 5 days of Python fun.',
      icon: '🐍',
      color: 'from-blue-400 to-blue-600',
      level: 'Intermediate',
      neonClass: 'neon-border-blue'
    },
    {
      title: 'Web Development Camp',
      date: 'July 28 - Aug 1 (2-6 PM)',
      description: 'Build and deploy websites using HTML, CSS, JavaScript, and backend tools.',
      icon: '🌐',
      color: 'from-orange-400 to-red-500',
      level: 'All Levels',
      neonClass: 'neon-border-purple'
    },
    {
      title: 'Java Code Camp',
      date: 'Aug 4-8 (10 AM - 2 PM)',
      description: 'Master Java syntax, OOP principles, and build cool simulations and games.',
      icon: '☕',
      color: 'from-red-400 to-pink-500',
      level: 'Intermediate',
      neonClass: 'neon-border-indigo'
    }
  ];

  return (
    <section id="camps" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-8 py-20 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Summer Code Camps 2025
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Intensive coding bootcamps designed to accelerate your programming journey during summer break.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {camps.map((camp, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 rounded-2xl border border-gray-700 p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group backdrop-blur-sm ${camp.neonClass}`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`text-4xl p-4 bg-gradient-to-r ${camp.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-2xl font-bold">
                    {camp.icon}
                  </span>
                </div>
                <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  {camp.level}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {camp.title}
              </h3>

              <div className="flex items-center text-gray-400 mb-6">
                <Calendar className="h-5 w-5 mr-3" />
                <span>{camp.date}</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {camp.description}
              </p>

              <button className={`w-full bg-gradient-to-r ${camp.color} text-white py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center text-lg`}>
                JOIN HERE
                <ExternalLink className="h-5 w-5 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/50 rounded-2xl p-10 backdrop-blur-sm border border-gray-700 neon-border-blue">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Have Questions About Our Camps?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get in touch with our team for more information about schedules, prerequisites, and registration.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamps;
