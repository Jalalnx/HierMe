module.exports.isAuthorized = function(req, res, next) {

        User.findById(req.session.userId).exec(function(error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 401;
                    return next(err);
                } else {
                    return next();
                }
            }
        });
    }
    // https: //www.section.io/engineering-education/introduction-to-sequalize-orm-for-nodejs/