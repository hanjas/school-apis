
module.exports = (app, console) => {
    const utils = require('../utils/utils');
    const staff = require('./staff');

    app.get('/api/school/getall', utils.simplifiedCallback(staff.getAllSchools));
    app.post('/api/school/create', utils.simplifiedCallback(staff.createSchool));
    app.post('/api/school/update', utils.simplifiedCallback(staff.renameSchool));
    app.post('/api/school/delete', utils.simplifiedCallback(staff.deleteSchool));

};