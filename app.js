const express = require("express");
const mongoose= require('mongoose')
const url = "mongodb://localhost/CRUD"

const app = express();

const PORT = 5000;

mongoose.connect(url, {useNewUrlParser : true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected...")
})

const userRoutes= require('./routers/users')
app.use(express.json())
app.use('/', userRoutes);

app.listen(PORT, () => console.log(`server is running on port: http://localhost:${PORT}`));
