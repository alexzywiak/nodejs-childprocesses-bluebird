var spawn = require('child_process').spawn;
var bbPromise = require('bluebird');

function loadProcess() {

  var process = spawn('node', ['./process.js']);

  process.stdout.on('data', function(data) {
    console.log(data.toString());
  });

  process.stderr.on('data', function(err) {
    reject(err.toString());
  });

  process.on('exit', function() {
    console.log('Done!');
  });

}

loadProcess();