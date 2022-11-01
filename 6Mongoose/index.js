// Mongodb - Database
// Mongo - client
// Mongoose ek library h, on top of mongodb. It make mongodb use easily
// getting-started.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wasifKart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
//   console.log("We are connected bro..");
// });

// Schema tolds what type of data you want to store
// Schema is basically ek layer h mongoose ki jo layer h on top of mongodb jo ki aplog ki validation ko ussi k sath sath kya data ja raha h Ussi sabko control krti h
var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
        // console.log(greeting);
}

// Making a model
var Kitten = mongoose.model('wasifkitty', kittySchema); // it will make a collection after saving as wasifkittens as plural

// Making an object
var wasifKitty = new Kitten({ name: 'wasifKitty'});
var wasifKitty2 = new Kitten({ name: 'wasifKitty2'});
console.log(wasifKitty.name);
wasifKitty.speak();

// after making a schema , model and object we have to tell the mongo to save it.

// .Save method will take One function and two arguments first will be error and the send will be object

wasifKitty.save(function (err, wasifkitty){
    if(err) return console.error(err);
    wasifkitty.speak();
})

wasifKitty2.save(function (err, wasifkitty){
    if(err) return console.error(err);
    // wasifkitty.speak();
});

Kitten.find({name: "wasifKitty2"}, function (err, kittens){
    if(err) return console.error(err);
    console.log(kittens);
});


// In this commands are run first and after connecting the functions are called