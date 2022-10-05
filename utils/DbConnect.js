import mongoose from "mongoose";

const DbConnect = () => {
  // if (mongoose.connections[0].readyState) {
  //   console.log("Already connected.");
  //   return;
  // }

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(` connected to db`))

    .catch((error) => {
      console.log(error);
    });
};

export default DbConnect;
