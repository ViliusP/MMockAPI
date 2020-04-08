var moment = require('moment');
const bodyParser = require('body-parser');
const journeysRoutes = require("./journeyRoutes.json")
var express = require("express");
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


app.get("/PikasGPSReports/PikasGPSWebService.ashx", async(req, res, next) => {
    await new Promise(resolve => setTimeout(resolve, 1000 * 1)); //Lag simulation (1 second)


    let vehicleid = req.query.vehicleid
    let transport = req.query.transport
    let time = req.query.time
    let date = req.query.date

    if (vehicleid === undefined || transport === undefined || time === undefined || date === undefined || (vehicleid !== "troleibusai" && vehicleid !=="autobusai")) {
        res.status(400)
        res.send(JSON.stringify({}))
        return next()
    }
    console.log("nx?")
        if (Math.random() >= 0.1) { //90% of probability that API will response with data (status: OK)
        route = journeysRoutes[getRandomInt(journeysRoutes.length)].route
        res.json({
            status: "OK",
            transport: vehicle,
            vehicle_id: transport,
            date: date,
            time: time,
            request_time: moment().format("YYYY-MM-DD HH:mm:ss"),
            route: {
                number: route,
                run: route + "-02"
            },
            stop: {
                stop_id: "2858",
                stop_num: "578",
                stop_name: "Kęstučio g.",
                stop_lat: 54.89589,
                stop_lng: 23.92523,
                stop_time: "10:28:45",
                delay: "00:42",
                time_since_stop: "01:26"
            }

        })
    } else if (Math.random() >= 0.5) { //5% of probability that API will response with NODATA status
        res.json({

            status: "NODATA",
            transport: vehicle,
            vehicle_id: transport,
            date: date,
            time: time,
            request_time: moment().format("YYYY-MM-DD HH:mm:ss"),
            route: null,
            stop: null

        })
    } else { //5% of probability that API will respond in 10 seconds
        await new Promise(resolve => setTimeout(resolve, 1000 * 10));
    }

});

//return random number [0, max]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}