/*
    logmog
*/
const fs = require('fs');

// Logging into File
let flog = msg => {
    fs.writeFile('file.log', msg, err => {
        if (err) {
            clog('Error in writing log into file!');
        } else {
            clog('Log successfully wrote into file!');
        }
    });
};

// Logging into Console
let clog = msg => {
    console.log(msg);
};

module.exports = {
    clog,
    flog
};
