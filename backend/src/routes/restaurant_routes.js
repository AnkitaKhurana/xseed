const Restaurant = require("../models/restaurant_model");
const { Router } = require('express')
const router = Router()

// — Implement functionality to search for restaurants by name, in the backend API.
router.get("/", async (req, res) => {
    if (req.query.name === undefined) {
        const resturants = await Restaurant.find({}); try {
            res.send(resturants);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    else {
        const resturants = await Restaurant.find({ Name: req.query.name });
        try {
            res.send(resturants);
        } catch (err) {
            res.status(500).send(err);
        }
    }

});

// — Implement a feature to filter restaurants based on different kinds of cuisines.
// — Implement multiple sort features based on Rating, Votes, and Average Cost for two.

router.get("/Filter", (req, res) => {
    console.log(req.body)
    if (req.body.Cuisines) {
        Restaurant.find({ Cuisines: { $in: JSON.parse(req.body.Cuisines) } })
            .then((resturants) => {
                if (req.body.AggregateRating) {
                    resturants = resturants.filter(function (row) {
                        return row.AggregateRating == req.body.AggregateRating;
                    });

                }
                if (req.body.Votes) {
                    resturants = resturants.filter(function (row) {
                        return row.Votes == req.body.Votes;
                    });

                }
                if (req.body.AverageCostForTwo) {
                    resturants = resturants.filter(function (row) {
                        return row.AverageCostForTwo == req.body.AverageCostForTwo;
                    });

                }
                res.send(resturants);
            }).catch(err => {
                res.status(500).send(err);
            });
    }
    else {
        Restaurant.find({}).then((resturants) => {
            if (req.body.AggregateRating) {
                resturants = resturants.filter(function (row) {
                    return row.AggregateRating == req.body.AggregateRating;
                });
            }
            if (req.body.Votes) {
                resturants = resturants.filter(function (row) {
                    return row.Votes == req.body.Votes;
                });

            }
            if (req.body.AverageCostForTwo) {
                resturants = resturants.filter(function (row) {
                    return row.AverageCostForTwo == req.body.AverageCostForTwo;
                });
            }
            res.send(resturants);
        }).catch(err => {
            res.status(500).send(err);
        });

    }
});

module.exports = router;