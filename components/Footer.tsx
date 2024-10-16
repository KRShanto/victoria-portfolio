"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-teal-800 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Victoria McKenna. All rights
          reserved.
        </p>
        <p className="mt-2">Direct Response Copywriting Specialist</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:underline transition-colors">
            About
          </a>
          <a href="#" className="hover:underline transition-colors">
            Services
          </a>
          <a href="#" className="hover:underline transition-colors">
            Contact
          </a>
          <a href="#" className="hover:underline transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
