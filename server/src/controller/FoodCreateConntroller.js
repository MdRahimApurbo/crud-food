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

// Read All Food

exports.ReadAllFood = (req,res)=>{

    let query = {}
    projecttion = {FoodName}
    FoodModel.find(query,projecttion,(err,data)=> {
        if(err){
            res.status(400).json({status:'fail',data:err})
        }else{
           res.status(200).json({status:'success',data:data})
        }
    })

}

// Read Food

exports.ReadFood = (req,res)=>{

    let id = req.params.id;
    let query = {_id:id}
    let reqBody = req.body;

    FoodModel.find(query,(err,data)=> {
        if(err){
            res.status(400).json({status:'fail',data:err})
        }else{
           res.status(200).json({status:'success',data:data})
        }
    })

}


// Update Food

exports.UpdateFood = (req,res)=>{

    let id = req.params.id;
    let query = {_id:id}
    let reqBody = req.body;

    FoodModel.updateOne(query,reqBody,(err,data)=> {
        if(err){
            res.status(400).json({status:'fail',data:err})
        }else{
           res.status(200).json({status:'success',data:data})
        }
    })

}


// Delete Food

exports.DeleteFood = (req,res)=>{

    let id = req.params.id;
    let query = {_id:id}


    FoodModel.remove(query,(err,data)=> {
        if(err){
            res.status(400).json({status:'fail',data:err})
        }else{
           res.status(200).json({status:'success',data:data})
        }
    })

}