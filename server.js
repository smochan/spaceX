const express = require("express");
const ejs = require("ejs");
const https = require("https");
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const url = "https://api.spaceXdata.com/v3/launches?limit=100";
app.get("/", async function(req, res){

    const {data} = await axios.get(url)
    // console.log(data);
    const missions = [];
    data.forEach(function(d){
        let mission = {
            src: d.links.mission_patch,
            missionName: d.mission_name,
            flightNumber: d.flight_number,
            missionId: d.mission_id,
            launchYear: d.launch_year,
            successfulLaunch: d.launch_success,
            landingSuccess: d.rocket.first_stage.cores[0].land_success
        };
        missions.push(mission);
    })
    const cards = missions.length;

    res.render("index", {
        cards: cards,
        missions: missions
    });
    
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000.");
})