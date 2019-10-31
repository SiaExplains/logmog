/*
    logmog
*/
const EventEmitter = require('events');
const fs = require('fs');

class Logger extends EventEmitter {
    constructor(useDateTimeFormatter = false) {
        super();
        this.useDateTimeFormatter = useDateTimeFormatter;
    }

    getFormattedDateTime() {
        let date = new Date();
        let result = `[${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] : `;
        return result;
    }

    log(message) {
        console.log(message);
        this.emit('MessageLogger', { message: 'Message has been logged.' });
    }

    // Logging into File
    flog(msg) {
        fs.writeFile('file.log', msg, err => {
            if (err) {
                this.clog('Error in writing log into file!');
            } else {
                this.clog('Log successfully wrote into file!');
            }
        });
    }

    // log array as table into console!
    tlog(arr) {
        console.table(arr);
    }

    // Logging into Console
    clog(msg) {
        msg = this.useDateTimeFormatter
            ? this.getFormattedDateTime() + msg
            : msg;
        console.log(msg);
    }
}

module.exports = {
    Logger
};
