
module.exports = (app, console) => {
    const utils = require('../utils/utils');
    const section = require('./section');

    app.get('/api/school/getall', utils.simplifiedCallback(section.getAllSchools));
    app.post('/api/school/create', utils.simplifiedCallback(section.createSchool));
    app.post('/api/school/update', utils.simplifiedCallback(section.renameSchool));
    app.post('/api/school/delete', utils.simplifiedCallback(section.deleteSchool));

};