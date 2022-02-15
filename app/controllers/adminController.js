var path = require('path');
//const middleware = require('../../middleware/middle.auth');

module.exports = {
    index: function(req, res) {
        res.render(path.join(__dirname, '../views/admin/login.hbs'));
    },
    login: function(req, res) {

    }
}