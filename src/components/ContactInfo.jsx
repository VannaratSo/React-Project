import React from "react";
import angkor from '../assets/angkor-wat.webp';
const ContactInfo = () => {
  return (

    <div className="flex flex-col fixed-center justify-center text-white space-y-5">
      <h2 className="text-3xl font-bold"><span className="text-blue-500">Get</span> in Touch</h2>
      <p className="text-gray-300">
        Have questions about our services? We’d love to hear from you.
      </p>

      <div className="space-y-3">
        <p>📍 <span className="font-semibold">Address:</span> Phnom Penh, Cambodia</p>
        <p>📞 <span className="font-semibold">Phone:</span> +855 123 456 789</p>
        <p>✉️ <span className="font-semibold">Email:</span> delightech.asia</p>
      </div>

      {/* Google Map */}
      <iframe
        title="map"
        className="w-full h-80 rounded-lg mt-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.501093038222!2d104.89216611533485!3d11.56210864719971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513caae7a7c7%3A0xa2b89f1db66165f!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1671626187792!5m2!1sen!2skh"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactInfo;
