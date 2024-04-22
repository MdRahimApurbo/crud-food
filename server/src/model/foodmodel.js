const mongoose = require('mongoose');
const FoodModelSchema = mongoose.Schema({

    FoodName : {type:string},
    FoodCode : {type:string},
    FoodImage : {type:string},
    FoodCategory  : {type:string},
    QTY : {type:string},
    Price : {type:string}

},{
    versionKey:false
}

)

const FoodModel = mongoose.model('foodlist',FoodModelSchema);
module.exports = FoodModel;