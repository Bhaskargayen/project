const user = require('./user');
const product = require('./product');

module.exports = (app)=>{
    app.all('/*',async (req, res, next)=>{
        next();
    });
    app.use('/api/users', user);
    app.use('/api/products', product);
}