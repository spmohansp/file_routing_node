const express = require('express');
const app = express();

var welcome = require('./routes/welcome');
app.use('/tiruchengode',welcome);


app.get('/',(req,res)=>{
    res.send('Welcome Mohan');
})




app.listen(3000);