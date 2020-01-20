"use strict";

const https = require("https");

const getFFN = "5462eee5-1e97-495b-9370-853cd873bb07";
const getBuild = "16.0.12430.20120";

function showFFNAndBuild(getFFN, getBuild) {
    console.log(`Microsoft_CC      : ${getFFN} : ${getBuild}`);
}

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            showFFNAndBuild(getFFN, getBuild);
        } else {
            showFFNAndBuild(getFFN, getBuild);
        }
    });
}).on("error", () => {
    showFFNAndBuild(getFFN, getBuild);
});
