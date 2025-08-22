import Sidhaanth from '@/assets/Sidhaanth.png';
import Dmitriy from '@/assets/Dmitriy.jpg';
import Pratham from '@/assets/Pratham.png';
import Sathvik from '@/assets/Sathvik.png';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Sathvik Darbha",
            role: "Founder",
            imgSrc: Sathvik,
            bio: "Sathvik is the driving force behind Smart Hacks, blending visionary leadership with deep technical expertise. Passionate about leveraging technology to create impactful, accessible solutions, Sathvik brings a unique mix of strategic thinking, problem-solving, and hands-on innovation. With a strong background in app development, user experience design, and emerging tech, he leads Smart Hacks in building tools that empower communities, bridge digital gaps, and inspire change."
        },
        {
            name: "Sidhaanth Kapoor",
            role: "Founder",
            imgSrc: Sidhaanth,
            bio: "Sidhaanth is the visionary founder of SMART Hacks, driven by a strong passion for empowering the next generation of tech innovators. He is the main force behind planning code camps and hackathons, bringing five years of coding experience to the table. His leadership and technical expertise are key to inspiring participants and creating a vibrant community."
        },
        {
            name: "Dmitriy Bondar",
            role: "Secretary",
            imgSrc: Dmitriy,
            bio: "Dmitriy serves as the secretary, utilizing his coding experience to ensure the organization's internal operations run smoothly. He is crucial for internal coordination and plays a key role in recruiting new members through Discord, helping to grow the SMART Hacks community and maintain a strong, active team."
        },
        {
            name: "Pratham Balaji",
            role: "Sponsorship Coordinator and PR",
            imgSrc: Pratham,
            bio: "Pratham is the Sponsorship Coordinator and PR representative. He is responsible for building and maintaining strong relationships with sponsors and partners. His work is essential for securing the resources needed to run successful events and for connecting the organization with the outside world, creating valuable opportunities for collaboration and growth."
        }
    ];

    return (
        <section id="team" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Meet the Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The dedicated individuals making SMART Hacks a reality.</p>
                     <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
                    </div>
                </div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamMemberCard = ({ name, role, imgSrc, bio }) => (
    <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img alt={name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" src={imgSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-500 transform translate-y-2/3 group-hover:translate-y-0">
            <div className="transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <h3 className="text-md font-semibold text-purple-300 mb-2">{role}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{bio}</p>
            </div>
        </div>
    </div>
);

export default TeamSection;