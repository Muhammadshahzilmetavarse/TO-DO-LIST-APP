#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todoList = [];
var conditions = "true";
console.log("\n \t WELOCOME TO SHAHZIL TODO LIST APPLICATION\n");
while (conditions) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "ENTER YOUR NEW TASK :",
        }
    ]);
    todoList.push(addTask.task);
    console.log("".concat(addTask.task, "TASK ADDED IN TO-DO LIST  SUCCESFULY"));
    var addMoreTask = await inquirer_1.default.prompt([
        {
            name: "addMore",
            type: "Confirm",
            message: "DO TOU WANT TO ADD MORE TASK?",
            default: "True"
        }
    ]);
    conditions = addMoreTask.addMore;
}
