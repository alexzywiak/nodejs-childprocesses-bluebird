(function(){

	var value = process.argv[2];

	process.stdout.write('Process ' + value + ' beginning.');

	setTimeout(function(){
		process.stdout.write('Process ' + value + ' complete.');
	}, 2000);
})();