// logger.js
const logger = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next(); // move to the next middleware or route
};

export default logger;
