const Restaurant = require("../models/restaurant_model");
const { Router } = require('express')
const router = Router()

router.get("/", async (req, res) => {
    console.log('Fetching Resturants...');
    const resturants = await Restaurant.find({});
    try {
        res.send(resturants);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;