// _db.js
const Path = require('path');
const glob = require('glob');
const apiFiles = glob.sync(`${Path.resolve(__dirname, './')}/**/[!_]*.js`, {
  nodir: true,
});
const data = {};
apiFiles.forEach(filePath => {
  // eslint-disable-next-line global-require
  const api = require(filePath);
  let [, url] = filePath.split('src/');
  url =
    url.slice(url.length - 9) === '/index.js'
      ? url.slice(0, url.length - 9) // remove /index.js
      : url.slice(0, url.length - 3); // remove .js
  data[url.replace(/\//g, '-')] = api;
});

module.exports = () => data;
