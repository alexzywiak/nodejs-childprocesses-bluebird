(function() {

  var spawn = require('child_process').spawn;
  var bbPromise = require('bluebird');

  function loadProcess(arg) {

    return new bbPromise(function(resolve, reject) {
      var process = spawn('node', ['./process.js', arg]);

      process.stdout.on('data', function(data) {
        console.log(data.toString());
      });

      process.stderr.on('data', function(err) {
        reject(err.toString());
      });

      process.on('exit', function() {
        resolve();
      });
    });
  }

  var commands = [1, 2, 3, 4, 5].map(function(value) {
    return loadProcess.bind(null, value);
  });

  return bbPromise.map(commands, function(command) {
      return command();
    }, {
      concurrency: 1
    })
    .then(function() {
      console.log('Child Processes Completed');
    });


})();
