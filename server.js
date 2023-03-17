const express = require("express");
const cors = require("cors");
const axios = require("axios");

const generateSignature = require("./middleware/pre-request-script");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());

// Parse JSON requests || Init JSON Middleware
app.use(express.json({ extended: false }));

// Parse x-www-form-urlencoded requests
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Connected to APAYLO PMT INTEGRATION API",
  });
});

// Define routes
app.use("/api/customers", require("./routes/customers"));

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
