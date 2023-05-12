# AngelHack

SANITY CHECK 12 May
It is 2.57pm and I have just started work
It is 5.08pm and I just got logins to work by changing the SQL data types :D

IMPT SQL COMMANDS
USE {database name}
SHOW TABLES
SELECT \* FROM {table}
SHOW COLUMNS in {table}

Current issues:

1. Top navbar needs left padding
   Soln: add bootstrap class
2. registration correctly enters salt and hashed password into sql server, but because i haven't used session, req.login doesn't work.
   after registering, website is broken (auth.js line 118)
   Soln: get my shit tgt and link mysql with session
3. login breaks website because "salt" received from cloud is of type undefined, and not string.
   TypeError [ERR_INVALID_ARG_TYPE]: The "salt" argument must be of type string or an instance of ArrayBuffer, Buffer, TypedArray, or DataView.
   Soln: Modify authentication methods
4. the username input in login.ejs and registration.ejs causes previously entered and submitted text to be saved.
   Soln: TODO

USEFUL LINKS
https://getbootstrap.com/docs/4.1/getting-started/introduction/
https://www.passportjs.org/
https://expressjs.com/en/resources/middleware/session.html
https://ejs.co/
https://expressjs.com/
https://nodejs.org/api/crypto.html
https://expressjs.com/en/guide/routing.html
