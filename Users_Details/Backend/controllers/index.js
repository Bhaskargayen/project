const user = require('./user');

module.exports = (app)=>{
    app.all('/*',async (req, res, next)=>{
        next();
    });
    app.use('/api/v1/users', user);

}
