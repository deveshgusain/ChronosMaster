import mongoose from "mongoose";

const {Schema} = mongoose;

const houseSchema = new Schema({
  location: String,
  price: Number,
});

const houseModel = mongoose.model("House", houseSchema);

export default houseModel;
