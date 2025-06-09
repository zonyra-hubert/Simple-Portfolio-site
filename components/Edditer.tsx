import { motion } from "framer-motion";

import React from "react";

const Edditer = () => {
  return (
    <div>
      <button className="text-center">
        <motion.a
          href="https://hubstore.vercel.app/"
          rel="noopener noreferrer"
          className=" text-blue-500 py-2 transition duration-300 "
          whileHover={{ scale: 1.05 }}
        >
          My Ecommerce website
        </motion.a>
      </button>
    </div>
  );
};

export default Edditer;
