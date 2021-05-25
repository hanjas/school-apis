
module.exports = (app, console) => {
    const utils = require('../utils/utils');
    const student = require('./student');

    app.get('/api/school/getall', utils.simplifiedCallback(student.getAllSchools));
    app.post('/api/school/create', utils.simplifiedCallback(student.createSchool));
    app.post('/api/school/update', utils.simplifiedCallback(student.renameSchool));
    app.post('/api/school/delete', utils.simplifiedCallback(student.deleteSchool));

};