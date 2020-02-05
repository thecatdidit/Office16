"use strict";

const https = require("https");

const getFFN = "c4a7726f-06ea-48e2-a13a-9d78849eb706";
const getBuild = "16.0.11328.20526";

function showFFNAndBuild(getFFN, getBuild) {
    console.log(`Dogfood_DCEXT     : ${getFFN} : ${getBuild}`);
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
