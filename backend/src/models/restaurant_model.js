const mongoose = require("mongoose");

const restaurantScema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Cuisines:  [{type: String}],
    AverageCostForTwo: Number,
    Currency: String,
    HasTablebooking: String,
    HasOnlineDelivery: String,
    AggregateRating: Number,
    RatingColor: String,
    RatingText: String,
    Votes: Number
});

module.exports = mongoose.model("Restaurant", restaurantScema);