#! /usr/bin/env node

import inquirer from "inquirer";

let todoList = [];
let conditions = "true";
console.log("\n \t WELOCOME TO SHAHZIL TODO LIST APPLICATION\n");


while(conditions){
    let addTask = await inquirer.prompt([
    {
       name: "task",
       type: "input",
       message: "ENTER YOUR NEW TASK :",
    }

 ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task}TASK ADDED IN TO-DO LIST  SUCCESFULY`);

    let addMoreTask = await inquirer.prompt([
    {
      name: "addMore",
      type: "Confirm",
      message: "DO TOU WANT TO ADD MORE TASK?",
      default: "True"

    }

 ]);
    conditions = addMoreTask.addMore

} 
