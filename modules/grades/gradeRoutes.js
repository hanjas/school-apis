
module.exports = (app, console) => {
    const utils = require('../utils/utils');
    const grade = require('./grade');

    app.post('/api/grade/getall', utils.simplifiedCallback(grade.getAll));
    app.post('/api/grade/create', utils.simplifiedCallback(grade.create));
    app.post('/api/grade/update', utils.simplifiedCallback(grade.rename));
    app.post('/api/grade/delete', utils.simplifiedCallback(grade.delete));

};