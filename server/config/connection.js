const mongoose = require('mongoose');
require('dotenv').config()

connection = `mongodb+srv://kaileymorter:${process.env.DB_PASS}}@school-cluster.5ae8t.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(
  connection, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
);

module.exports = mongoose.connection;
