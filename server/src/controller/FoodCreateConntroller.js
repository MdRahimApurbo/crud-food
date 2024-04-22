const FoodModel = require('../model/foodmodel')


// create food

exports.CreateFood = (req,res)=>{

    let reqBody = req.body;
    FoodModel.create(reqBody,(err,data)=> {
        if(err){
            res.status(400).json({status:'fail',data:err})
        }else{
           res.status(200).json({status:'success',data:data})
        }
    })

}