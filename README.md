Here is the Agrifin-Tech Setup procedure.
It is not complicated at all. Just make sure to setup the gis extensions.

Install NodeJS
https://nodejs.org/en/download
- select the windows installer (.msi)

Install PostgreSQL
https://www.postgresql.org/download/
- select windows -> v18 (64bit)
- start the "Application Stack Builder" to setup postgis extention
    - enable the spatial component
    - select all packages
    - set the name of spatial database (gis)
- setup the schema information
    - open pgAdmin4
    - open each schema file (.sql) and execute one by one in the sequence of their names.

Install Server
> npm i express pg bcryptjs jsonwebtoken cookie-parser dotenv

Install Dependencies
> npm i nodemon -D

Customization:
- To use ES6 syntax, change the "type" in package.json from "commonjs" to "module".
- To start server, change the "test" of "scripts" in package.json from "test" to "start" and set the value as "node server.js", and change the "main" value from "index.js" to "server.js" as well.
- For development phase, change the package.json and add a key "dev" with value "nodemon server.js" in "scripts" to restart the server automatically when changes in code are detected.
- To start the server execute: "npm run dev"
