#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition)
{
let toDoQuestion = await inquirer.prompt ([{
    name: "firstQuestion",
    type: "input",
    message: "what would you like to add in your todos?",
},
{
    name:"secondQuestion",
    type: "confirm", // when type is "confirm", then answer would be in yes or no.
    message: "what more would you like to add in your todos?", 
    default: "true",
}

]);
todos.push (toDoQuestion.firstQuestion);
console.log(todos);
condition = toDoQuestion.secondQuestion;

}
