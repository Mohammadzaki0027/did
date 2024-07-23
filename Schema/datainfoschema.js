const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const identity = require('../models/identity');



const identitySchema = new mongoose.Schema({
    vehicleNumber: { type: String, required: true, unique: true },
    did: { type: String, required: true },
    privateKey: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Identity', identitySchema);

module.express = identity;