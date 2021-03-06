require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3001;
const mongoose = require("mongoose");
const restaurantRoutes = require("./src/routes/restaurant_routes");
const  DB_URI  =(process.env.MONGO_DB_URI || "mongodb://localhost:27017/microservices");
const dumpInMongo = require("./src/utilities/csvToMongo");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Backend Working!'))
app.use("/restaurant/", restaurantRoutes);



mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    mongoose.connection.collections['restaurants'].drop( function(err) {
        console.log('collection dropped');
    });
    dumpInMongo();
    return ;
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

mongoose.connect(DB_URI, { useNewUrlParser: true });

app.listen(port, () => console.log(`Backend listening on port ${port}!`))
