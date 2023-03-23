const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({    
    username:{
        type: String,
        required:true
    },
    password: String
    },{
    timestamps:true
})
module.exports = UserSchema