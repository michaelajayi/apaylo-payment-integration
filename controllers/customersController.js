const axios = require("axios");
const apiUrl = require("../utils/globals");

const gitHubAPI = "https://api.github.com/users";

exports.createCustomer = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiUrl}/EFT/createCustomers`,
      req.body
    );

    const customer = new Customer({
      name: "dljljd",
    });

    await customer.save();

    console.log(response.data);
    return res.status(200).json({
      success: true,
      data: response.data,
      customer,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
};

exports.getGitHubUsers = async (req, res) => {
  try {
    const response = await axios.get(`${gitHubAPI}`);
    console.log(response.data);
    return res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
};
