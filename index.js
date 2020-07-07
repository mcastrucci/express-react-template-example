const express = require("express");
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req,res) => {
    res.render('index', { name: 'maximiliano' })
})

app.listen(3000, ()=>{console.log("server is running")});