const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/googlebooks')

mongoose.connection.once('open', function(){
    console.log("connection made")
}).on('error', function(error){
    console.log(error)
})