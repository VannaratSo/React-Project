import team from '../assets/10.png'
import team1 from '../assets/3.png'
import team2 from '../assets/9.png'
import team3 from '../assets/4.png'
import team4 from '../assets/5.png'
import team5 from '../assets/7.png'
import team6 from '../assets/6.png'
import team7 from '../assets/8.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaYoutube } from "react-icons/fa";
const teamMembers = [
  {
    id: 1,
    name: "PHENG REAKSA",
    role: "Business Advisor",
    img: team,
  },
  {
    id: 2,
    name: "LAY VILA",
    role: "CEO & Founder",
    img: team1,
  },
  {
    id: 3,
    name: "KE CHANKRISNA",
    role: "CTO",
    img: team2,
  },
  {
    id: 4,
    name: "LY CHENDA",
    role: "Credit Accessment Supervisor",
    img: team3,
  },
  {
    id: 5,
    name: "LY PENGSEA",
    role: "Account Supervisor",
    img: team4,
  },
  {
    id: 6,
    name: "METH LEABHENG",
    role: "Human Resourse",
    img: team5,
  },
  {
    id: 7,
    name: "CHUM KIMSRUN",
    role: "Marketing Supervisor",
    img: team6,
  },
  {
    id: 8,
    name: "LY PENGSEA",
    role: "Collection Supervisor",
    img: team7,
  },
];

const Team = () => {
  return (
    <section className="bg-Team py-20 px-6 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Meet Our <span className="text-blue-500">Team</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12">
        Meet the people working to solve citizens’ financial needs
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-blue-300 text-sm">{member.role}</p>
            </div>
            <div className="flex justify-between px-16 py-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="https://telegram.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <FaTelegram />
          </a>
        </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
