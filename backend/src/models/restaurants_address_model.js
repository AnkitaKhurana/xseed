const mongoose = require("mongoose");

const addressScema = new mongoose.Schema({
    ID: Number,
    CountryCode: Number,
    City: String,
    Address: String,
    Locality: String,
    LocalityVerbose : String,
    Longitude: mongoose.Schem.Types.Decimal128,
    Latitude: mongoose.Schem.Types.Decimal128
});

module.exports = mongoose.model("Address", addressScema);