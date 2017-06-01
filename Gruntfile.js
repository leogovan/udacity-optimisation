'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		pagespeed: {
			options: {
				nokey: true,
				url: "https://leogovan.github.io/udacity-optimisation/"
			},
			prod: {
				options: {
					url: "https://leogovan.github.io/udacity-optimisation/",
					locale: "en_GB",
					strategy: "desktop",
					threshold: 90
				}
			},
			paths: {
				options: {
					paths: ["https://leogovan.github.io/udacity-optimisation/"], // can be a list of array elements
					locale: "en_GB",
					strategy: "mobile",
					threshold: 90
				}
			}
		}
	}); // end of initConfig

	// Page Speed Insights
	grunt.loadNpmTasks('grunt-pagespeed');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// 'grunt speed' in cmd line to run
	grunt.registerTask('speed', ['pagespeed']);

	// css grunt tasks
	grunt.registerTask('default', ['pagespeed']);
}; // end of module.exports


