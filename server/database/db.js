import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-dw8gqsu-shard-00-00.riailhg.mongodb.net:27017,ac-dw8gqsu-shard-00-01.riailhg.mongodb.net:27017,ac-dw8gqsu-shard-00-02.riailhg.mongodb.net:27017/?ssl=true&replicaSet=atlas-b98lwz-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error while connecting with database", error);
  }
};

export default Connection;
