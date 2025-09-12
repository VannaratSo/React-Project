import team from '../assets/team.png'
import team1 from '../assets/team4.jpg'
import team2 from '../assets/team1.png'
import team3 from '../assets/team5.jpg'
const teamMembers = [
  {
    id: 1,
    name: "LAY VILA",
    role: "CEO & Founder",
    img: team,
  },
  {
    id: 2,
    name: "CHUM KIMSRUN",
    role: "Marketing Supervisor",
    img: team1,
  },
  {
    id: 3,
    name: "CHUM KIMSRUN",
    role: "Marketing Supervisor",
    img: team2,
  },
  {
    id: 4,
    name: "PHENG RAKSA",
    role: "Business Advisor",
    img: team3,
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
