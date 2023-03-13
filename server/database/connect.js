const mongoose = require("mongoose");

const connect = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    });

    console.log(`mongoDB connected ${DB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
