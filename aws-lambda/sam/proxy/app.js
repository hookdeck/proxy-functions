var { proxy } = require('handler');

exports.proxy = async (event) => {
    return proxy(event);
};
