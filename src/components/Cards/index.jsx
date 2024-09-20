import { useState } from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Cards } from "./styles";

function ServiceCards({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Cards className="app-card">
      <motion.div
        className="card"
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.h2 layout="position">{title}</motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </motion.div>
    </Cards>
  );
}

//Tipagem
ServiceCards.propTypes = {
  // children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCards;
