const normalize = (str) =>
  str.replace(/\/+/g, '/').replace(/\/\?/g, '?').replaceAll('\\/#', '#').replaceAll(':\\/', '://');

const urljoin = function (...args) {
  let joined = [].slice.call(args, 0).join('/');
  return normalize(joined);
};

export default urljoin;
