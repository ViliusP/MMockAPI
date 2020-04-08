var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/PikasGPSReports/PikasGPSWebService.ashx", async(req, res, next) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (Math.random() >= 0.1) {
        res.json({
            status: "OK",
            transport: "autobusai",
            vehicle_id: "1645",
            date: "2018-11-26",
            time: "05:04:38",
            request_time: new Date.now(),
            route: {
                number: "100",
                run: "100-02"
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
    } else if (Math.random() >= 0.5) {
        res.json({

            status: "NODATA",
            transport: "autobusai",
            vehicle_id: "1645",
            date: "2018-11-26",
            time: "05:04:38",
            request_time: new Date.now(),
            route: null,
            stop: null

        })
    } else {
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

});