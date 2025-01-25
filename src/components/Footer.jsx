import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <img src="logo.png" alt="Logo" className="h-10 mr-2" />
            MotiveMuscle
          </h2>
          <p className="mt-4 text-sm">
            Per sagittis habitant netus nibh condimentum velit sociosqu ornare gravida natoque iaculis. Lorem lacus felis sodales.
          </p>
          <div className="mt-6">
            <p className="font-bold">Support center 24/7</p>
            <p className="text-deepOrange font-semibold text-xl">+1 555 707-1234</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">History</a></li>
            <li><a href="#" className="hover:text-orange-400">Careers</a></li>
            <li><a href="#" className="hover:text-orange-400">News Update</a></li>
            <li><a href="#" className="hover:text-orange-400">Legal Notice</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-400">Disclaimer</a></li>
            <li><a href="#" className="hover:text-orange-400">Elements</a></li>
            <li><a href="#" className="hover:text-orange-400">Support</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Newsletter</h3>
          <p className="text-sm mb-4">
            Get the latest gym news, fitness tips, & exclusive offers delivered straight to your inbox.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-500">
            Copyright © 2023 MotiveMuscle by TBWBThemes
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
