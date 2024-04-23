const express = require('express');
const FoodConntroller = require('../controller/FoodController')
const router = express.Router();




//  create

router.post('/createfood',FoodConntroller.CreateFood)

//  read all

router.get('/readallfood',FoodConntroller.ReadAllFood)

//  read

router.get('/readfood/:id',FoodConntroller.ReadFood)

//  update

router.post('/updatefood/:id',FoodConntroller.UpdateFood)

//  delete

router.get('/deletefood/:id',FoodConntroller.DeleteFood)


module.exports = router;
