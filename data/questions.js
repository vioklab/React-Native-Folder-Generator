const { getModulesFolders } = require("../utils/utils");

// QUESTIONS
const moduleQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Module name:"
  }
];

const componentQuestions = [
  {
    type: "input",
    name: "component",
    message: "Enter Component name:"
  }
];

const componentModuleQuestions = [
  {
    type: "list",
    name: "module",
    message: "Which module do you choose?",
    choices: getModulesFolders(),
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: "list",
    name: "folder",
    message: "Choose a where to create it",
    choices: ["components", "scenes"],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: "input",
    name: "component",
    message: "Enter Component/Scene name:"
  }
];

module.exports = { moduleQuestions, componentModuleQuestions, componentQuestions };
