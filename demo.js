const { Logger } = require('./logger');

let runDemo = () => {
    let sampleArray = [89, 12, 456, 33];
    let sampleString = 'Hello, World!';
    let logmog = new Logger(true);

    logmog.clog(sampleString);
    logmog.flog(sampleString);
    logmog.tlog(sampleArray);
};

runDemo();

module.exports = {
    runDemo
};
