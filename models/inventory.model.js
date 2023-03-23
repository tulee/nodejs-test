const mongoose = require('mongoose');
const BaseModel = require('./base.model');
const InventorySchema = require('./schemas/inventory.schema');
class InventoryModel extends BaseModel {
    constructor(){
        super()
        this.init("inventories", InventorySchema);
    }
}

module.exports = new InventoryModel();
