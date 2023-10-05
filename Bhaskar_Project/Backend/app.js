const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

const route = require('./router');
const model = require('./models');

app.use(bodyparser.json({limit:'50mb', extented:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());

route(app);

model.sequelize
.sync({
    logging: false,
    alert: true,
})
.then(()=>{
    console.log('Starting Up server..');
    app.listen(port,()=>{
        console.log(`Server is Running at Port ${port}`);
    });
});