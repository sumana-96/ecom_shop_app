const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { email: user.email, id: user.id },
    "jwtsecretplschange"
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  // const accessToken = req.cookies["access-token"];

  // if (!accessToken)
  //   return res.status(400).json({ error: "User not Authenticated!" });
  // try {
  //   const validateToken = verify(accessToken, "jwtsecretplschange");
  //   if (validateToken) {
  //     req.authenticated = true;
      return next();
  //   }
  // } catch (err) {
  //   return res.status(500).json({ error: err });
  // }
};
module.exports = { createTokens, validateToken };
