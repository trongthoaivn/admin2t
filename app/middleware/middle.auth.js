var path = require('path');
const db = require('../../config/database');
const User = db.User;
const Content = db.Content;


module.exports = {
    checkAuth: function(req, res, next) {
        if (req.session.isLoggedIn == 0 || req.session.isLoggedIn == undefined) {
            var username = req.body.username;
            var password = req.body.password;
            User.findOne({ where: { UserName: username, Password: password } }).then(user => {
                if (user) {
                    req.session.isLoggedIn = 1;
                    req.session.user = user;
                    next();
                } else {
                    res.send('Login failed');
                }
            }).catch(err => {
                res.send(err);
            })
        } else {
            res.redirect('/admin/login');
        }
    }
}