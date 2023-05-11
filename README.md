# AngelHack

SANITY CHECK 11/12 May
It is 4.53pm and i have started working on this
It is 5.30pm and i have just restored the linking between pages,,, this was simply done by adding router.get methods into index.js hehe
It is 5.49pm and im learning how to store secrets securely
It is 10.45pm and i just figured out how to connect to the database
It is 10.54pm and i just got the authentication to work!! :D
It is 11.34pm and i just configured the sql table to accommodate SHA256 salts
It is 12.09am and i just managed to get registration to insert entries into the cloud sql server :D
It is 12.36am and logging in and registration breaks the website... :(

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
3. login breaks website because "salt" received from cloud is of type binary(32), and not string.
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
