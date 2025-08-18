import React from 'react';

// Lucide React Icons (placeholders, you would install lucide-react)
const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const Heart = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
);
const Github = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const Instagram = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const Code = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
// Custom Discord Icon SVG
const DiscordIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.21,2.6C18.39,1.71,16.47,1.1,14.47,0.79L14.24,1.88C15.82,2.15,17.33,2.6,18.73,3.21C17.61,4,16.4,4.64,15.12,5.1C13.85,5.55,12.53,5.85,11.18,5.94C8.32,5.82,5.7,4.44,4.09,2.45C5.54,1.8,7.08,1.3,8.7,0.99L8.47,0C6.47,0.3,4.55,0.9,2.73,1.79C0.23,4.95-0.28,8.47,0.08,11.91C0.83,16.88,4.5,20.33,9.08,21.94C9.8,22.2,10.5,22.39,11.18,22.52C11.23,22.52,11.28,22.52,11.33,22.52C11.33,22.52,11.34,22.52,11.34,22.52C11.93,22.63,12.5,22.69,13.07,22.69C13.07,22.69,13.07,22.69,13.08,22.69C13.44,22.68,13.8,22.64,14.16,22.58C14.21,22.57,14.26,22.56,14.3,22.54L14.54,21.46C13.3,21.78,12.04,21.89,10.77,21.77C10.77,21.77,10.77,21.77,10.76,21.77C8.18,21.56,6,20.5,4.65,18.8C5.4,19.22,6.2,19.55,7.05,19.79C7.1,19.8,7.15,19.8,7.2,19.81C7.2,19.81,7.2,19.81,7.21,19.81C7.88,20,8.56,20.1,9.25,20.12C11.77,20.18,14.13,19.11,15.8,17.34C15.94,17.18,16.07,17.01,16.19,16.83C15.5,17.18,14.75,17.45,13.95,17.63L13.71,16.54C14.43,16.3,15.14,15.96,15.79,15.54C16.04,15.35,16.27,15.15,16.49,14.93C19.52,12.91,21.18,9.6,20.81,6.15C20.68,4.92,20.5,3.72,20.21,2.6M8.28,14.88C7.27,14.88,6.44,14.05,6.44,13.04C6.44,12.03,7.27,11.2,8.28,11.2C9.29,11.2,10.12,12.03,10.12,13.04C10.12,14.05,9.29,14.88,8.28,14.88M14.65,14.88C13.64,14.88,12.81,14.05,12.81,13.04C12.81,12.03,13.64,11.2,14.65,11.2C15.66,11.2,16.49,12.03,16.49,13.04C16.49,14.05,15.66,14.88,14.65,14.88Z" />
  </svg>
);


// Contact Section - UPDATED
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950 px-8 py-20">
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
            <div className="flex items-center space-x-6 p-8 bg-gray-800/50 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm border border-gray-700">
              <div className="w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-xl mb-2">Email Us</h3>
                <a 
                  href="mailto:smarthacksorg@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                >
                  smarthacksorg@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm border border-gray-700">
              <h3 className="font-semibold text-white mb-6 text-xl">Connect With Us</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Follow us on social media and join our community to stay updated!
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="https://discord.gg/NMCu85DNGz" className="flex-grow md:flex-grow-0">
                    <button className="w-full text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-lg px-6 py-4 flex items-center justify-center space-x-3">
                        <DiscordIcon className="h-6 w-6" />
                        <span>Join our Discord</span>
                    </button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl shadow-purple-500/30">
            <h3 className="text-3xl font-bold mb-8">Ready to Start Coding?</h3>
            <div className="space-y-6">
              <ListItem>Join Our Code Camps or schedule a talk with Sidhaanth Kapoor (sidhaanthkapoor@gmail.com) or Sathvik Darbha (darbhasathvik@gmail.com)</ListItem>
              <ListItem>All skill levels welcome</ListItem>
              <ListItem>Free code camps and events</ListItem>
              <ListItem>Amazing community of peers</ListItem>
            </div>
          </div>

        </div>

        <div className="text-center pt-10 border-t border-gray-700">
          <p className="text-gray-400 flex items-center justify-center text-lg">
            © 2025 SMART Hacks Organization. Designed with 
            <Heart className="h-5 w-5 text-red-400 mx-2" fill="currentColor" />
            and TailwindCSS.
          </p>
        </div>
      </div>
    </section>
  );
};

// Helper component for list items
const ListItem = ({ children }) => (
    <div className="flex items-start space-x-4">
        <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
        <span className="text-lg">{children}</span>
    </div>
);

export default ContactSection;
