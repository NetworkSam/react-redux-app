
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


//商户详情
let info = require('./Detail/info.js')


//通过ID来获取商户信息
app.get('/api/detail/info/:id', (req, res)=> {
    console.log(req.params.id);
    res.send(info);
})

//评价
let comment = require('./Detail/comment.js')


//评价id 页面 page
app.get('/api/detail/comment/:id/:page', (req, res)=> {
    console.log(req.params.id,'dfds');
    console.log(req.params.page,'fdsf');
    res.send(comment);
})






