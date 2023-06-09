const mongoose = require('mongoose');
const BaseModel = require('./base.model');
const UserSchema = require('./schemas/user.schema');
class UserModel extends BaseModel {
    constructor(){
        super()
        this.init("users", UserSchema);
    }

    findByUsername(username){
        const query = this.model.findOne({username: username});
        return query.exec();
    }
}

module.exports = new UserModel();
