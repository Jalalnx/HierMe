const db = require("../models/database")

module.exports.isAuthorized = function(req, res, next) {

        // db.user.findById(req.session.userId).exec(function(error, user) {
        //     if (error) {
        //         return next(error);
        //     } else {
        //         if (user === null) {
        //             var err = new Error('Not authorized! Go back!');
        //             err.status = 401;
        //             return next(err);
        //         } else {
        //             return next();
        //         }
        //     }
        // });
        let jwtSecretKey = "secret";
        try {
            const token = req.header(tokenHeaderKey);

            const verified = jwt.verify(token, jwtSecretKey);
            if (verified) {
                return next();
            } else {
                // Access Denied
                return res.status(401).send(error);
            }
        } catch (error) {
            // Access Denied
            return res.status(401).send(error);
        }
    }
    // https: //www.section.io/engineering-education/introduction-to-sequalize-orm-for-nodejs/