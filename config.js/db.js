

const mongoose=require("mongoose")
require("dotenv").config()
let url=process.env.MONGODB_URL

const connection=mongoose.connect(url)
module.exports={connection}
