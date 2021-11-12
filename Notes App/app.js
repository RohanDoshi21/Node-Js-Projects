// console.log('Welcome to the first text line in javascript')
// console.log("Rohit is a god");
const notes = require("./notes.js");
// const fs = require('fs')
// fs.writeFileSync('note.txt', "File created using Node Js and its a great File")

// const add = require('./utils.js');
// sum = add(4, -2)
// console.log(sum);

const validator = require("validator");
const chalk = require("chalk");

// console.log(name);

// console.log(validator.isEmail('rohan.doshi02@gmail.com'));
// console.log(chalk.red('Success!'));

// console.log(process.argv[2]);

const command = process.argv;

// if (command === 'add') {
//   console.log('Adding Note!')
// } else if (command == 'remove') {
//   console.log('Removing Note!');
// }
const yargs = require("yargs");

// console.log(process.argv);
// console.log(yargs.argv);

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, // if i dont give a title like node app.js add --title
      // then title is set to true by default
      type: "string", // now with this command title will be a blank string and not a bool value
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log('Title: ', argv.title)
    // console.log('Body: ', argv.body);
    notes.addNote(argv.title, argv.body);
  },
}).argv; // argv is necessary to print in the log!

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
}).argv;
