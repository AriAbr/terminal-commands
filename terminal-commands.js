const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err,files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (filename) => {
  fs.writeFile(filename, '', 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports.mkdir = (pathAndName) => {
  fs.mkdir(pathAndName, (err) => {
    if (err) throw err;
  });
};
