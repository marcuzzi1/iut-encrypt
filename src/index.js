'use strict';

const { bcrypt } = require('bcryptjs');

exports.hello = function() {
    return 'Hello World!';
}

exports.encrypt = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

exports.compare = async function(password, receivedPassword) {
    return await bcrypt.compare(password, receivedPassword);
}