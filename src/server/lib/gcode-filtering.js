export const stripComments = (line) => {
  line.replace(/\s*\(.*?\)\s*/g, '');
  line = line.split(';')[0];
  line = line.split('#')[0];
  return line.trim();
};
