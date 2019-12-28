const csvtojson = require("csvtojson");
const Resaurant = require("../models/restaurant_model");

function dumpRestaurants (){
    csvtojson()
    .fromFile("restaurantsa9126b3.csv")
    .then(csvData => {
    csvData.forEach(row => {

        var newRow = new Resaurant({
            ID:row['Restaurant ID'],
            Name: row['Restaurant Name'],
            Cuisines: row['Cuisines'],
            AverageCostForTwo: row["Average Cost for two"],
            Currency: row["Currency"],
            HasTablebooking: row["Has Table booking"],
            HasOnlineDelivery: row["Has Online delivery"],
            AggregateRating: row["Aggregate rating"],
            RatingColor: row["Rating color"],
            RatingText: row["Rating text"],
            Votes: row["Votes"]
        })
        const saved = newRow.save();
    });
  });
}


module.exports = dumpRestaurants;

