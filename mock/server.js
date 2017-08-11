
let express = require('express');
let app = express();
app.listen(9000);
let ad = require('./home/ad.js')
//广告接口
app.get('/api/ad', (req, res)=> {
    res.send(ad);
})

let list = require('./home/list.js')
//列表接口  传递城市，页码
app.get('/api/list/:city/:page', (req, res)=> {
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list);
})






