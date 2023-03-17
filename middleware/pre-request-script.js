const crypto = require("crypto-js");
const axios = require("axios");

function generateSignature(req, res, next) {
  const apiKey = process.env.APAYLO_API_KEY;
  const secret = process.env.APAYLO_PI_SECRET;
  const current_date = new Date().toISOString().split("T")[0];
  const concatedString = apiKey + secret + current_date;
  const cjsHash = crypto.SHA512(concatedString);
  const signature = cjsHash.toString(crypto.enc.Base64);

  req.locals = {
    pre_request_signature: signature,
  };

  next();
}

module.exports = generateSignature;
