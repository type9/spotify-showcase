const dotenv = require('dotenv');
dotenv.config();

//DATABASE
const mongoose = require("mongoose");
const db_user = process.env.DB_USER;
const db_pswd = process.env.DB_PSWD;
const db_cluster = process.env.DB_CLUSTER;
const db_name = "showcase-db";
const uri = `mongodb+srv://${db_user}:${db_pswd}@${db_cluster}.68vwj.mongodb.net/${db_name}?retryWrites=true&w=majority`;
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection Error:"));
db.once("open", function () {
  console.log("Connected successfully to AtlasDB");
});

module.exports = db;