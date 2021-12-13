const express = require('express');
const app = express();
app.use (express.static(__dirname + '/dist/adopt-me'));

app.get('/*', function(req,res){
    res.sendFile("index.html",{
        root: __dirname + '/dist/adopt-me'
    });
});

app.listen(process.env.PORT || 8080);