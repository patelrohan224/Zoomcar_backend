const express = require("express");
const router = express.Router();
const price_final = require("../models/price.model");
const Payment = require("../models/payment.model");
const SearchInput= require("../models/search_input_model");
const checkout = require('../models/checkout.model')
<<<<<<< Updated upstream
=======
const Signup = require("../models/signup.model");
>>>>>>> Stashed changes

router.get("", async (req, res) => {
    const  input_data = await  SearchInput.find().sort({_id:-1}).limit(1).lean().exec();
    const car_data = await  checkout.find().sort({_id:-1}).limit(1).lean().exec();
   let last_price = await  price_final.find().sort({_id:-1}).limit(1).lean().exec();
<<<<<<< Updated upstream
   
     res.render("payment.ejs",{
        input_data,
        car_data,
        last_price
=======
     const name = await  Signup.find().sort({_id:-1}).limit(1).lean().exec();
     res.render("payment.ejs",{
        input_data,
        car_data,
        last_price,
        name
>>>>>>> Stashed changes
     })
})
let price_data
router.post("", async (req, res) => {
    price_data= await price_final.create(req.body)
<<<<<<< Updated upstream
=======
   
>>>>>>> Stashed changes
    res.redirect("/price")
})


module.exports = router
