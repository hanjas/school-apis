const sqlutils = require('mysql-utils-js');

exports.getAll = (req, callback) => {
    const query = 'SELECT * FROM grades';
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

exports.create = (req, callback) => {
    const {name} = req.body;
    const query = 'INSERT INTO grades (name) VALUES (?)';
    const params = [name];
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

exports.rename = (req, callback) => {
    const {id, name} = req.body;
    const query = 'UPDATE grade SET name = ? WHERE id = ?';
    const params = [id, name];
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

exports.delete = (req, callback) => {
    const {id} = req.body;
    const query = 'DELETE FROM grade WHERE id = ?';
    const params = [id];
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