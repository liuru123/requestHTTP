/**
 * Created by liuru on 16-8-1.
 */
const express =require('express');
const bodyParser =require('body-parser');
const app = express();
var api = require('./routes/api');
var post = require('./routes/PostTransformBarcode');
var barcode = require('./routes/BarcodeTransformPost');
 app.use(bodyParser.urlencoded({extend:true}));

app.post('/PostTransformBarcode',function (req,res) {
    res.send(new post().postTransformBarcode(req.body.posts));
});
app.post('/BarcodeTransformPost',function (req,res) {
    console.log(req)
    res.send(new barcode().BarcodeTransformPost(req.body.barcode));
});
app.listen(3000,function () {
    console.log('Example app listening on port 3000!');
});