# Change Logs

## Version 1.1.6

-   accepting log-directory as a parameter from constructor

## Version 1.1.5

-   remove some extra console message while logging into file (`flog()`)
-   add `logmid()` that is a simple http middle-ware for logging via `expressjs`

## Version 1.1.4

-   add `cfline()` method (print a line into file and console at the same time)

## Version 1.1.3

-   add `cflog()` method (logging into file and console at the same time)

## Version 1.1.2

-   add line function to draw a custom line into console/file/etc.
-   add `line()` , `cline()` and `fline()`

## Version 1.1.1

-   change `flog()` functionallity: `fileWrite()` method to `appendFile()`
-   apply `formattedDateTimeMiddleware()` to all logging methods.

## Version 1.1.0

-   change functional structure to class-based
-   add n optional `useDateTimeFormatter` as contructor params.

## Version 1.0.0

-   write log into console
-   write log arrays as a table into console
-   write log into file (a file with fixed name)
