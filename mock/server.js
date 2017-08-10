
let express = require('express');
let app = express();

app.listen(9000);


let ad = require('./home/ad.js')
//广告接口
app.get('/api/ad', (req, res)=> {
    res.send(ad);
})


