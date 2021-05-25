
exports.succReply = (data, msg, res) => {
    res.status(200).send({status:'SUCCESS', data: data, err: null, msg: msg});
};

exports.failReply = (data, msg, res) => {
    res.status(400).send({status:'FAILURE', err: data, data: null, msg: msg});
};

exports.forbidReply = (data, msg, res) => {
    res.status(403).send({status:'FAILURE', err: data, data: null, msg: msg});
};

exports.authFailure = (msg, res) => {
    res.status(401).send({status:'FAILURE', data: null, err: {}, msg: msg});
};

exports.logBodyFunc = (logger) => (req, _res, next) => {
    logger.trace(req.body);
    next();
};


exports.generalCallback = (res) => {
    return (err, data, msg) => {
        if (err){
            exports.failReply(err, msg, res);
        }else{
            exports.succReply(data, msg, res);
        }
    };
};

exports.simplifiedCallback = (fn) => (req, res, next) => fn(req, this.generalCallback(res), next);
