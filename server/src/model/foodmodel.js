const mongoose = require('mongoose');
const FoodModelSchema = mongoose.Schema({

    FoodName : {type:String},
    FoodCode : {type:String},
    FoodImage : {type:String},
    FoodCategory  : {type:String},
    QTY : {type:String},
    Price : {type:String}

},{
    versionKey:false
}

)

const FoodModel = mongoose.model('foodlist',FoodModelSchema);
module.exports = FoodModel;