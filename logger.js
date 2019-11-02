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

    formattedDateTimeMiddleware(msg) {
        let date = new Date();
        let result = `[${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] : `;

        msg = this.useDateTimeFormatter ? result + msg : msg;
        return msg;
    }

    log(message) {
        message = this.formattedDateTimeMiddleware(message);
        console.log(message);
        this.emit('MessageLogger', { message: 'Message has been logged.' });
    }

    // Logging into File
    flog(msg) {
        msg = this.formattedDateTimeMiddleware(msg);
        msg += '\r\n';
        fs.appendFile('file.log', msg, err => {
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
        msg = this.formattedDateTimeMiddleware(msg);
        console.log(msg);
    }
}

module.exports = {
    Logger
};
