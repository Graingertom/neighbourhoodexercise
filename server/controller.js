const express = require("express");
const router = express.Router();
const path = require("path");
const Addresses = require("./model");


router.get('/', (req, res) => {
    res.send(Addresses.All);
    res.status(200);
});



router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedHouse = Addresses.findById(id);
        res.send(selectedHouse);
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post("/", (req, res) => {
    const data = req.body;
    const newHouse = Addresses.create(data);
    res.status(201).send(newHouse);
});

router.get("/?:min&&:max", (req, res) => {
    const data = {min: req.params.min, max:req.params.max};
    const result = Addresses.ageQuery(data);
    res.status(200).send(result);
});

// router.get('/:id/comments', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const selectedPost = Journal.findById(id);
//         res.send(selectedPost.comments)
//         res.status(200);
//     } catch (err) {
//         console.log(err);
//         res.status(404).send(err);
//     }
// });
module.exports = router
