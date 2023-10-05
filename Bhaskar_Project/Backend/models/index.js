const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

require('dotenv').config();
const env = process.env.NODE_ENV || 'local';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        port: 3306,
        pool:{
            max: 5,
            min: 0,
            acqueir: 30000,
            idle: 10000,
        },
    },
)
const db ={};

fs.readdirSync(__dirname)
.filter((file)=>file.indexOf('.') !==0 && file !=='index.js')
.forEach((file)=>{
    const model = require(path.join(__dirname,file))(
        sequelize,
        Sequelize.DataTypes,
    );
    db[model.name]=model;
});
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports = db;