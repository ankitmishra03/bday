import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [birthday, setBirthday] = useState('');

  const handleInputChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the birthday data to the server via API
      await axios.post('API_URL', { birthday });

      // Clear the form after successful submission
      setBirthday('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Birthday Input
      </motion.h1>
      <form className="form" onSubmit={handleSubmit}>
        <motion.label
          className="label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Enter your birthday:
        </motion.label>
        <motion.input
          className="input"
          type="date"
          value={birthday}
          onChange={handleInputChange}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.button
          className="button"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default App;
