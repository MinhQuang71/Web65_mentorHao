import express from "express";
import { restauRentCollection } from "../config/db/index.js";

const restaurentRouter = express.Router();

restaurentRouter.get('/1', async(req, res) => {
    const data = await restauRentCollection.find({}).toArray();
    res.json(data)
});

restaurentRouter.get('/2', async(req, res) => {
    const data = await restauRentCollection.find({}).project({
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1,
    }).toArray();
    res.json(data)
});

restaurentRouter.get('/3', async(req, res) => {
    const data = await restauRentCollection.find({}).project({
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1,
        _id: 0
    }).toArray();
    res.json(data)
});

restaurentRouter.get('/4', async(req, res) => {
    const data = await restauRentCollection.find({}).project({
        restaurant_id: 1,
        zipcode: 1,
        name: 1,
        borough: 1,
        cuisine: 1,
        _id: 0
    }).toArray();
    res.json(data)
});

restaurentRouter.get('/5', async(req, res) => {
    const data = await restauRentCollection.find({borough: "Bronx"}).toArray();
    res.json(data)
});

restaurentRouter.get('/6', async(req, res) => {
    const data = await restauRentCollection.find({borough: "Bronx"}).limit(5).toArray();
    res.json(data)
});

restaurentRouter.get('/7', async(req, res) => {
    const data = await restauRentCollection.find({borough: "Bronx"}).skip(5).limit(5).toArray();
    res.json(data)
});

restaurentRouter.get('/8', async(req, res) => {
    const data = await restauRentCollection.find({grades: {$elemMatch: {score: {$gt: 90}}}}).toArray();
    res.json(data)
});

restaurentRouter.get('/9', async(req, res) => {
    const data = await restauRentCollection.find({grades: {$elemMatch: {score: {$gt: 80, $lt:100 }}}}).toArray();
    res.json(data)
});

restaurentRouter.get('/10', async(req, res) => {
    const data = await restauRentCollection.find({"address.coord": {$lt: -95.754168}}).toArray();
    res.json(data)
});

restaurentRouter.get('/11', async(req, res) => {
    const data = await restauRentCollection.find({$and:
        [
           {"cuisine" : {$ne :"American "}},
           {"grades.score" : {$gt : 70}},
           {"address.coord" : {$lt : -65.754168}}
        ]
    }).toArray();
    res.json(data)
});

restaurentRouter.get('/12', async(req, res) => {
    const data = await restauRentCollection.find({
        "cuisine" : {$ne : "American "},
        "grades.score" :{$gt: 70},
        "address.coord" : {$lt : -65.754168}
       }).toArray();
    res.json(data)
});

restaurentRouter.get('/13', async(req, res) => {
    const data = await restauRentCollection.find({
        "cuisine" : {$ne : "American"},
        "grades.grade" :"A",
        "borough": {$ne : "Brooklyn"}
        }).sort({"cuisine":-1}).toArray();
    res.json(data)
});

restaurentRouter.get('/14', async(req, res) => {
    const data = await restauRentCollection.find({name: {$regex: '^Wil'}},
    {
    "restaurant_id" : 1,
    "name":1,"borough":1,
    "cuisine" :1
    }).toArray();
    res.json(data)
});





export default restaurentRouter;