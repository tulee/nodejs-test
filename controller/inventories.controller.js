const model = require('../models/inventory.model');

class InventoryController {
  constructor() {}

  getAllProduct = async (req,res) => {
    let max_quantity = req.query.max
    let productList = (await model.getAll())
    if (max_quantity){
        productList = productList.filter(e => e.instock <= max_quantity)
    }
    res.send({status: true, data:productList, message:"Success"})
  }

}

module.exports = new InventoryController();
