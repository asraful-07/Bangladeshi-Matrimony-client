import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            About BangladeshiMatrimony
          </h3>
          <p className="text-sm">
            BangladeshiMatrimony.com is the No.1 most trusted matrimony site for
            Bangladeshi brides and grooms. Lakhs of members have successfully
            found their life partners here! Browse through our vast selection of
            profiles from all Religions...
          </p>
          <a href="#" className="text-blue-500 text-sm">
            more »
          </a>
        </div>

        {/* Help & Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Live help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Upgrade
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">
                Safe Matrimony
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Popular Matrimony Searches
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms, Conditions and Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          BangladeshiMatrimony is part of Globalmatrimony.com | Copyright ©
          2025. All rights reserved. This website is strictly for matrimony
          purposes only and not a dating website
        </p>
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-300 hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
