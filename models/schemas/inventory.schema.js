const mongoose = require('mongoose')
const InventorySchema = new mongoose.Schema({    
    sku:{
        type: String,
        required:true
    },
    description: String,
    instock:Number,
},{
    timestamps:true
})
module.exports = InventorySchema