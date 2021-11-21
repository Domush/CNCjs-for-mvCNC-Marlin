/**
 * errlog:
 *
 *   Write request and error information to stderr, loggly, or similar services.
 *
 * Examples:
 *
 *   app.use(middleware.errlog())
 *
 * @return {Function}
 * @api public
 */

const errlog = () => (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

export default errlog;
