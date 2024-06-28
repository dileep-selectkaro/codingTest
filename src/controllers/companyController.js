const Company = require("../models/companyModel");
const { createValidation } = require("../validation/companyValidation");

// Create
const create = async (req, res) => {
  const data = req.body;
  const {
    logo,
    websiteURL,
    contactNumber,
    countryCode,
    city,
    postalCode,
    country,
    headOfficeAddress,
    companyName
  } = data;
  const { error } = createValidation.validate({
    companyName,
    contactNumber,
    countryCode,
    city,
    country,
    postalCode,
    headOfficeAddress
  });
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  try {
    const savedData = await Company.create(data);
    res.status(201).send({ message: "Data saved successfully", savedData });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

// Fetch Data
const fetchData = async (req, res) => {
  try {
    const searchQuery = req.query.search || '';
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortField = req.query.sortField || 'name';
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
    const skip = (page - 1) * limit;
    const pipeline = [
      {
        $match: {
          $or: [
            { companyName: { $regex: searchQuery, $options: 'i' } },
            { country: { $regex: searchQuery, $options: 'i' } },
          ]
        }
      },
      {
        $sort: {
          [sortField]: sortOrder
        }
      },
      {
        $skip: skip
      },
      {
        $limit: limit
      },
    ];
    const fetchedData = await Company.aggregate(pipeline).exec();
    res.status(200).send({ message: "Successfully fetched Data", fetchedData });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

module.exports = { create, fetchData };
