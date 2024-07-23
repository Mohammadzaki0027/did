// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const identityRoutes = require('./routes/identity');
const {connection}=require("./config.js/db")
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/identity', identityRoutes);



    app.listen(port, async () => {
        try {
          await connection;
          console.log("Listening on the Port", port);
        } catch (error) {
          console.log(error, "error");
        }
      });
