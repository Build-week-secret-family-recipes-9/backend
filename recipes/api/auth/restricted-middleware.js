const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/secrets.js')

module.exports = (req, res, next) => {
  const tkn = req.headers?.authorization?.split(" ")[1];
  // const tkn1 = req.headers.authorization && req.headers.authorization.split(" ")[1];
  // const token = req.headers.authorization
  if (tkn) {
    jwt.verify(tkn, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json('we wantz VALID token')
      } else {
        console.log(req);
        req.decodedJwt = decoded;
        next()
      }
    })
  } else {
    res.status(401).json('we wantz token')
  }
};

// const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config/secrets");

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization ?
//   req.headers.authorization.split(' ')[1] :
//   '';

//   if (token) {
//     jwt.verify(token, jwtSecret, (err, decodedToken) => {
//       if (err) {
//         res.status(401).json({ message: "token invalid" });
//       } else {
//         req.token = decodedToken;
//         next();
//       }
//     });
//   } else {
//     res.status(400).json({ message: "token required" });
//   }
// };
