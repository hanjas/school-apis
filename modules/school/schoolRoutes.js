
module.exports = (app, console) => {
    const utils = require('../utils/utils');
    const school = require('./school');

    app.get('/api/school/getall', utils.simplifiedCallback(school.getAllSchools));
    app.post('/api/school/create', utils.simplifiedCallback(school.createSchool));
    app.post('/api/school/update', utils.simplifiedCallback(school.renameSchool));
    app.post('/api/school/delete', utils.simplifiedCallback(school.deleteSchool));

};