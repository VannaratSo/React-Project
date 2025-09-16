
import React from "react";

const Contact = () => {
  return (
    <section className="Contact min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 px-6 py-16">       
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-white">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold">Contact <span className ="text-blue-500">Us</span></h2>
          <p className="text-lg text-gray-200">
            We'd love to hear from you! Fill out the form or reach us via the details below.
          </p>

          <div className="space-y-4">
            <p><span className="font-semibold">📍 Address:</span> Phnom Penh, Cambodia</p>
            <p><span className="font-semibold">📞 Phone:</span> +855 12 345 678</p>
            <p><span className="font-semibold">✉️ Email:</span> support@delightech.com</p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold text-white shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
