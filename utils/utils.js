var fs = require("fs");

const capitalize = s => {
  let c = s[0].toUpperCase() + s.slice(1);
  return c;
};

const getModulesFolders = () => {
  let path = "./app/modules";
  let str = fs.readdirSync(path).filter(function(file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
  if (str.length < 1) {
    console.log("Please first try to create a module with 'rngen mod'");
    return;
  } else {
    return str;
  }
};

const writeInFile = (path, template) => {
  fs.writeFile(path, template, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

module.exports = { capitalize, getModulesFolders, writeInFile };
