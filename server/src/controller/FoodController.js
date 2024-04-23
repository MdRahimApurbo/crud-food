const FoodModel = require('../model/foodmodel')


// create food

exports.CreateFood = async (req, res) => {
    try {
        let reqBody = req.body;
        let data = await FoodModel.create(reqBody);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}


// Read All Food

exports.ReadAllFood = async (req, res) => {
    try {
        let query = {}
        let data = await FoodModel.find(query);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}



// Read Food

exports.ReadFood = async (req, res) => {

    try {
        let id = req.params.id;
        let query = { _id: id }
        let data = await FoodModel.find(query);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }

}


// Update Food

exports.UpdateFood = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let reqBody = req.body;
        let data = await FoodModel.updateOne(query, reqBody);
        res.status(200).json({ status: 'success', data: reqBody });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}



// Delete Food

exports.DeleteFood = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };

        let data = await FoodModel.deleteOne(query);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}
