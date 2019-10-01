const mongoose = require('mongoose')

const MONGO_URI_LOCAL = 'mongodb://localhost:27017/miaguila_dev'

// MONGODB
mongoose.connect(MONGO_URI_LOCAL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Connected to Database");
});
