import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  // Replace these with your actual social media links
  const socialLinks = {
    whatsapp: "https://wa.me/+8801745742875", // Include country code
    facebook: "https://www.facebook.com/rahat.ashrafi.5",
    instagram: "https://www.instagram.com/rahat_ashrafi_dip",
    twitter: "https://twitter.com/Rahat_Ashrafi",
  };

  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      {/* Company Info & Socials */}
      <div>
        <h3 className="text-2xl font-bold text-[#41A4FF]">Travely</h3>
        <p className="py-4">
          Travely is your trusted partner for safe and memorable travel. From tour packages to car rentals, we’ve got your journey covered.
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          {/* WhatsApp */}
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="text-gray-300 hover:text-[#25D366] transition-colors duration-300"
          >
            <FaWhatsappSquare size={30} />
          </a>

          {/* Facebook */}
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="text-gray-300 hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebookSquare size={30} />
          </a>

          {/* Instagram */}
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-gray-300 hover:text-[#E4405F] transition-colors duration-300"
          >
            <FaInstagramSquare size={30} />
          </a>

          {/* Twitter */}
          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Twitter"
            className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
          >
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex md:justify-around justify-start mt-8">
        {/* Reservations Column */}
        <div>
          <h6 className="font-bold text-[#41a3ff]">Reservations</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Hotels</li>
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Tour Packages</li>
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Vehicles</li>
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Restaurants</li>
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="ml-[8rem] md:ml-0">
          <h6 className="font-bold text-[#41A4FF]">Support</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">Contact us</li>
            <li className="py-2 text-sm hover:text-[#41A4FF] transition-colors cursor-pointer">About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
