import houseModel from "../models/houseModel";

export const post = async (req, res) => {
  const { location, price } = req.body;
  const house = new houseModel({ location, price });
  try {
    await house.save();
    res.status(200).json(house);
  } catch (error) {
    res.status(500).send("DB not reachable");
  }
};

export const postMultiple = async (req, res) => {
  try {
    console.time("myStep");

    let { location, price } = req.body;
    for (let i = 0; i < 1000; i++) {
      const house = new houseModel({ location, price });
      await house.save();
      price++;
    }
    console.timeEnd("myStep");

    res.status(200).send("DB updated sucessfully");
  } catch (error) {
    res.status(500).send("DB not reachable");
  }
};

export const getAll = async (req, res) => {
  try {
    const houses = await houseModel.find();
    res.status(200).send(houses);
    // res.status(200).send(houses.slice(0,10));
  } catch (error) {
    res.status(500).send("Not Found");
  }
};

export const getOne = async (req, res) => {
  try {
    const houseID = req.params.id;
    const house = await houseModel.findOne({ _id: houseID });
    res.status(200).send(house);
  } catch (error) {
    res.status(400).send("House not Found");
  }
};

export const update = async (req, res) => {
  try {
    const { location, price } = req.body;
    const houseID = req.params.id;
    const dbRes = await houseModel.updateOne({ _id: houseID }, { location, price });
    res.status(200).send(dbRes);
  } catch (error) {
    res.status(400).send("House not found");
  }
};

export const destroy = async (req, res) => {
  try {
    const houseID = req.params.id;
    const dbRes = await houseModel.deleteOne({ _id: houseID });
    res.status(200).send(dbRes);
  } catch (error) {
    res.status(400).send("House not found");
  }
};

export const destroyAll = async (req, res) => {
  try {
    const dbRes = await houseModel.deleteMany();
    res.status(200).send(dbRes);
  } catch (error) {
    res.status(400).send("House not found");
  }
};
