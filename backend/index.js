const express = require('express');
const app = express();
var AWS = require("aws-sdk");
const bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));

AWS.config.update({
  region: "us-east-1",
  //endpoint: "http://localhost:3000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "CrimeData";

app.post('/radiusQuery', function(req, res, next){
    var lat = parseFloat(req.body.lat);
    var long = parseFloat(req.body.long);
    const ddbGeo = require('dynamodb-geo');
    const AWS = require('aws-sdk');
    require('dotenv').config()

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

    console.log('Querying by radius. 1 mile from ', lat, long);
    tableManager.queryRadius({
        RadiusInMeter: 1600.34,
        CenterPoint: {
            latitude: lat,
            longitude: long
        }
    }).then(results => {
        res.status(200).send(JSON.stringify(results));
    })
    .catch(res.status(400))
});

app.listen(3001,()=> {
    console.log(`Example web server is listening on localhost:3001`)
})

