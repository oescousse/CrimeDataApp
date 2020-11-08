const express = require('express');
const app = express();
const axios = require('axios');
const ddbGeo = require('dynamodb-geo');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const properties = require('./properties.json');
const crimes = require('./crimes.json')
app.use(bodyParser.json({ extended: true }));
require('dotenv').config()



app.post('/changeZip', function(req, res) {

    //Log the request parameters
    console.log(req.body)
    let zip = req.body.postal_code;

    axios.get('https://www.zipcodeapi.com/rest/info.json/' + zip)
    .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
});

app.post('/listingsQuery', function(req, res){

    var postal_code = req.body.postal_code;

    var unirest = require("unirest");

    var req = unirest("GET", "https://realtor.p.rapidapi.com/properties/v2/list-for-sale");
    
    req.query({
        "sort": "relevance",
        "limit": "200",
        "offset": "0",
        "postal_code": postal_code //94114 for testing

    });
    
    req.headers({
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "",
        "useQueryString": true
    });
    
    
    req.end(function (realtorRes) {
        if (realtorRes.error) res.status(400);
        res.send(JSON.stringify(realtorRes.body));
    });
});

app.post('/radiusQuery', function(req, res){
    var lat = parseFloat(req.body.lat);
    var lng = parseFloat(req.body.lng);
    // Set up AWS
    AWS.config.update({
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,
        region: 'us-east-1'
    });

    //connect to cloud db
    const ddb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('https://dynamodb.us-east-1.amazonaws.com') });

    // Configuration for a new instance of a GeoDataManager. Each GeoDataManager instance represents a table
    const config = new ddbGeo.GeoDataManagerConfiguration(ddb, 'CrimeData');

    // Instantiate the table manager
    const tableManager = new ddbGeo.GeoDataManager(config);

    console.log('Querying by radius. 1 mile from ', lat, lng);
    tableManager.queryRadius({
        RadiusInMeter: 1600.34,
        CenterPoint: {
            latitude: lat,
            longitude: lng
        }
    }).then(results => {
        res.status(200).send(JSON.stringify(results));
    })
    .catch(res.status(400))
});

app.listen(3001,()=> {
    console.log(`Example web server is listening on localhost:3001`)
})

