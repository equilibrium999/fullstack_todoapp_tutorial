var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${configValues.username}:${configValues.password}@ds259175.mlab.com:59175/node-todos-tri`;
    }
};