require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Faculty = require('../models/Faculty');
const MissionVision = require('../models/MissionVision');
const facultyData = require('../data/seedData');
const missionVisionData = require('../data/missionVisionData');

// Connect to database
connectDB();

// Utility function to import data
const importData = async (Model, data, modelName) => {
  try {
    // Clear existing data
    await Model.deleteMany();

    // Insert new data
    await Model.insertMany(data);

    console.log(`${modelName} Data imported successfully`);
    process.exit();
  } catch (error) {
    console.error(`Error importing ${modelName} data: ${error.message}`);
    process.exit(1);
  }
};

// Utility function to destroy data
const destroyData = async (Model, modelName) => {
  try {
    await Model.deleteMany();

    console.log(`${modelName} Data destroyed successfully`);
    process.exit();
  } catch (error) {
    console.error(`Error destroying ${modelName} data: ${error.message}`);
    process.exit(1);
  }
};

// Determine which action to perform
const action = process.argv[2];
const modelName = process.argv[3]; // Pass "Faculty" or "MissionVision" as the third argument

if (!modelName || (modelName !== 'Faculty' && modelName !== 'MissionVision')) {
  console.error('Please specify a valid model: Faculty or MissionVision');
  process.exit(1);
}

const Model = modelName === 'Faculty' ? Faculty : MissionVision;
const data = modelName === 'Faculty' ? facultyData : missionVisionData;

if (action === '-d') {
  destroyData(Model, modelName);
} else {
  importData(Model, data, modelName);
}
