const inventoryRouter = require('./inventories');
const UserRouter = require('./users');

function route(app){
    app.use('/user',UserRouter)
    app.use('/inventory',inventoryRouter)
    app.use('/',(req,res) => {res.send("Home")})
}

module.exports = route