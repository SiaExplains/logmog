const { Logger, StringPipe } = require('./logger');

let runDemo = () => {
    let sampleArray = [89, 12, 456, 33];
    let sampleString = 'Hello, World!';
    let logmog = new Logger(true);

    logmog.clog(sampleString);
    logmog.flog(sampleString);
    logmog.tlog(sampleArray);
    logmog.cline('_');
    logmog.cline('=');
    logmog.cline('=+');
    logmog.cline('-+');
    logmog.cline('_/');
    logmog.cline('_/', 40);
    logmog.cline('+-+', 50);
    logmog.cline('+=/', 25);
    logmog.clog(logmog.line('*', 40));
};

runDemo();

module.exports = {
    runDemo
};
