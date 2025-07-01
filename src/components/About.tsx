
import React from 'react';
import { Target, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-900 px-8 py-20 section-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About the CS Club
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              The Redmond High Computer Science Club is a student-led organization 
              focused on building technical skills, solving real-world problems, and 
              fostering a community of enthusiastic learners.
            </p>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              We host coding competitions, teach workshops, and collaborate on impactful 
              software projects throughout the school year.
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
                <p className="text-gray-300">Active coding community</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 rounded-xl backdrop-blur-sm neon-border-purple">
                <h4 className="font-semibold text-white mb-3 text-xl">Weekly Meetings</h4>
                <p className="text-gray-300">Every Thursday 3:30 PM</p>
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

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Learning Environment
            </h3>
            <p className="text-xl text-gray-300">
              Take a look inside our classroom where the magic happens
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 neon-border-blue">
              <img 
                src="/lovable-uploads/dde008ee-2c19-456f-a472-14157a67e53e.png" 
                alt="CS Club members working on coding projects in the computer lab"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-2">Focused Learning</h4>
                <p className="text-gray-200">Students diving deep into coding challenges and collaborative projects</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 neon-border-purple">
              <img 
                src="/lovable-uploads/6e4c7657-6b15-4a94-9820-17ad651d8cec.png" 
                alt="Full classroom view of CS Club meeting with students coding together"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-semibold mb-2">Community Collaboration</h4>
                <p className="text-gray-200">Our vibrant community working together during weekly meetings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
