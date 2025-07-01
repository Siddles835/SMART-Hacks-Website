
import React from 'react';
import { Code2, Users, Trophy, Presentation } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: Code2,
      title: 'Weekly Coding Meetings',
      description: 'Explore CS concepts, build mini projects, and collaborate with mentors and peers.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      neonClass: 'neon-border-blue'
    },
    {
      icon: Trophy,
      title: 'Hackathons and Competitions',
      description: 'Compete, learn, and showcase your skills in real-world challenges and events.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      neonClass: 'neon-border-purple'
    },
    {
      icon: Presentation,
      title: 'Workshops and Speakers',
      description: 'Attend sessions hosted by developers, engineers, and industry professionals.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      neonClass: 'neon-border-indigo'
    }
  ];

  return (
    <section id="activities" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-purple-950 to-indigo-950 px-8 py-20 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm border border-gray-700 ${activity.neonClass}`}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <activity.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6">
                {activity.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Hackathon Section - removed button */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 md:p-16 text-white text-center neon-border-blue">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              HACKATHON 2025
            </h3>
            <p className="text-xl opacity-90">
              Our biggest event of the year! Join us for 24 hours of coding, creativity, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
