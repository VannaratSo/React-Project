import investorImg from "../assets/investor.png"; // replace with your mockup/illustration

const Investor = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#0a0f2c] via-[#0f1a3d] to-[#142850] text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investor <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Relations</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="font-semibold">Delightech</span>, we empower financial growth with innovative 
            digital solutions. Our mission is to deliver sustainable 
            value for clients, partners, and investors worldwide.
          </p>
        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-blue-400">15+</h2>
            <p className="mt-2 text-gray-300">Years of Innovation</p>
          </div>
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-blue-400">80+</h2>
            <p className="mt-2 text-gray-300">Global Clients</p>
          </div>
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-blue-400">$200M</h2>
            <p className="mt-2 text-gray-300">Managed Assets</p>
          </div>
        </div>

        {/* Content + Image */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Why Invest in <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Delightech</span>?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We combine user-focused design with cutting-edge fintech solutions, 
              ensuring growth, trust, and scalability. As an investor, you join 
              a company that’s pioneering digital transformation in finance.
            </p>
            <button className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white transition">
              Download Investor Report →
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={investorImg}
              alt="Investor"
              className="w-72 md:w-96 lg:w-[28rem] drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investor;
