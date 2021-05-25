const sqlutils = require('mysql-utils-js');

exports.getAllSchools = (req, callback) => {
    const query = 'SELECT * FROM school';
    const params = [];
    sqlutils.connectAndRun(callback, 
        sqlutils.queryErrSucc(query, params, 
            (err) => {
                callback(err, null, 'error happened'); 
            }, (data) => {
                callback(null, data, 'success');
            }
        )
    );
};

exports.createSchool = (req, callback) => {
    const {schoolname} = req.body;
    const query = 'INSERT INTO school (name) VALUES (?)';
    const params = [schoolname];
    sqlutils.connectAndRun(callback, 
        sqlutils.queryErrSucc(query, params, 
            (err) => {
                callback(err, null, 'error happened'); 
            }, (data) => {
                callback(null, data, 'success');
            }
        )
    );
};

exports.renameSchool = (req, callback) => {
    const {schoolid, schoolname} = req.body;
    const query = 'UPDATE school SET name = ? WHERE id = ?';
    const params = [schoolname, schoolid];
    sqlutils.connectAndRun(callback, 
        sqlutils.queryErrSucc(query, params, 
            (err) => {
                callback(err, null, 'error happened'); 
            }, (data) => {
                callback(null, data, 'success');
            }
        )
    );
};

exports.deleteSchool = (req, callback) => {
    const {schoolid} = req.body;
    const query = 'DELETE FROM school WHERE id = ?';
    const params = [schoolid];
    sqlutils.connectAndRun(callback, 
        sqlutils.queryErrSucc(query, params, 
            (err) => {
                callback(err, null, 'error happened'); 
            }, (data) => {
                callback(null, data, 'success');
            }
        )
    );
};