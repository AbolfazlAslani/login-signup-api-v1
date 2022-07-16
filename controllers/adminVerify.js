const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(403).json({ msg: "Access Denied!" });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.username = verified
        console.log(req.username);
    } catch (err) {
        res.status(400).json({ errMsg: err })
    }

}