const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://Fathimanizar:fathima@testcluster.cv1hp4e.mongodb.net/libmstdb?retryWrites=true&w=majority")
 .then(()=>{
console.log("DB connected");
 })
 .catch(err=>console.log(err));

 let mongoSchema= mongoose.Schema;

 const LibSchema = new mongoSchema({
    bookname:String,
    author:String,
    language:String,
    genre:String,
    booknum:Number

 })

 var libModel= mongoose.model("book",LibSchema);

 module.exports = libModel;