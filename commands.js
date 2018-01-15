const fs = require('fs');
const request = require('request');

module.exports = {
  curl: function (website) {
    let page = website.shift();
    request(page, function (error, response, body) {
      if (error) process.stdout.write('error: ' + error); // Print the error if one occurred
      process.stdout.write('body: curl' + body); // Print the HTML for the Google homepage.
    });
 },

  pwd: function(args){
    process.stdout.write('Directory is: ' + process.cwd());
    process.stdout.write('\nprompt > ');
  },
  date: function(args){
    process.stdout.write('Date is: ' + new Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function(args){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },

echo: function(args){
  let str = args.join(' ');
  process.stdout.write(str);
  process.stdout.write('\nprompt > ');
},

cat: function(filenames){
  let file = filenames.shift();
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    process.stdout.write(data);
    });
  process.stdout.write('\nprompt > ');
  },

head: function(filenames){
  let file = filenames.shift();
  let output = [];
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    output = data.split('\n');
    output = output.slice(0, 6);
    process.stdout.write(output.join('\n'));
    });
  process.stdout.write('\nprompt > ');
  },

tail: function(filenames){
  let file = filenames.shift();
  let output = [];
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    output = data.split('\n');
    output = output.slice(-5);
    process.stdout.write(output.join('\n'));
    });
  process.stdout.write('\nprompt > ');
  },

sort: function(filenames){
  let file = filenames.shift();
  let output = [];
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    output = data.split('\n');
    output = output.sort();
    process.stdout.write(output.join('\n'));
    });
  process.stdout.write('\nprompt > ');
  },

wc: function(filenames){
  let file = filenames.shift();
  let output = [];
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    output = data.split('\n');
    process.stdout.write(output.length.toString());
    });
  process.stdout.write('\nprompt > ');
  },

uniq: function(filenames){
  let uniqArr = [];
  let file = filenames.shift();
  let output = [];
  fs.readFile(file, 'utf-8', function(err, data){
    if(err) throw err;
    output = data.split('\n');
    for (let i = 0; i < output.length; i++) {
      let line = output[i];
      if (uniqArr.includes(line)) {
        continue;
      } else {
        uniqArr.push(line);
      }
    }
    process.stdout.write(uniqArr.join('\n'));
    });
  process.stdout.write('\nprompt > ');
  }
};
