const fs = require("fs");
const { capitalize, writeInFile } = require("./utils/utils");
const { mainFolders, moduleFiles, moduleFolders } = require("./data/main");
const {
  reactClass,
  reactIndex,
  reactStyles
} = require("./utils/codeTemplates");

const toppath = "./";
const apppath = "./app";
const modulespath = apppath + "/modules/";

/////////////////////////////////////////
// NEW STRUCTURE
const addStructure = () => {
  if (!fs.existsSync(apppath)) {
    fs.mkdirSync(apppath, 0744);
  }
  mainFolders.forEach(createSubFolders);
  console.log("STRUCTURE CREATED");
};
const createSubFolders = (item, index) => {
  let tmpDir = apppath + "/";
  let folderName = item.toLowerCase();
  let subFolder = tmpDir + folderName;
  if (!fs.existsSync(subFolder)) {
    fs.mkdirSync(subFolder, 0744);
  } else {
    console.log("ERROR: Try to empty your project and then try again.");
    return;
  }
};

/////////////////////////////////////////
// NEW MODULE
const addModule = name => {
  let fname = name.name;
  var fnameLow = fname.toLowerCase();
  var tmp = modulespath + fnameLow;

  if (!fs.existsSync(modulespath)) {
    console.log("Please run first: rngen new");
    return;
  }

  if (!fs.existsSync(tmp)) {
    fs.mkdirSync(tmp, 0744);
    createModuleContent(fname);
  } else {
    console.log("Module Name already used. Please try another one");
    return;
  }
};

const createModuleContent = fname => {
  for (let i = 0; i < moduleFiles.length; i++) {
    let filepath = modulespath + fname + "/" + moduleFiles[i] + ".js";
    fs.closeSync(fs.openSync(filepath, "w"));
  }
  for (let i = 0; i < moduleFolders.length; i++) {
    let folderName = modulespath + fname + "/" + moduleFolders[i];
    fs.mkdirSync(folderName, 0744);
    //console.log(filepath);
  }
};
//const createModuleFolders = (item, index) => {};

/////////////////////////////////////////
// ADD GENERAL COMPONENT

const addComponent = input => {
  let compFolder = "./app/components/" + capitalize(input.component);

  if (!fs.existsSync(compFolder)) {
    fs.mkdirSync(compFolder, 0744);
    let fileclasspath = compFolder + "/" + capitalize(input.component) + ".js";
    let filestylepath = compFolder + "/styles.js";
    let fileindexpath = compFolder + "/index.js";
    fs.closeSync(fs.openSync(fileclasspath, "w"));
    fs.closeSync(fs.openSync(filestylepath, "w"));
    fs.closeSync(fs.openSync(fileindexpath, "w"));

    writeInFile(fileclasspath, reactClass(input.component));
    writeInFile(fileindexpath, reactIndex(input.component));
    writeInFile(filestylepath, reactStyles());
  } else {
    console.log("ERROR: Component already exist");
  }
};

/////////////////////////////////////////
// ADD MODULE COMPONENT OR SCENE

const addModuleComponent = input => {
  let modulePath = "./app/modules/" + input.module;
  let compFolder =
    modulePath + "/" + input.folder + "/" + capitalize(input.component);

  if (!fs.existsSync(compFolder)) {
    fs.mkdirSync(compFolder, 0744);
    let fileclasspath = compFolder + "/" + input.component + ".js";
    let filestylepath = compFolder + "/styles.js";
    let fileindexpath = compFolder + "/index.js";
    fs.closeSync(fs.openSync(fileclasspath, "w"));
    fs.closeSync(fs.openSync(filestylepath, "w"));
    fs.closeSync(fs.openSync(fileindexpath, "w"));

    writeInFile(fileclasspath, reactClass(input.component));
    writeInFile(fileindexpath, reactIndex(input.component));
    writeInFile(filestylepath, reactStyles());
  } else {
    console.log("ERROR: Component already exist");
  }
};

module.exports = { addStructure, addModule, addModuleComponent, addComponent };
