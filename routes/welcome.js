const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('Welcome Tiruchengode');
})

router.get('/home',(req,res)=>{
    res.send('Welcome Have A Nice Day');
})

module.exports = router;