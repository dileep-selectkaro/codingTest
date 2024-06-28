const Product = require("../models/productModel");

// Create
const create = async (req, res) => {
  const data = req.body;

  try {
    const savedData = await Product.create(data);
    res.status(201).send({ message: "Data saved successfully", savedData });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

module.exports={create}