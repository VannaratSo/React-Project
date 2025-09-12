const About = () => {
  return (
    <section className="bg-About py-20 px-6 lg:px-20 text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        About<span className="text-blue-400"> Us</span>
      </h2>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-10">
        <p className="text-gray-300 leading-relaxed mb-6">
          At <span className="text-blue-400 font-semibold">Delightech Co,.Ltd</span>, we
          are passionate about crafting digital experiences that blend
          creativity, technology, and innovation. Our mission is to help
          businesses grow by delivering high-quality design, development, and
          strategy services that leave a lasting impact.
        </p>
        <p className="text-gray-300 leading-relaxed">
          With a team of designers, developers, and strategists, we work
          together to create meaningful solutions that connect brands with their
          audiences in powerful ways. We believe in pushing boundaries, embracing
          challenges, and turning ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default About;
