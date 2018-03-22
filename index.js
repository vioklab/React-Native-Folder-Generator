#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");

const {
  addStructure,
  addModule,
  addModuleComponent,
  addComponent
} = require("./logic");
const {
  moduleQuestions,
  componentModuleQuestions,
  componentQuestions
} = require("./data/questions");

program.version("0.0.1").description("React Native Folder Structure Generator");

program
  .command("addStructure")
  .alias("new")
  .description("Add Structure")
  .action(() => {
    addStructure();
  });

program
  .command("addModule")
  .alias("mod")
  .description("Add Module")
  .action(() => {
    prompt(moduleQuestions).then(res => {
      addModule(res);
    });
  });

// General Components
program
  .command("addComponent")
  .alias("comp")
  .description("Add Component")
  .action(() => {
    prompt(componentQuestions).then(res => addComponent(res));
  });

// Module Components
program
  .command("addModuleComponent")
  .alias("modcomp")
  .description("Add Component")
  .action(() => {
    prompt(componentModuleQuestions).then(res => addModuleComponent(res));
  });

program.parse(process.argv);
