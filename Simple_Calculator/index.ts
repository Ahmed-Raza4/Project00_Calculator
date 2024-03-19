#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter First Number ", type: "number", name: "firstNumber" },
  { message: "Enter Second Number ", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform this action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Devision"],
  },
]);

//conditional statement
if (answer.operator === "Addition"){
    console.log(chalk.bold.red.bgWhite(answer.firstNumber + answer.secondNumber));
}else if (answer.operator === "Multiplication"){
    console.log(chalk.bold.red.bgWhite(answer.firstNumber * answer.secondNumber));
}else if (answer.operator === "Subtraction"){
    console.log(chalk.bold.red.bgWhite(answer.firstNumber - answer.secondNumber));
}else if (answer.operator === "Devision"){
    console.log(chalk.bold.red.bgWhite(answer.firstNumber / answer.secondNumber));
}else{
    console.log("Please Select Valid Operator")
}
