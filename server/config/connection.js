const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://kaileymorter:${process.env.DB_PASS}}@school-cluster.5ae8t.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

module.exports = mongoose.connection;
