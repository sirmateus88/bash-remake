process.stdout.write('prompt > ');
const commands = require('./commands');
//const fs = require('fs');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let input = data.toString().trim().split(' '); // remove the newline
  let cmd = input.shift();
  //check if object has property,
  //if so invoke function
  //otherwise output some error

  if (commands.hasOwnProperty(cmd)){
    commands[cmd](input);
  } else {
    process.stdout.write('Command not recognized');
    process.stdout.write('\nprompt > ');
  }
});
