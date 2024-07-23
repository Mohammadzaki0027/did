// models/identity.js
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-page");

connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const identitySchema = new mongoose.Schema({
    vehicleNumber: { type: String, required: true, unique: true },
    did: { type: String, required: true },
    privateKey: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Identity', identitySchema);
