var { proxy } = require('../common/handler');

module.exports.proxy = async (event) => {
  return proxy(event);
}