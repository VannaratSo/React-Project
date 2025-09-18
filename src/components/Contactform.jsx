import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        <span className="text-blue-500">Send</span> a Message
      </h2>
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-200 py-3 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-200 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-200 mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
