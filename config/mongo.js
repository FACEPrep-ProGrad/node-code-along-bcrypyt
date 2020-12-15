const mongoose = require('mongoose');

// connect to database
mongoose.connect("mongodb+srv://Naveen132895:Naveenhoney123@prograds.veqfe.mongodb.net/schoogle?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(ok=>console.log("connected to mongodb"))
.catch(err=> console.log("mongodb connection error",err));
