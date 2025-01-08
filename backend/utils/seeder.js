require('dotenv').config();
const mongoose = require('mongoose');
const Faculty = require('../models/Faculty');
const facultyData = require('../data/seedData');
const connectDB = require('../config/db');

// Connect to database
connectDB();

// Import data into database
const importData = async () => {
  try {
    // Clear existing data
    await Faculty.deleteMany();
    
    // Insert new data
    await Faculty.insertMany(facultyData);
    
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete all data from database
const destroyData = async () => {
  try {
    await Faculty.deleteMany();
    
    console.log('Data destroyed successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// If "-d" flag is passed, destroy data, else import data
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
} 