const mongoose = require("mongoose");

const connectDB =(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB is connected successfully !!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;