// auth.js
const auth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token === "mysecrettoken") {
    next(); // allow request to continue
  } else {
    res.status(401).json({ message: "Unauthorized access. Invalid token!" });
  }
};

export default auth;
