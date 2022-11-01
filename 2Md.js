// To see dbs


// entering kart
use wasifKart

// to see collections
show collections

// to see all items 
db.items.find()

// use wasifKart
db.items.insertOne({name: "Sumsung 30s", price: 220000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([{name: "Sumsung 30s", price: 220000, rating: 4.5, qty: 233, sold: 98}, {name: "Realme", price: 45452, rating: 5, qty: 32, sold: 234}])


// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})

// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000} })
db.items.find({rating: {$gt: 3.5}, price:{$gt: 114000} })


// Or operator
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}]
})

// Deleting items from the Mongo Database

// For only one items
db.items.deleteOne({price: 22000})
// for more than one items
db.items.deleteMany({price: 22000})

// CRUD - Create Read Update or Delete by database operation

// 84.js

// use newdb to add newdb as collections

// To update an existing data for one only
db.items.updateOne({name: "Sumsung 30s"}, {$set: "price: 4"})

// To update an existing data for one only
db.items.updateMany({name: "Sumsung 30s"}, {$set: "price: 4"})