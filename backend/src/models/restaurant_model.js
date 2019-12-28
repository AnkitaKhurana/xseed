const mongoose = require("mongoose");

const restaurantScema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Cuisines: String,
    AverageCostForTwo: Number,
    Currency: String,
    HasTablebooking: String,
    HasOnlineDelivery: String,
    AggregateRating: mongoose.Schema.Types.Decimal128,
    RatingColor: String,
    RatingText: String,
    Votes: Number
});

module.exports = mongoose.model("Restaurant", restaurantScema);