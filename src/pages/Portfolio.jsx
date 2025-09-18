import React from "react";

const BusinessPortfolio = () => {
  return (
    <section className="min-h-screen portfolio text-white py-16 px-6 md:px-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Business <span className="text-blue-400  font-semibold ">Portfolio</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          A forward-thinking financial technology company dedicated to creating
          innovative digital solutions that improve access to financial services
          in Cambodia.
        </p>
      </div>

      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <p className="text-gray-300 leading-relaxed"><span className="text-blue-500 font-bold">Delightech Co,. Ltd </span>
          are passionate about crafting digital experiences that blend
          creativity, technology, and innovation. Our mission is to help
          businesses grow by delivering high-quality design, development, and
          strategy services that leave a lasting impact.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Our flagship product, <span className="font-bold">LUYLEUN</span>, is
          transforming the loan industry with instant approvals, smart loan
          management, and a customer-first approach.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="text-gray-300">
            To become a leading fintech innovator in Southeast Asia, delivering
            accessible, transparent, and impactful financial solutions.
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Empower individuals and businesses with fast and secure loan
              services.
            </li>
            <li>
              Deliver user-friendly financial technology that enhances everyday
              life.
            </li>
            <li>
              Build trust through transparency, innovation, and
              customer-centric solutions.
            </li>
          </ul>
        </div>
      </div>

      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li><span className="font-bold">Innovation –</span> Continuously developing smarter, simpler, and faster financial solutions.</li>
          <li><span className="font-bold">Trust –</span> Building long-term relationships with customers and partners through transparency.</li>
          <li><span className="font-bold">Accessibility –</span> Making financial services available to everyone, anytime, anywhere.</li>
          <li><span className="font-bold">Speed –</span> Delivering services that match today’s fast-paced lifestyle.</li>
          <li><span className="font-bold">Excellence –</span> Striving for top-tier customer experience and reliability.</li>
        </ul>
      </div>

      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Flagship Product: LUYLEUN</h2>
        <p className="text-lg font-bold mb-4">
          LUYLEUN (Fast Cash, Instant Approval!)
        </p>
        <p className="text-gray-300 mb-6">
          LUYLEUN is a cutting-edge loan service platform designed to provide quick and
          reliable access to financial assistance. With a seamless mobile application, users can:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Apply for loans within minutes.</li>
          <li>Receive instant approval notifications.</li>
          <li>Manage repayments with flexible options.</li>
          <li>Access customer support with ease.</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Instant Loan Approval – AI-driven decision-making for real-time results.</li>
            <li>Smart Loan Management – Track loan balances and repayment schedules.</li>
            <li>Secure Transactions – Industry-standard encryption and compliance.</li>
            <li>User-Friendly App – Intuitive design with Khmer & English support.</li>
            <li>Scalable System – Ready to expand services for both individuals and SMEs.</li>
          </ul>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Target Market</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Individuals needing fast, short-term financial assistance.</li>
            <li>Small & Medium Enterprises (SMEs) seeking accessible financing solutions.</li>
            <li>Young Professionals & Students who value quick and transparent services.</li>
          </ul>
        </div>
      </div>


      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Competitive Advantage</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>First mover in digital loan origination with a fully localized app in Khmer.</li>
          <li>Strong focus on user experience and design for effortless navigation.</li>
          <li>Fast and transparent processes compared to traditional banking.</li>
          <li>Committed to regulatory compliance and financial security.</li>
        </ul>
      </div>

      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Future Expansion</h2>
        <p className="text-gray-300 mb-4">
          Delightech aims to expand LUYLEUN’s capabilities into:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>SME-focused loan products.</li>
          <li>Payment solutions (including Bluetooth Pay).</li>
          <li>AI-driven financial advisory.</li>
          <li>Regional expansion within ASEAN fintech markets.</li>
        </ul>
      </div>
    </section>
  );
};

export default BusinessPortfolio;
