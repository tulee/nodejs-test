const mongoose = require("mongoose");
class databse {
  constructor() {}
  connect = async () => {
    await mongoose.connect(
      "mongodb+srv://admin:1234567890@cluster0.peno97h.mongodb.net/mindX?retryWrites=true&w=majority"
    );
  };
}

module.exports = databse;