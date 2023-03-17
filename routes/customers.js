const express = require("express");
const router = express.Router();

const generateSignature = require("../middleware/pre-request-script");
const { createCustomer, getGitHubUsers } = require("../controllers/customersController");

// @route   POST api/customers
// @desc    Create a customer
// @access  Private
router.post("/", getSignature, createCustomer);

// @route   GET api/github-users
// @desc    Get GitHub Users
// @access  Public
router.get("/", getGitHubUsers);

module.exports = router;
