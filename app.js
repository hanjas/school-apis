const bodyParser = require('body-parser');
const express = require('express');
const sqlutils = require('mysql-utils-js');

const PORT = 12345;

let app = express();
app.use(bodyParser.json())

const config = {
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'school',
    connectionLimit: 5
};
sqlutils.createConnectionPool(config);

require('./modules/school/schoolRoutes')(app, console);
require('./modules/grades/gradeRoutes')(app, console);
require('./modules/sections/sectionRoutes')(app, console);
require('./modules/staff/staffRoutes')(app, console);
require('./modules/students/studentRoutes')(app, console);

app.listen(PORT, () => {
    console.log('app is listening on the port', PORT);
});