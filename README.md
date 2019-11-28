# Logmog

Logmog is an open-source javascript logging library which is suitable for all kinds of javascript apps, such as reactjs, nodejs, electron, etc.

Inspired by:

-   [winston](http://npmjs.org/winston)
-   [morgan <expressjs middleware>](http://npmjs.org/express)

## Final stable version

-   Verion 1.1.5 is final version
    to check other version feature-list: ([changelogs.md](changelogs.md))

## Run Demo

To run and test logog use these following commands:

<pre><code>nodemon demo.js</code></pre>

or

<pre><code>node demo.js</code></pre>

# Logging as Middleware

You can use logmog as a middleware in `expressjs`:

<code>

const express = require('<span style="color:red">express</span>');
const { Logger, logmid } = require('<span style="color:red">logmog</span>');

let logmog = new Logger(true);
let app = express();
app.use(logmid('low'));

</code>

Contcat information:

+98-9120229077

[logmog.copene.com](https://siaqnbr.com)
[codewithsia.com](https://codewithsia.com)
[siaqbr.com](https://siaqnbr.com)
