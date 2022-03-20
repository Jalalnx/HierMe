const jwt = require("jsonwebtoken");
const User = require("../models/User")
const config = process.Configuration;

const verifyToken = async(req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "A token is required for authentication"
        });
    }
    try {
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
        const decodedUser = await User.findById({
            id: decoded.user_id
        })
        if (!decodedUser) return res.status(401).json({
            success: false,
            msg: "Invalid Token"
        })
        req.user = decoded;
        req.requester_id = decoded.user_id;
    } catch (err) {
        return res.status(401).json({
            success: false,
            msg: "Invalid Token"
        });
    }
    return next();
};
module.exports = verifyToken;