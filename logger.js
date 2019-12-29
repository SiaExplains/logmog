/*
    logmog
*/
const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter {
    constructor(useDateTimeFormatter = false, logPath = __dirname) {
        super();
        this.useDateTimeFormatter = useDateTimeFormatter;
        this.logPath = logPath;
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
        fs.appendFile(path.join(this.logPath, 'file.log'), msg, err => {
            if (err) {
                this.clog(`Error in writing log into file! : ${err}`);
            } else {
                // this.clog('Log successfully wrote into file!');
            }
        });
    }

    cflog(msg) {
        this.flog(msg);
        this.clog(msg);
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

    cline(charPattern = '-', count = 20) {
        this.clog(this.line(charPattern, count));
    }
    cfline(charPattern = '-', count = 20) {
        this.cline(charPattern, count);
        this.fline(charPattern, count);
    }

    fline(charPattern = '-', count = 20) {
        this.flog(this.line(charPattern, count));
    }

    line(charPattern = '-', count = 20) {
        if (charPattern.length === 1) {
            return charPattern.repeat(count);
        }
        if (charPattern.length === 2) {
            if (this.isLineChar(charPattern[0])) {
                return charPattern[0].repeat(count) + charPattern[1];
            } else {
                return charPattern[0] + charPattern[1].repeat(count);
            }
        } else if (charPattern.length === 3) {
            return (
                charPattern[0] + charPattern[1].repeat(count) + charPattern[2]
            );
        }
    }

    isLineChar(chr) {
        switch (chr) {
            case '-':
            case '_':
            case '=':
                return true;
            default:
                return false;
        }
    }
}

function logmid(level = 'low') {
    return function(req, res, next) {
        let logmog = new Logger(true);
        let httplog = '';
        if (level === 'low') {
            logmog.cflog(
                `*** Recived a request, ${req.method}: (${req.url}) ***`
            );
        } else if (level === 'normal') {
            logmog.cflog(
                `*** Recived a request | IP: ${req.ip}, ${req.method}: (${req.url})  ***`
            );
        }

        next();
    };
}

module.exports = {
    Logger,
    logmid
};
